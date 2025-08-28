import React, { useState, useEffect } from 'react';
import { ChevronRight, Menu, X, Mail, Phone, MapPin, Calendar, User, Briefcase, GraduationCap } from 'lucide-react';

const HenryOgunBlog = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoAnimate, setLogoAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogoAnimate(true);
      setTimeout(() => setLogoAnimate(false), 5000);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="relative bg-gradient-to-r from-slate-900/95 via-blue-900/95 to-purple-900/95 backdrop-blur-sm border-b border-white/10 shadow-2xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/90 to-white/70 shadow-xl hover:shadow-blue-500/25 p-2 hover:scale-110 hover:rotate-3 transition-all duration-500 cursor-pointer">
                <img 
                  src="/Images/without the name.png" 
                  alt="Henry Ogun Logo" 
                  className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                  style={{
                    animation: logoAnimate ? 'dangle 0.8s ease-in-out 6 forwards' : 'none',
                    transformOrigin: 'center top'
                  }}
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Henry Ogun
                </h1>
                <p className="text-sm bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent font-semibold">
                  SoundMasterH1
                </p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">Home</a>
              <a href="#about" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">About</a>
              <a href="#projects" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">Projects</a>
              <a href="#blog" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">Blog</a>
              <a href="#contact" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">Contact</a>
            </nav>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">Home</a>
                <a href="#about" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">About</a>
                <a href="#projects" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">Projects</a>
                <a href="#blog" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">Blog</a>
                <a href="#contact" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">Contact</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-bounce" style={{animationDuration: '6s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl animate-ping" style={{animationDuration: '4s'}}></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-block relative mb-6">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-60"></div>
              <div className="relative w-32 h-32 rounded-3xl overflow-hidden bg-gradient-to-br from-white/90 to-white/70 shadow-2xl hover:shadow-blue-500/25 p-4 hover:scale-110 hover:rotate-3 transition-all duration-500 cursor-pointer mx-auto">
                <img 
                  src="/Images/without the name.png" 
                  alt="Henry Ogun" 
                  className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                  style={{
                    animation: logoAnimate ? 'dangle 0.8s ease-in-out 6 forwards' : 'none',
                    transformOrigin: 'center top'
                  }}
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent hover:scale-105 transform transition-all duration-300 tracking-tight">
              Henry Ogun
            </h1>
            <p className="text-2xl md:text-3xl bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent font-bold mb-6 hover:tracking-wider transition-all duration-300">
              SoundMasterH1
            </p>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Broadcast Engineer & Full-Stack Developer bridging the world of audio and code. 
              Transforming sound waves into digital experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-3 bg-blue-500/20 backdrop-blur-xl border border-blue-400/30 rounded-full text-blue-200 font-medium hover:scale-105 transition-transform duration-300">
                🎛️ Broadcast Engineer
              </span>
              <span className="px-6 py-3 bg-purple-500/20 backdrop-blur-xl border border-purple-400/30 rounded-full text-purple-200 font-medium hover:scale-105 transition-transform duration-300">
                💻 Full-Stack Developer
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="relative py-16 bg-gradient-to-r from-slate-900/50 to-purple-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <div className="inline-block relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-sm"></div>
              <div className="relative bg-white/5 backdrop-blur-2xl rounded-xl px-8 py-4 border border-white/10">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-2">
                  Follow My Work
                </h2>
                <p className="text-xl text-slate-200 hover:text-white transition-colors duration-300">
                  Connect with me across platforms for the latest updates
                </p>
                <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full opacity-60 animate-pulse"></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <a href="https://www.linkedin.com/in/henry-ogun-079907a5/" target="_blank" rel="noopener noreferrer" className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-2xl blur-sm transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg className="relative w-10 h-10 text-white mx-auto mb-3 group-hover:scale-125 group-hover:text-blue-300 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="relative text-white text-sm font-semibold group-hover:text-blue-200 transition-colors duration-300">LinkedIn</span>
              </div>
            </a>
            <a href="https://twitter.com/soundmasterh1" target="_blank" rel="noopener noreferrer" className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-black/20 rounded-2xl blur-sm transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-gray-400/50 shadow-2xl hover:shadow-gray-500/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg className="relative w-10 h-10 text-white mx-auto mb-3 group-hover:scale-125 group-hover:text-gray-300 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="relative text-white text-sm font-semibold group-hover:text-gray-200 transition-colors duration-300">X (Twitter)</span>
              </div>
            </a>
            <a href="https://www.instagram.com/soundmasterh1" target="_blank" rel="noopener noreferrer" className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-2xl blur-sm transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-pink-400/50 shadow-2xl hover:shadow-pink-500/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg className="relative w-10 h-10 text-white mx-auto mb-3 group-hover:scale-125 group-hover:text-pink-300 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="relative text-white text-sm font-semibold group-hover:text-pink-200 transition-colors duration-300">Instagram</span>
              </div>
            </a>
            <a href="https://www.youtube.com/@soundmasterh1339" target="_blank" rel="noopener noreferrer" className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-700/20 rounded-2xl blur-sm transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-red-400/50 shadow-2xl hover:shadow-red-500/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg className="relative w-10 h-10 text-white mx-auto mb-3 group-hover:scale-125 group-hover:text-red-300 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span className="relative text-white text-sm font-semibold group-hover:text-red-200 transition-colors duration-300">YouTube</span>
              </div>
            </a>
            <a href="https://wa.me/2348060776418" target="_blank" rel="noopener noreferrer" className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-green-700/20 rounded-2xl blur-sm transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/50 shadow-2xl hover:shadow-green-500/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg className="relative w-10 h-10 text-white mx-auto mb-3 group-hover:scale-125 group-hover:text-green-300 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                </svg>
                <span className="relative text-white text-sm font-semibold group-hover:text-green-200 transition-colors duration-300">WhatsApp</span>
              </div>
            </a>
            <a href="https://github.com/HenryOgun/soundmasterh1" target="_blank" rel="noopener noreferrer" className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700/20 to-black/20 rounded-2xl blur-sm transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-gray-500/50 shadow-2xl hover:shadow-gray-600/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700/5 via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg className="relative w-10 h-10 text-white mx-auto mb-3 group-hover:scale-125 group-hover:text-gray-300 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="relative text-white text-sm font-semibold group-hover:text-gray-200 transition-colors duration-300">GitHub</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-8 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400 text-sm hover:text-slate-300 transition-colors duration-300">
            © 2025 Henry Ogun. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HenryOgunBlog;