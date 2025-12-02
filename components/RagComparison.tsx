
import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';

// Left Side Items (The Bottleneck / RAG from Scratch)
const CHAOS_LABELS = [
  "Config Vector DB",
  "Parse PDFs manually",
  "Handle rate limits",
  "Fix chunking strategy",
  "Re-index data",
  "Debug hallucinations",
  "Manage embeddings",
  "Server maintenance",
  "API key rotation"
];

// Right Side Items (Ragrift / Organized)
const ORDER_ITEMS = [
  { text: "1. Connect Data Source", delay: "0.2s" },
  { text: "2. Ragrift Auto-Indexes", delay: "1.2s" },
  { text: "3. Start Chatting", delay: "2.2s" },
];

export const RagComparison: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  
  const [hasStarted, setHasStarted] = useState(false);

  // Scroll Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 } // Start when 30% visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  // Physics Effect
  useEffect(() => {
    if (!hasStarted || !sceneRef.current) return;

    // --- Matter.js Setup ---
    const Engine = Matter.Engine,
          Render = Matter.Render,
          Runner = Matter.Runner,
          Bodies = Matter.Bodies,
          Composite = Matter.Composite,
          Mouse = Matter.Mouse,
          MouseConstraint = Matter.MouseConstraint,
          Events = Matter.Events;

    const engine = Engine.create();
    const world = engine.world;
    engineRef.current = engine;

    const width = sceneRef.current.clientWidth;
    const height = 550;

    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width,
        height,
        background: 'transparent',
        wireframes: false,
        pixelRatio: window.devicePixelRatio
      }
    });
    renderRef.current = render;

    // Boundaries
    const wallOptions = { 
      isStatic: true, 
      render: { visible: false }, 
      friction: 0.8,
      restitution: 0.2
    };
    
    const floor = Bodies.rectangle(width / 2, height + 30, width, 60, wallOptions);
    const leftWall = Bodies.rectangle(-30, height / 2, 60, height * 2, wallOptions);
    const rightWall = Bodies.rectangle(width + 30, height / 2, 60, height * 2, wallOptions);

    Composite.add(world, [floor, leftWall, rightWall]);

    // Create Chaos Items (Pills)
    const pills = CHAOS_LABELS.map((label, i) => {
      // Random X, Staggered Y above view
      const x = Math.random() * (width - 100) + 50;
      const y = -150 - (i * 100); 
      
      const pillWidth = Math.max(160, label.length * 10 + 40);
      const pillHeight = 56; 

      const body = Bodies.rectangle(x, y, pillWidth, pillHeight, {
        chamfer: { radius: 28 }, // Fully rounded ends
        angle: (Math.random() - 0.5) * 0.5,
        restitution: 0.5, // Bounciness
        friction: 0.05,
        render: { opacity: 0 } // Hide default body, we draw custom
      });
      
      (body as any).labelContent = label;
      (body as any).width = pillWidth;
      (body as any).height = pillHeight;
      
      return body;
    });

    Composite.add(world, pills);

    // Add Ceiling after items have fallen in (approx 2 seconds)
    setTimeout(() => {
        const ceiling = Bodies.rectangle(width / 2, -30, width, 60, wallOptions);
        Composite.add(world, ceiling);
    }, 2500);

    // Mouse Control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });

    // Fix scrolling interaction
    mouseConstraint.mouse.element.removeEventListener("mousewheel", (mouseConstraint.mouse as any).mousewheel);
    mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", (mouseConstraint.mouse as any).mousewheel);

    Composite.add(world, mouseConstraint);

    // Custom Rendering Loop
    Events.on(render, 'afterRender', () => {
      const context = render.context;
      
      pills.forEach((body) => {
        const { x, y } = body.position;
        const angle = body.angle;
        const width = (body as any).width;
        const height = (body as any).height;
        const label = (body as any).labelContent;

        context.translate(x, y);
        context.rotate(angle);

        // Draw Shadow
        context.shadowColor = "rgba(0,0,0,0.3)";
        context.shadowBlur = 10;
        context.shadowOffsetY = 4;

        // Draw Pill Shape
        context.beginPath();
        context.roundRect(-width/2, -height/2, width, height, height/2);
        
        // Style: Dark Grey with Red/Orange Accent Border for "Danger/Bottleneck" feel
        context.fillStyle = "#1c2128"; 
        context.fill();
        
        // Reset Shadow for stroke/text
        context.shadowColor = "transparent"; 
        context.lineWidth = 1.5;
        context.strokeStyle = "#30363d";
        context.stroke();

        // Draw Text
        context.fillStyle = "#e2e8f0"; // Bright text
        context.font = "600 15px Manrope"; 
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText(label, 0, 1);

        context.rotate(-angle);
        context.translate(-x, -y);
      });
    });

    // Run Engine
    Render.run(render);
    const runner = Runner.create();
    runnerRef.current = runner;
    Runner.run(runner, engine);

    // Resize Handler
    const handleResize = () => {
      if (!sceneRef.current) return;
      render.canvas.width = sceneRef.current.clientWidth;
      render.canvas.height = height;
      Matter.Body.setPosition(floor, { x: render.canvas.width / 2, y: height + 30 });
      Matter.Body.setPosition(rightWall, { x: render.canvas.width + 30, y: height / 2 });
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
      if (render.canvas) render.canvas.remove();
    };
  }, [hasStarted]);

  return (
    <div ref={containerRef} className="w-full py-24 lg:py-32">
      <style>
        {`
          @keyframes dropIn {
            0% { transform: translateY(-100px) scale(0.9); opacity: 0; }
            100% { transform: translateY(0) scale(1); opacity: 1; }
          }
          .animate-drop {
            animation: dropIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }
        `}
      </style>

      {/* Section Header */}
      <div className="mb-16 flex flex-col items-center text-center">
        <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
           Manual RAG vs. Ragrift
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-neutral-400">
           Stop wrestling with infrastructure. Start building value.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 overflow-hidden rounded-[2rem] border border-[#30363d] bg-[#0d1117] md:grid-cols-2 shadow-2xl">
        
        {/* Left Column: Chaos (Physics) */}
        <div className="relative border-b border-[#30363d] md:border-b-0 md:border-r flex flex-col h-[600px] bg-[#0d1117]">
            
           <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#30363d 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} 
           />

           <div className="border-b border-[#30363d] bg-[#161b22]/80 backdrop-blur-sm p-6 z-10 flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">Bear the bottleneck</h3>
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Manual Setup</span>
          </div>
          
          <div ref={sceneRef} className="relative flex-1 w-full cursor-grab active:cursor-grabbing overflow-hidden">
             {/* Physics canvas mounts here */}
             {!hasStarted && (
               <div className="absolute inset-0 flex items-center justify-center text-neutral-500">
                  Waiting for scroll...
               </div>
             )}
          </div>
        </div>

        {/* Right Column: Order (Animation) */}
        <div className="relative flex flex-col h-[600px] bg-[#161b22]/20">
           
           {/* Glow Effect */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#CCF045]/5 blur-[120px] pointer-events-none" />

          <div className="border-b border-[#30363d] bg-[#161b22]/80 backdrop-blur-sm p-6 z-10 flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">Use Ragrift</h3>
            <span className="text-xs font-semibold text-[#CCF045] uppercase tracking-wider">Optimized</span>
          </div>

          <div className="relative flex-1 flex flex-col items-center justify-center gap-6">
             {/* Stacking Items */}
             {hasStarted && ORDER_ITEMS.map((item, idx) => (
               <div 
                  key={idx}
                  className="relative rounded-full bg-[#CCF045] px-8 py-5 text-xl font-bold text-black shadow-[0_10px_40px_-10px_rgba(204,240,69,0.4)] animate-drop w-[320px] text-center opacity-0 z-10 border-t border-white/40"
                  style={{ animationDelay: item.delay }}
               >
                 {item.text}
               </div>
             ))}

             {/* Connecting Line */}
             <div className={`absolute top-[20%] bottom-[20%] w-[2px] bg-gradient-to-b from-transparent via-[#30363d] to-transparent transition-opacity duration-1000 ${hasStarted ? 'opacity-100' : 'opacity-0'}`} />
          </div>
        </div>

      </div>
    </div>
  );
};
