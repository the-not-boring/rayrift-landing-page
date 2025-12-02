
import React from 'react';
import { SetrexLogo } from './SetrexLogo';

// Social Icons
const IconX = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const IconLinkedIn = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-3.36-4-3.11-4 0V19h-3v-9h3v1.27a5.37 5.37 0 015 0z" />
  </svg>
);

const IconYouTube = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const IconGitHub = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const SocialButton = ({ icon }: { icon: React.ReactNode }) => (
  <a 
    href="#" 
    className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#30363d] bg-[#161b22] text-neutral-400 transition-all hover:border-[#CCF045]/50 hover:bg-[#1c2128] hover:text-white"
  >
    {icon}
  </a>
);

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full overflow-hidden border-t border-[#30363d] bg-[#0d1117] pt-20">
      
      {/* Background Effect: Fading Lines & Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Bottom Purple Glow */}
        <div className="absolute bottom-0 left-0 w-full h-[400px] bg-gradient-to-t from-[#581c87]/20 to-transparent" />
        
        {/* Vertical Lines Fading Up */}
        <div 
          className="absolute inset-0 flex justify-between px-4 md:px-20 opacity-10"
          style={{ maskImage: 'linear-gradient(to top, black, transparent)' }}
        >
           {/* Generate a series of vertical lines */}
           {[...Array(12)].map((_, i) => (
             <div key={i} className="w-px h-full bg-indigo-400/50" />
           ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <SetrexLogo />
            </div>
            <p className="mb-8 max-w-sm text-base leading-relaxed text-neutral-400">
              Ship faster with reliable pipelines, actionable insights, and enterprise-grade controls - all in one platform.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <SocialButton icon={<IconX />} />
              <SocialButton icon={<IconLinkedIn />} />
              <SocialButton icon={<IconYouTube />} />
              <SocialButton icon={<IconGitHub />} />
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-2" />

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:col-span-6">
            
            {/* Product */}
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-neutral-200">PRODUCT</h4>
              <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Features</a>
              <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Pricing</a>
              <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Changelog</a>
              <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">404</a>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-neutral-200">COMPANY</h4>
              <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Contact</a>
              <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">About</a>
              <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Blog</a>
              <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Press</a>
            </div>

            {/* Social */}
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-neutral-200">SOCIAL</h4>
              <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">GitHub</a>
              <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">YouTube</a>
              <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">X (Twitter)</a>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-neutral-200">LEGAL</h4>
              <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">DPA</a>
              <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Status</a>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 py-8 text-center">
           <p className="font-mono text-xs text-neutral-500">
             v1.3.7 • macOS 13+ • Windows 11+
           </p>
        </div>
      </div>
    </footer>
  );
};
