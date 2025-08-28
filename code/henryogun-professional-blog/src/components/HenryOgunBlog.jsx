import React, { useState, useEffect } from 'react';
import { Menu, X, Play, Award, Radio, Code, MapPin, Mail, Phone, ExternalLink, ChevronDown, Users, Calendar, Star } from 'lucide-react';

const HenryOgunBlog = () => {
  // Add custom CSS for dangling animation
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes dangle {
        0%, 100% { transform: rotate(0deg); }
        25% { transform: rotate(-8deg); }
        75% { transform: rotate(8deg); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentProject, setCurrentProject] = useState(0);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showAllPostsModal, setShowAllPostsModal] = useState(false);
  const [logoAnimate, setLogoAnimate] = useState(true);

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "The Evolution of Broadcast Engineering in the Digital Age",
      excerpt: "Exploring how traditional radio broadcasting has transformed with digital technologies and what it means for the future of media.",
      content: `The landscape of broadcast engineering has undergone a revolutionary transformation over the past decade. As Head of Engineering at Diamond FM, I've witnessed firsthand how digital technologies have reshaped every aspect of radio broadcasting.

**From Analog to Digital Excellence**
Gone are the days of purely analog equipment and manual processes. Today's broadcast engineering integrates sophisticated digital audio workstations, automated playlist management, and real-time streaming capabilities. This shift has not only improved audio quality but also enhanced operational efficiency.

**Key Technologies Driving Change:**
- Digital Audio Workstations (DAWs) for seamless audio production
- IP-based audio distribution systems
- Cloud-based content management platforms
- Real-time analytics and listener engagement tools

**The Human Element Remains Crucial**
While technology advances rapidly, the fundamental role of broadcast engineers remains vital. We're the bridge between cutting-edge technology and compelling content delivery. Our expertise ensures that every listener receives crystal-clear audio experiences, whether they're tuning in via traditional radio or digital streaming platforms.

**Looking Forward**
The future of broadcast engineering lies in hybrid approaches that combine traditional broadcasting excellence with emerging technologies like AI-assisted content curation and immersive audio experiences.`,
      date: "2025-01-15",
      category: "Broadcast Engineering",
      readTime: "5 min read",
      image: "/images/h3.jpg"
    },
    {
      id: 2,
      title: "Full-Stack Development Meets Audio Production",
      excerpt: "How my background in sound engineering influences my approach to building robust web applications and user experiences.",
      content: `The intersection of audio engineering and software development has shaped my unique approach to building web applications. My 12+ years in broadcast engineering provides invaluable insights into creating user-centric digital solutions.

**Audio Engineering Principles in Code**
Just as in audio production, web development requires attention to signal flow, latency management, and user experience optimization. These principles translate beautifully into clean, efficient code architecture.

**Lessons from the Studio:**
- **Signal Chain Thinking**: Every function and component serves a specific purpose in the data flow
- **Real-time Processing**: Understanding how to handle live data streams and user interactions
- **Quality Control**: Rigorous testing processes, similar to audio monitoring and quality assurance
- **User Experience Focus**: Just as radio must engage listeners, web apps must captivate users

**Technical Stack Integration**
My projects often involve audio-related technologies:
- WebRTC for real-time audio streaming
- Node.js for handling audio file processing
- React for creating intuitive audio control interfaces
- MongoDB for storing audio metadata and user preferences

**Building for the Audio Industry**
Having worked extensively in broadcast environments, I understand the specific needs of audio professionals. This insight allows me to create tools that truly serve the industry's requirements, from content management systems to streaming platforms.

**The Future Convergence**
As media continues to evolve, the synergy between audio expertise and web development becomes increasingly valuable, opening new possibilities for immersive digital experiences.`,
      date: "2025-01-10",
      category: "Technology",
      readTime: "7 min read",
      image: "/images/h6.jpg"
    },
    {
      id: 3,
      title: "Building Scalable Audio Streaming Platforms",
      excerpt: "Technical insights into creating high-performance streaming solutions for radio stations and content creators.",
      content: `Creating scalable audio streaming platforms requires a deep understanding of both audio engineering principles and modern web architecture. Through my work at Diamond FM and various development projects, I've learned the critical factors for success.

**Architecture Fundamentals**
A robust streaming platform must handle multiple concurrent users while maintaining audio quality and minimal latency. This requires careful consideration of:

**Backend Infrastructure:**
- **CDN Integration**: Global content delivery for reduced latency
- **Load Balancing**: Distributing traffic across multiple servers
- **Database Optimization**: Efficient storage and retrieval of audio metadata
- **Real-time Analytics**: Monitoring stream health and user engagement

**Audio Processing Pipeline:**
- **Format Optimization**: Multiple bitrates and formats for different devices
- **Compression Algorithms**: Balancing quality with bandwidth requirements
- **Buffer Management**: Preventing interruptions during playback
- **Failover Systems**: Ensuring 99.9% uptime reliability

**Frontend Considerations:**
The user interface must be intuitive while providing professional-grade controls:
- Responsive design for mobile and desktop
- Real-time waveform visualization
- Seamless playlist management
- Social sharing capabilities

**Performance Metrics:**
- Stream startup time under 2 seconds
- Buffer health monitoring
- User engagement tracking
- Quality adaptation based on connection speed

**Scaling Challenges:**
As platforms grow, new challenges emerge:
- Database sharding for large content libraries
- Microservices architecture for modular development
- Kubernetes orchestration for container management
- Monitoring and alerting systems

**Industry Impact:**
Well-designed streaming platforms democratize content creation, allowing independent creators to reach global audiences with professional-quality delivery systems.`,
      date: "2025-01-05",
      category: "Full-Stack Development",
      readTime: "10 min read",
      image: "/images/h2.jpg"
    }
  ];

  // Additional blog posts for "View All Posts"
  const additionalPosts = [
    {
      id: 4,
      title: "Modern Audio Processing with Web Technologies",
      excerpt: "Exploring how WebRTC, Web Audio API, and modern browsers are revolutionizing real-time audio processing and streaming.",
      content: `The web has evolved into a powerful platform for audio processing and real-time communication. As both a broadcast engineer and full-stack developer, I've witnessed the remarkable convergence of web technologies and professional audio tools.

**The Web Audio API Revolution**
Modern browsers now provide sophisticated audio processing capabilities that were once exclusive to desktop applications. The Web Audio API enables real-time audio manipulation, effects processing, and spatial audio experiences directly in the browser.

**Key Technologies:**
- **WebRTC**: Real-time peer-to-peer audio communication
- **Web Audio API**: Advanced audio processing and synthesis
- **MediaStream API**: Access to microphone and audio devices
- **WebAssembly**: High-performance audio algorithms in the browser

**Real-World Applications:**
Through my work at Diamond FM, I've implemented several web-based audio solutions:
- Live streaming dashboard with real-time audio monitoring
- Remote interview system using WebRTC technology
- Browser-based audio editing tools for content creators
- Real-time audio effects for live broadcasts

**Performance Considerations:**
Web-based audio processing requires careful attention to latency, buffer sizes, and cross-browser compatibility. Modern frameworks like React can integrate seamlessly with audio worklets for optimal performance.

**The Future of Web Audio:**
As 5G networks expand and browsers become more capable, we're seeing the emergence of cloud-based digital audio workstations, collaborative music creation platforms, and immersive spatial audio experiences on the web.`,
      date: "2025-01-20",
      category: "Web Audio",
      readTime: "8 min read",
      image: "/images/h5.jpg"
    },
    {
      id: 5,
      title: "Database Design for Media Content Management",
      excerpt: "Best practices for designing scalable databases to manage large collections of audio files, metadata, and user-generated content.",
      content: `Managing media content at scale requires thoughtful database architecture. At Diamond FM, we handle thousands of audio files, playlists, and metadata records daily, requiring robust and efficient database solutions.

**Database Architecture Fundamentals**
Media databases must balance performance, scalability, and data integrity while handling various content types and metadata structures.

**Key Design Principles:**
- **Normalization vs. Denormalization**: Finding the right balance for query performance
- **Indexing Strategy**: Optimizing search across metadata fields
- **File Storage**: Separating binary data from relational data
- **Caching Layers**: Redis for frequently accessed metadata

**Schema Design Patterns:**
Our content management system uses several proven patterns:
- Hierarchical categories for content organization
- Tag-based classification for flexible searching
- Version control for edited content
- User permissions and access control

**Scalability Challenges:**
As content libraries grow, new challenges emerge:
- Distributed storage across multiple servers
- Database sharding for geographic distribution
- Search optimization for large datasets
- Backup and disaster recovery strategies

**Technology Stack:**
- **MongoDB**: Flexible document storage for varied metadata
- **PostgreSQL**: Relational data for user management and analytics
- **Elasticsearch**: Full-text search across content libraries
- **S3**: Scalable file storage with CDN integration

**Performance Optimization:**
Query optimization, proper indexing, and intelligent caching strategies are crucial for responsive user experiences in media applications.`,
      date: "2025-01-12",
      category: "Database Design",
      readTime: "6 min read",
      image: "/images/h3.jpg"
    },
    {
      id: 6,
      title: "Microservices Architecture for Broadcasting Systems",
      excerpt: "How to design resilient, scalable broadcasting systems using microservices principles and modern containerization technologies.",
      content: `Modern broadcasting systems require unprecedented reliability and scalability. Microservices architecture provides the flexibility needed to handle complex broadcasting workflows while maintaining system stability.

**Why Microservices for Broadcasting?**
Traditional monolithic broadcasting systems can be fragile and difficult to scale. Microservices offer several advantages for media operations:

**Key Benefits:**
- **Independent Scaling**: Scale high-traffic services independently
- **Fault Isolation**: Service failures don't crash entire systems
- **Technology Flexibility**: Use the best tools for each service
- **Deployment Independence**: Update services without system downtime

**Broadcasting System Components:**
Our Diamond FM architecture includes these microservices:
- **Audio Ingestion Service**: Handles file uploads and processing
- **Playlist Management Service**: Manages scheduling and rotation
- **Streaming Service**: Handles live audio distribution
- **Analytics Service**: Tracks listener engagement and metrics
- **User Management Service**: Authentication and authorization

**Communication Patterns:**
- **API Gateway**: Central entry point for all client requests
- **Event Streaming**: Apache Kafka for real-time data flow
- **Service Mesh**: Istio for service-to-service communication
- **Circuit Breakers**: Preventing cascade failures

**Containerization Strategy:**
- **Docker**: Containerized services for consistency
- **Kubernetes**: Orchestration and auto-scaling
- **Helm Charts**: Simplified deployment management
- **GitOps**: Automated deployment pipelines

**Monitoring and Observability:**
Comprehensive monitoring is crucial for microservices:
- Distributed tracing with Jaeger
- Metrics collection with Prometheus
- Log aggregation with ELK stack
- Health checks and alerting

**Challenges and Solutions:**
Microservices introduce complexity that requires careful management through proper tooling, documentation, and team practices.`,
      date: "2025-01-08",
      category: "System Architecture",
      readTime: "9 min read",
      image: "/images/h6.jpg"
    }
  ];

  // Featured projects
  const projects = [
    {
      title: "Diamond FM Broadcasting System",
      description: "Led the setup and optimization of broadcasting equipment from studios to transmission rooms, serving thousands of listeners daily.",
      tech: "Broadcast Engineering, Audio Production, Systems Integration",
      category: "broadcast"
    },
    {
      title: "Radio Content Management Platform",
      description: "Full-stack web application for managing radio content, scheduling, and real-time broadcast monitoring.",
      tech: "React, Node.js, MongoDB, WebRTC",
      category: "fullstack"
    },
    {
      title: "Award-Winning Documentary Production",
      description: "Produced 'Ilorin: The Place Called Away' - recognized by ICFJ for climate and migration reporting in Nigeria.",
      tech: "Audio Production, Sound Design, Documentary Production",
      category: "broadcast"
    }
  ];

  const achievements = [
    { year: "2018", title: "ICFJ Climate Migration Reporting Award", org: "International Center for Journalists" },
    { year: "2013-2015", title: "Best Radio Imaging Station (North Central)", org: "Nigerian Broadcasters Merit Award" },
    { year: "2020", title: "Pioneer Broadcasting Setup", org: "Diamond FM" },
    { year: "2016", title: "Tales of Prosperity Documentary Series", org: "Kwara State Government" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Logo dangling animation every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setLogoAnimate(true);
      // Reset animation state after animation completes (6 cycles * 0.8s = 4.8s)
      setTimeout(() => {
        setLogoAnimate(false);
      }, 4800);
    }, 15000); // Every 15 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-24 h-24 rounded-lg overflow-hidden bg-white shadow-lg p-2 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                <img src="/images/without the name.png" alt="Henry Ogun Logo" className="w-full h-full object-contain group-hover:rotate-6 transition-transform duration-300" style={{
                  animation: logoAnimate ? 'dangle 0.8s ease-in-out 6 forwards' : 'none',
                  transformOrigin: 'center top'
                }} />
              </div>
              <div className="group cursor-pointer">
                <h1 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-slate-800 via-blue-700 to-purple-700 bg-clip-text text-transparent hover:scale-110 transition-all duration-500 transform group-hover:animate-pulse tracking-tight">
                  Henry Ogun
                </h1>
                <p className="text-lg lg:text-xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent hover:tracking-widest transition-all duration-500 transform group-hover:translate-x-2 mt-1">
                  SoundMasterH1
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Blog', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-2xl font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              {['Home', 'About', 'Projects', 'Blog', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-2xl text-gray-700 hover:text-blue-600"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-20 overflow-hidden flex items-center">
        {/* Dynamic background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl animate-ping"></div>
          <div className="absolute inset-0 opacity-5">
            <img src="/images/h5.jpg" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400/30 rotate-45 animate-spin" style={{animationDuration: '8s'}}></div>
          <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-purple-400/30 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-cyan-400/30 rotate-12 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              {/* Experience badge with enhanced styling */}
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/10 text-blue-200 text-sm font-medium mb-8 hover:scale-105 transition-transform duration-300">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse mr-3"></div>
                <Radio size={18} className="mr-2 text-blue-300" />
                12+ Years Experience
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse ml-3"></div>
              </div>
              
              {/* Enhanced main heading with animations */}
              <div className="relative mb-8">
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-pulse">
                    Bridging
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500 inline-block">
                    Audio & Code
                  </span>
                </h1>
                
                {/* Decorative line with animation */}
                <div className="absolute -bottom-2 left-0 lg:left-auto lg:right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full animate-pulse" style={{width: '40%'}}></div>
              </div>
              
              {/* Enhanced description */}
              <div className="relative mb-10">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-400 rounded-full opacity-30"></div>
                <p className="text-xl lg:text-2xl text-slate-200 leading-relaxed pl-8">
                  I'm <span className="text-blue-300 font-semibold">Henry Ogun</span>, a certified broadcast engineer and full-stack developer. 
                  I transform <span className="text-purple-300 font-semibold">sound waves</span> into <span className="text-cyan-300 font-semibold">digital experiences</span> and build robust web applications 
                  that connect people across platforms.
                </p>
              </div>
              {/* Enhanced CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center">
                    <Play size={22} className="mr-3 group-hover:scale-110 transition-transform duration-300" />
                    View My Work
                  </div>
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="group relative px-8 py-4 bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white font-semibold rounded-2xl shadow-2xl hover:bg-white/20 hover:border-white/40 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center justify-center">
                    <Mail size={22} className="mr-3 group-hover:scale-110 transition-transform duration-300" />
                    Get In Touch
                  </div>
                </button>
              </div>
            </div>
            
            {/* Enhanced profile section */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Floating background elements */}
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl group-hover:blur-xl transition-all duration-500"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl group-hover:blur-xl transition-all duration-500"></div>
                
                {/* Profile image with enhanced styling */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-sm opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <img
                    src="/images/h7.jpg"
                    alt="Henry Ogun"
                    className="relative w-96 h-96 rounded-3xl object-cover shadow-2xl border-4 border-white/20 group-hover:scale-105 transform transition-all duration-500 animate-pulse"
                    style={{animationDuration: '4s'}}
                  />
                  
                  {/* Floating info cards */}
                  <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="flex items-center text-white">
                      <MapPin size={18} className="mr-2 text-blue-300" />
                      <div>
                        <p className="text-sm font-semibold">Based in</p>
                        <p className="text-xs text-slate-300">Ilorin, Nigeria</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="flex items-center text-white">
                      <Award size={18} className="mr-2 text-yellow-400" />
                      <div>
                        <p className="text-sm font-semibold">ICFJ Winner</p>
                        <p className="text-xs text-slate-300">Award Winner</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="relative inline-block">
              {/* Multiple layered backgrounds for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 via-purple-150 to-pink-100 rounded-3xl transform -rotate-1.5 opacity-30 blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-purple-100 via-indigo-150 to-blue-100 rounded-3xl transform rotate-1.5 opacity-40 blur-xs"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl transform -rotate-0.5 opacity-60"></div>
              
              {/* Glass morphism effect */}
              <div className="relative bg-white/85 backdrop-blur-md rounded-3xl px-12 py-8 shadow-2xl border border-white/20">
                {/* Decorative elements */}
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-70 animate-pulse"></div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-60 animate-bounce"></div>
                <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-50 animate-ping"></div>
                
                {/* Text with enhanced styling */}
                <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-300">
                  About Me
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto hover:text-gray-700 transition-colors duration-300">
                  A unique blend of technical expertise in broadcast engineering and modern web development
                </p>
                
                {/* Bottom accent line */}
                <div className="mt-4 h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 hover:scale-105 transition-transform duration-300 cursor-pointer">My Journey</h3>
              <div className="space-y-6 text-gray-600">
                <p>
                  As Head of Engineering at Diamond FM, I oversee complex broadcasting systems 
                  that reach thousands of listeners daily. My expertise spans from traditional 
                  radio transmission to cutting-edge digital audio technologies.
                </p>
                <p>
                  My passion for technology extends beyond the studio. As a full-stack developer, 
                  I build web applications that solve real-world problems, combining my deep 
                  understanding of audio engineering with modern software development practices.
                </p>
                <p>
                  I've produced award-winning documentaries, including "Ilorin: The Place Called Away," 
                  recognized by the International Center for Journalists. My work bridges the gap 
                  between technical excellence and meaningful storytelling.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <Radio className="text-blue-600 mb-4" size={32} />
                <h4 className="font-bold text-gray-900 mb-2">Broadcast Engineering</h4>
                <p className="text-sm text-gray-600">12+ years of experience in radio systems and audio production</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <Code className="text-purple-600 mb-4" size={32} />
                <h4 className="font-bold text-gray-900 mb-2">Full-Stack Development</h4>
                <p className="text-sm text-gray-600">Modern web technologies and scalable application development</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <Award className="text-green-600 mb-4" size={32} />
                <h4 className="font-bold text-gray-900 mb-2">Award Winner</h4>
                <p className="text-sm text-gray-600">ICFJ recognition for climate migration reporting</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl">
                <Users className="text-orange-600 mb-4" size={32} />
                <h4 className="font-bold text-gray-900 mb-2">Team Leadership</h4>
                <p className="text-sm text-gray-600">Leading engineering teams and mentoring upcoming talent</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="relative py-20 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 opacity-3">
          <img src="/images/h8.jpg" alt="" className="w-full h-full object-cover blur-sm" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="relative inline-block">
              {/* Multiple layered backgrounds for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-purple-150 to-cyan-100 rounded-3xl transform -rotate-2 opacity-30 blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-purple-100 via-blue-150 to-indigo-100 rounded-3xl transform rotate-1 opacity-40 blur-xs"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl transform -rotate-0.5 opacity-60"></div>
              
              {/* Glass morphism effect */}
              <div className="relative bg-white/80 backdrop-blur-md rounded-3xl px-10 py-8 shadow-2xl border border-white/20">
                {/* Decorative elements */}
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-70 animate-pulse"></div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-60 animate-bounce"></div>
                <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-50 animate-ping"></div>
                
                {/* Text with enhanced styling */}
                <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-300">
                  Featured Projects
                </h2>
                <p className="text-xl text-gray-600 hover:text-gray-700 transition-colors duration-300">
                  A showcase of broadcast engineering excellence and full-stack development
                </p>
                
                {/* Bottom accent line */}
                <div className="mt-4 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {project.category === 'broadcast' ? (
                    <Radio className="text-blue-600 mr-3" size={24} />
                  ) : (
                    <Code className="text-purple-600 mr-3" size={24} />
                  )}
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    {project.category === 'broadcast' ? 'Broadcast Engineering' : 'Full-Stack Development'}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <p className="text-sm text-blue-600 font-medium">{project.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src="/images/h9.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="relative inline-block">
              {/* Multiple layered backgrounds for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 via-orange-150 to-red-100 rounded-3xl transform -rotate-2 opacity-30 blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-orange-100 via-yellow-150 to-amber-100 rounded-3xl transform rotate-1 opacity-40 blur-xs"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl transform -rotate-0.5 opacity-60"></div>
              
              {/* Glass morphism effect */}
              <div className="relative bg-white/85 backdrop-blur-md rounded-3xl px-10 py-8 shadow-2xl border border-white/20">
                {/* Decorative elements */}
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-70 animate-pulse"></div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-60 animate-bounce"></div>
                <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full opacity-50 animate-ping"></div>
                
                {/* Text with enhanced styling */}
                <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 via-yellow-600 to-orange-600 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-300">
                  Key Achievements
                </h2>
                <p className="text-xl text-gray-600 hover:text-gray-700 transition-colors duration-300">
                  Milestones in broadcast engineering and content production
                </p>
                
                {/* Bottom accent line */}
                <div className="mt-4 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Calendar className="text-blue-600" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {achievement.year}
                    </span>
                    <Star className="text-yellow-500" size={16} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Latest Articles
              </h2>
              <p className="text-xl text-gray-600">
                Insights on broadcast engineering, technology, and industry trends
              </p>
            </div>
            <button 
              onClick={() => setShowAllPostsModal(true)}
              className="hidden sm:block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View All Posts
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <button 
                      onClick={() => setSelectedArticle(post)}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                    >
                      Read More
                      <ExternalLink size={14} className="ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src="/images/h09.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="relative inline-block">
              {/* Multiple layered backgrounds for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-200 via-blue-150 to-purple-100 rounded-3xl transform -rotate-1 opacity-30 blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-blue-100 via-green-150 to-cyan-100 rounded-3xl transform rotate-2 opacity-40 blur-xs"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl transform -rotate-0.5 opacity-60"></div>
              
              {/* Glass morphism effect */}
              <div className="relative bg-white/85 backdrop-blur-md rounded-3xl px-10 py-8 shadow-2xl border border-white/20">
                {/* Decorative elements */}
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-70 animate-pulse"></div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-60 animate-bounce"></div>
                <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-br from-cyan-400 to-green-500 rounded-full opacity-50 animate-ping"></div>
                
                {/* Text with enhanced styling */}
                <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 via-green-600 to-blue-600 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-300">
                  Let's Work Together
                </h2>
                <p className="text-xl text-gray-600 hover:text-gray-700 transition-colors duration-300">
                  Ready to bring your audio or web project to life? I'd love to hear from you.
                </p>
                
                {/* Bottom accent line */}
                <div className="mt-4 h-1 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a href="mailto:soundmasterh1@gmail.com" className="text-gray-600 hover:text-blue-600">soundmasterh1@gmail.com</a>
                    <br />
                    <a href="mailto:henryoogun@gmail.com" className="text-gray-600 hover:text-blue-600">henryoogun@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <a href="tel:+2348060776418" className="text-gray-600 hover:text-blue-600">+234 806 077 6418</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">Ilorin, Kwara State, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Message</h3>
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');
                const whatsappMessage = `Hi Henry! 👋\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
                const encodedMessage = encodeURIComponent(whatsappMessage);
                window.open(`https://wa.me/2348060776418?text=${encodedMessage}`, '_blank');
              }}>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                  </svg>
                  <span>Send via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-cyan-500/10 rounded-full blur-lg animate-ping"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Fancy header design */}
          <div className="relative inline-block mb-12">
            {/* Multiple layered backgrounds */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full transform -rotate-3 blur-md opacity-60"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-purple-400/20 via-blue-400/20 to-cyan-400/20 rounded-full transform rotate-2 blur-sm opacity-70"></div>
            
            {/* Glass morphism container */}
            <div className="relative bg-white/5 backdrop-blur-xl rounded-full px-12 py-8 border border-white/10 shadow-2xl">
              {/* Decorative sparkles */}
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full opacity-70 animate-bounce"></div>
              <div className="absolute top-2 right-8 w-3 h-3 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full opacity-60 animate-ping"></div>
              
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-300">
                Follow My Work
              </h2>
              <p className="text-xl text-slate-200 hover:text-white transition-colors duration-300">
                Connect with me across platforms for the latest updates
              </p>
              
              {/* Animated underline */}
              <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full opacity-60 animate-pulse"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <a href="https://linkedin.com/in/henry-oogun" target="_blank" rel="noopener noreferrer" className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-2xl blur-sm transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg className="relative w-10 h-10 text-white mx-auto mb-3 group-hover:scale-125 group-hover:text-blue-300 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="relative text-white text-sm font-semibold group-hover:text-blue-200 transition-colors duration-300">LinkedIn</span>
              </div>
            </a>
            <a href="https://x.com/soundmasterh1" target="_blank" rel="noopener noreferrer" className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-black/20 rounded-2xl blur-sm transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-gray-400/50 shadow-2xl hover:shadow-gray-500/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg className="relative w-10 h-10 text-white mx-auto mb-3 group-hover:scale-125 group-hover:text-gray-300 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="relative text-white text-sm font-semibold group-hover:text-gray-200 transition-colors duration-300">X (Twitter)</span>
              </div>
            </a>
            <a href="https://instagram.com/soundmasterh1" target="_blank" rel="noopener noreferrer" className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-2xl blur-sm transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-pink-400/50 shadow-2xl hover:shadow-pink-500/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg className="relative w-10 h-10 text-white mx-auto mb-3 group-hover:scale-125 group-hover:text-pink-300 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="relative text-white text-sm font-semibold group-hover:text-pink-200 transition-colors duration-300">Instagram</span>
              </div>
            </a>
            <a href="https://youtube.com/@soundmasterh1" target="_blank" rel="noopener noreferrer" className="relative group">
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
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-8 overflow-hidden">
        {/* Dynamic background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-56 h-56 bg-purple-500/5 rounded-full blur-3xl animate-bounce" style={{animationDuration: '6s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-cyan-500/5 rounded-full blur-xl animate-ping" style={{animationDuration: '4s'}}></div>
        </div>
        
        {/* Floating geometric elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400/20 rotate-45 animate-spin" style={{animationDuration: '10s'}}></div>
          <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-purple-400/20 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-cyan-400/20 rotate-12 animate-bounce" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Enhanced logo and brand section */}
            <div className="relative mb-12">
              {/* Glass morphism container */}
              <div className="inline-block relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-sm"></div>
                <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl p-6 border border-white/10 shadow-2xl">
                  
                  <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-8">
                    {/* Enhanced logo */}
                    <div className="relative group">
                      <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative w-32 h-32 rounded-2xl overflow-hidden bg-gradient-to-br from-white/90 to-white/70 shadow-2xl hover:shadow-blue-500/25 p-4 hover:scale-110 hover:rotate-3 transition-all duration-500 cursor-pointer">
                        <img src="/images/without the name.png" alt="Henry Ogun Logo" className="w-full h-full object-contain hover:scale-110 transition-transform duration-300" style={{
                          animation: logoAnimate ? 'dangle 0.8s ease-in-out 6 forwards' : 'none',
                          transformOrigin: 'center top'
                        }} />
                        {/* Floating sparkles around logo */}
                        <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
                      </div>
                    </div>
                    
                    {/* Enhanced brand text */}
                    <div className="text-center lg:text-left group">
                      <h3 className="text-3xl lg:text-4xl font-black mb-2 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent hover:scale-105 transform transition-all duration-300 tracking-tight cursor-pointer">
                        Henry Ogun
                      </h3>
                      <p className="text-xl lg:text-2xl bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent font-bold mb-2 hover:tracking-wider transition-all duration-300 cursor-pointer">
                        SoundMasterH1
                      </p>
                      
                      {/* Animated role badges */}
                      <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                        <span className="px-4 py-2 bg-blue-500/20 backdrop-blur-xl border border-blue-400/30 rounded-full text-blue-200 text-sm font-medium hover:scale-105 transition-transform duration-300">
                          🎛️ Broadcast Engineer
                        </span>
                        <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-xl border border-purple-400/30 rounded-full text-purple-200 text-sm font-medium hover:scale-105 transition-transform duration-300">
                          💻 Full-Stack Developer
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced description with animated elements */}
                  <div className="relative mt-12 max-w-4xl mx-auto">
                    <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-50"></div>
                    <p className="text-lg lg:text-xl text-slate-200 leading-relaxed pl-8 hover:text-white transition-colors duration-300">
                      Broadcast Engineer & Full-Stack Developer bridging the world of 
                      <span className="text-blue-300 font-semibold hover:text-blue-200 transition-colors duration-300"> audio</span> and 
                      <span className="text-purple-300 font-semibold hover:text-purple-200 transition-colors duration-300"> code</span>. 
                      <br />
                      Transforming <span className="text-cyan-300 font-semibold hover:text-cyan-200 transition-colors duration-300">sound waves</span> into 
                      <span className="text-pink-300 font-semibold hover:text-pink-200 transition-colors duration-300"> digital experiences</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced copyright section */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent h-px"></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl px-8 py-6 border border-white/10 inline-block hover:bg-white/10 transition-all duration-300">
                <p className="text-slate-400 text-sm hover:text-slate-300 transition-colors duration-300 flex items-center justify-center">
                  <span className="mr-2">✨</span>
                  © 2025 Henry Ogun. All rights reserved.
                  <span className="ml-2">✨</span>
                </p>
                <div className="mt-2 flex justify-center space-x-4 text-xs text-slate-500">
                  <span className="hover:text-blue-300 cursor-pointer transition-colors duration-300">Privacy</span>
                  <span className="text-slate-600">•</span>
                  <span className="hover:text-purple-300 cursor-pointer transition-colors duration-300">Terms</span>
                  <span className="text-slate-600">•</span>
                  <span className="hover:text-cyan-300 cursor-pointer transition-colors duration-300">Contact</span>
                </div>
              </div>
            </div>
            
            {/* Floating "Back to Top" button */}
            <button 
              onClick={() => scrollToSection('home')}
              className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
            >
              <ChevronDown size={20} className="rotate-180 group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      </footer>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">{selectedArticle.title}</h2>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>
            <div className="px-6 py-6">
              <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                  {selectedArticle.category}
                </span>
                <span>{selectedArticle.date}</span>
                <span>{selectedArticle.readTime}</span>
              </div>
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="prose max-w-none">
                {selectedArticle.content.split('\n').map((paragraph, index) => {
                  if (paragraph.trim() === '') return <br key={index} />;
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h3 key={index} className="text-xl font-bold text-gray-900 mt-6 mb-3">
                        {paragraph.slice(2, -2)}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('- **')) {
                    return (
                      <li key={index} className="mb-2">
                        <strong>{paragraph.match(/\*\*(.*?)\*\*/)[1]}:</strong>
                        {paragraph.replace(/- \*\*(.*?)\*\*:/, '')}
                      </li>
                    );
                  }
                  if (paragraph.startsWith('- ')) {
                    return (
                      <li key={index} className="mb-1 ml-4">
                        {paragraph.slice(2)}
                      </li>
                    );
                  }
                  return (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* All Posts Modal */}
      {showAllPostsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-6xl max-h-[90vh] overflow-auto shadow-2xl w-full">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">All Blog Posts</h2>
              <button
                onClick={() => setShowAllPostsModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...blogPosts, ...additionalPosts].map((post) => (
                  <article key={post.id} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => {
                      setSelectedArticle(post);
                      setShowAllPostsModal(false);
                    }}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-500">{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-3 text-sm line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{post.date}</span>
                        <button className="text-blue-600 hover:text-blue-700 font-medium text-xs flex items-center">
                          Read More
                          <ExternalLink size={12} className="ml-1" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HenryOgunBlog;