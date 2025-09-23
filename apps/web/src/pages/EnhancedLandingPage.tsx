import { 
  BuildingOfficeIcon,
  GlobeAltIcon,
  BanknotesIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  LinkIcon,
  SignalIcon,
  SparklesIcon,
  TruckIcon,
  UserGroupIcon,
  ChevronDownIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';

const EnhancedLandingPage = () => {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const isInView = useInView(heroRef);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);

  // Parallax transforms
  const yPosAnim = useTransform(scrollYProgress, [0, 1], [0, -300]);
  
  // Spring animations
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const mouseXSpring = useSpring(mousePosition.x, springConfig);
  const mouseYSpring = useSpring(mousePosition.y, springConfig);


  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const cardVariants = {
    offscreen: {
      y: 100,
      opacity: 0,
      rotateX: -15
    },
    onscreen: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  // Counter animation component
  const AnimatedCounter = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
    const [count, setCount] = useState(0);
    const nodeRef = useRef(null);
    const inView = useInView(nodeRef, { once: true });

    useEffect(() => {
      if (inView) {
        const duration = 2000;
        const steps = 50;
        const increment = value / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= value) {
            setCount(value);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
        
        return () => clearInterval(timer);
      }
    }, [inView, value]);

    return <span ref={nodeRef}>{count.toLocaleString()}{suffix}</span>;
  };

  return (
    <div className="min-h-screen relative">
      {/* Professional Animated Background - Behind everything */}
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
      </div>
      
      {/* Main Content Container */}
      <div className="relative z-10">

      {/* Enhanced Header */}
      <motion.header 
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className="text-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                🚀
              </motion.span>
              <span className="ml-2 text-xl font-bold gradient-text">Ranto</span>
            </motion.div>
            
            {/* Navigation Menu */}
            <nav className="hidden md:flex items-center space-x-6">
              <div className="relative">
                <button 
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  onMouseEnter={() => setShowSolutionsDropdown(true)}
                  onMouseLeave={() => setShowSolutionsDropdown(false)}
                >
                  <span>Solutions</span>
                  <ChevronDownIcon className="w-4 h-4" />
                </button>
                {showSolutionsDropdown && (
                  <motion.div 
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 p-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onMouseEnter={() => setShowSolutionsDropdown(true)}
                    onMouseLeave={() => setShowSolutionsDropdown(false)}
                  >
                    <div className="space-y-3">
                      <a href="#" className="block hover:bg-blue-50 p-2 rounded transition-colors">
                        <div className="font-semibold text-gray-900">For Exporters</div>
                        <div className="text-sm text-gray-600">Find suppliers in &lt;2 hours</div>
                      </a>
                      <a href="#" className="block hover:bg-blue-50 p-2 rounded transition-colors">
                        <div className="font-semibold text-gray-900">For Buyers</div>
                        <div className="text-sm text-gray-600">ESG compliance & traceability</div>
                      </a>
                      <a href="#" className="block hover:bg-blue-50 p-2 rounded transition-colors">
                        <div className="font-semibold text-gray-900">For Banks</div>
                        <div className="text-sm text-gray-600">Rural credit scoring API</div>
                      </a>
                      <a href="#" className="block hover:bg-blue-50 p-2 rounded transition-colors">
                        <div className="font-semibold text-gray-900">For Farmers</div>
                        <div className="text-sm text-gray-600">Better prices via SMS/app</div>
                      </a>
                    </div>
                  </motion.div>
                )}
              </div>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Pricing</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <motion.select 
                className="glass-card py-1 px-3 text-sm border-0"
                whileHover={{ scale: 1.05 }}
              >
                <option>🇫🇷 FR</option>
                <option>🇬🇧 EN</option>
                <option>🇲🇬 MG</option>
              </motion.select>
              <motion.button 
                className="btn-primary liquid-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Login
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Enhanced Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative py-24 overflow-hidden"
        style={{ y: yPosAnim }}
      >
        {/* Very subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/40" />
        
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            style={{
              x: mouseXSpring,
              y: mouseYSpring
            }}
          >
            <motion.h1 
              className="text-4xl md:text-7xl font-bold text-gray-900 mb-6"
              variants={itemVariants}
            >
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Transform
              </motion.span>{" "}
              <motion.span
                className="inline-block gradient-text"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Madagascar's
              </motion.span>
              <br />
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Supply Chain
              </motion.span>{" "}
              <motion.span
                className="inline-block text-blue-800 neon-text"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
              >
                Into Bankable Data
              </motion.span>
            </motion.h1>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            One intelligent platform connecting farmers, exporters, banks, and global buyers 
            with AI-powered transparency and mobile-first payments
          </motion.p>
          
          <motion.div 
            className="flex items-center justify-center mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
          >
            <motion.div 
              className="glass-card px-6 py-3 rounded-full border border-blue-200"
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(30, 58, 138, 0.3)",
                  "0 0 60px rgba(30, 58, 138, 0.5)",
                  "0 0 20px rgba(30, 58, 138, 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-blue-800 font-semibold flex items-center">
                <SparklesIcon className="w-5 h-5 mr-2 animate-pulse" />
                Vision: 45% FOB price for farmers within 48 hours
              </span>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            variants={containerVariants}
          >
            <motion.button 
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-lg px-10 py-4 rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              <RocketLaunchIcon className="w-6 h-6 inline mr-2" />
              Start Free Trial
            </motion.button>
            
            <motion.button 
              className="bg-white/10 backdrop-blur-md border border-slate-300 text-slate-800 font-semibold text-lg px-10 py-4 rounded-lg hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              Watch Demo
            </motion.button>
            
            <motion.button 
              className="bg-slate-900 text-white font-semibold text-lg px-10 py-4 rounded-lg border border-slate-700 hover:bg-slate-800 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              Book Consultation
            </motion.button>
          </motion.div>
          
          {/* Animated Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-8 text-center mt-16"
            variants={containerVariants}
          >
            <motion.div
              className="bg-white/70 backdrop-blur-md border border-slate-200/50 rounded-xl p-6 shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              variants={itemVariants}
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent font-mono">
                $<AnimatedCounter value={1.2} suffix="M+" />
              </div>
              <div className="text-slate-600 font-medium mt-1">Total GMV</div>
            </motion.div>
            
            <motion.div
              className="bg-white/70 backdrop-blur-md border border-slate-200/50 rounded-xl p-6 shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              variants={itemVariants}
            >
              <div className="text-4xl font-bold text-slate-900 font-mono">
                <AnimatedCounter value={150} suffix="+" />
              </div>
              <div className="text-slate-600 font-medium mt-1">Active Exporters</div>
            </motion.div>
            
            <motion.div
              className="bg-white/70 backdrop-blur-md border border-slate-200/50 rounded-xl p-6 shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              variants={itemVariants}
            >
              <div className="text-4xl font-bold text-slate-900 font-mono">
                <AnimatedCounter value={25} />
              </div>
              <div className="text-slate-600 font-medium mt-1">Countries Reached</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Enhanced Multi-Segment Experience Selector */}
      <section className="py-20 relative overflow-hidden">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Choose Your Experience
          </motion.h2>
          
          <motion.p 
            className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Different solutions for different needs - from farmers to Fortune 500 companies
          </motion.p>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-8"
            variants={containerVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              {
                icon: "🏭",
                title: "EXPORTERS",
                description: "Find suppliers in less than 2 hours",
                price: "$99/month",
                color: "blue",
                Icon: BuildingOfficeIcon,
                cta: "Dashboard →"
              },
              {
                icon: "🌍",
                title: "BUYERS",
                description: "ESG compliance & traceability",
                price: "$200/report",
                color: "green",
                Icon: GlobeAltIcon,
                cta: "ESG Portal →"
              },
              {
                icon: "🏦",
                title: "BANKS",
                description: "Rural credit scoring API",
                price: "$0.50/call",
                color: "purple",
                Icon: BanknotesIcon,
                cta: "API Docs →"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white/90 backdrop-blur-md border border-slate-200/50 rounded-xl p-8 text-center relative overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300"
                variants={cardVariants}
                custom={index}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <motion.div 
                  className="text-4xl mb-4 relative z-10"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2 relative z-10">{item.title}</h3>
                <p className="text-slate-600 mb-6 text-sm relative z-10">{item.description}</p>
                
                <div className="text-3xl font-bold text-slate-900 mb-6 relative z-10">
                  {item.price}
                </div>
                
                <motion.button 
                  className="bg-gradient-to-r from-blue-600 to-blue-800 text-white w-full py-3 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative z-10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.cta}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Second Row of Segments */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              {
                icon: "📊",
                title: "AGENCIES",
                description: "Impact data & monitoring",
                price: "$5k/license",
                color: "amber",
                Icon: ChartBarIcon,
                cta: "Analytics →"
              },
              {
                icon: "🚛",
                title: "TRANSPORT",
                description: "Cargo matching optimization",
                price: "$5/load match",
                color: "orange",
                Icon: TruckIcon,
                cta: "LogiHub →"
              },
              {
                icon: "👨‍🌾",
                title: "FARMERS",
                description: "Better prices via SMS/app",
                price: "Free forever",
                color: "green",
                Icon: UserGroupIcon,
                cta: "Join SMS →"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white/90 backdrop-blur-md border border-slate-200/50 rounded-xl p-8 text-center relative overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300"
                variants={cardVariants}
                custom={index + 3}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-transparent to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <motion.div 
                  className="text-4xl mb-4 relative z-10"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2 relative z-10">{item.title}</h3>
                <p className="text-slate-600 mb-6 text-sm relative z-10">{item.description}</p>
                
                <div className="text-3xl font-bold text-slate-900 mb-6 relative z-10">
                  {item.price}
                </div>
                
                <motion.button 
                  className={`${
                    item.title === "FARMERS" 
                      ? "bg-gradient-to-r from-green-600 to-green-800" 
                      : "bg-gradient-to-r from-blue-600 to-blue-800"
                  } text-white w-full py-3 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative z-10`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.cta}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Problem-Solution Matrix */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Problems We Solve
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before Ranto Column */}
            <motion.div 
              className="space-y-4"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center">
                <XCircleIcon className="w-8 h-8 mr-2" />
                BEFORE RANTO
              </h3>
              {[
                { icon: "🕐", text: "6 weeks export paperwork" },
                { icon: "🚫", text: "Manual compliance audits" },
                { icon: "💸", text: "Farmers get 20% of FOB" },
                { icon: "🚫", text: "No rural credit history" },
                { icon: "🚛", text: "40% empty return trips" },
                { icon: "📱", text: "WhatsApp supplier search" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-gray-700">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
            
            {/* After Ranto Column */}
            <motion.div 
              className="space-y-4"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
                <CheckCircleIcon className="w-8 h-8 mr-2" />
                AFTER RANTO
              </h3>
              {[
                { icon: "⚡", text: "72 hours with 1-click generation" },
                { icon: "🛰️", text: "Satellite-verified certificates" },
                { icon: "💰", text: "Farmers get 45% of FOB price" },
                { icon: "📊", text: "24-month blockchain sales ledger" },
                { icon: "🎯", text: "AI cargo matching & optimization" },
                { icon: "🤖", text: "AI-ranked supplier recommendations" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-gray-700">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Enhanced Technology Showcase */}
      <section className="py-20 relative overflow-hidden">
        
        <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
          >
            Powered by Advanced Technology
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "AI-Powered",
                icon: CpuChipIcon,
                color: "blue",
                description: "Smart matching & predictions"
              },
              {
                title: "Satellite Tech",
                icon: SignalIcon,
                color: "green",
                description: "Real-time monitoring"
              },
              {
                title: "Blockchain",
                icon: LinkIcon,
                color: "purple",
                description: "Immutable records"
              },
              {
                title: "Analytics",
                icon: ChartBarIcon,
                color: "amber",
                description: "Data insights"
              }
            ].map((tech, index) => (
              <motion.div
                key={tech.title}
                className="text-center p-6 group"
                variants={itemVariants}
                custom={index}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className={`bg-${tech.color}-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 neon-border`}
                  animate={{ 
                    rotate: [0, 360],
                  }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <tech.icon className={`w-10 h-10 text-${tech.color}-600`} />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 gradient-text">
                  {tech.title}
                </h3>
                <p className="text-gray-600">{tech.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Success Stories & Impact */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-white to-slate-50">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Real Impact Stories
          </motion.h2>
          
          <motion.p 
            className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            From farmers to Fortune 500 companies, see how Ranto is transforming supply chains
          </motion.p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "💼",
                quote: "Reduced sourcing time from 6 hours to 1.8h. ROI: 340% in 6 months.",
                name: "Marie Claire",
                role: "Exporter",
                color: "blue"
              },
              {
                icon: "🌍",
                quote: "Achieved 100% ESG compliance for EU regulations. Audit costs reduced by 60%.",
                name: "Johann Schmidt",
                role: "EU Importer",
                color: "green"
              },
              {
                icon: "🏦",
                quote: "Rural lending default rate dropped to 2.8% vs 12% industry average.",
                name: "Dr. Hasina",
                role: "BNI Bank",
                color: "purple"
              },
              {
                icon: "👨‍🌾",
                quote: "Income increased from 400k to 1.8M MGA per harvest using Ranto.",
                name: "Rakoto",
                role: "Vanilla Farmer",
                color: "amber"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white border border-slate-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl mb-4">{testimonial.icon}</div>
                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Phased Market Entry Timeline */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-50 to-white">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ranto Market Expansion
          </motion.h2>
          
          <motion.p 
            className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our strategic roadmap to transform Madagascar's agricultural export economy
          </motion.p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                phase: "Phase 1",
                timeline: "2025 Q4-Q1",
                icon: "🌾",
                product: "Vanilla cooperatives",
                location: "Sambava & Antalaha",
                color: "green"
              },
              {
                phase: "Phase 2",
                timeline: "2026 Q2-Q3",
                icon: "🌿",
                product: "Clove farmers",
                location: "Antalaha / Fénérive",
                color: "amber"
              },
              {
                phase: "Phase 3",
                timeline: "2026 Q4-Q2",
                icon: "⚫",
                product: "Graphite & cacao",
                condition: "If vanilla unit economics ≥ 0",
                color: "slate"
              },
              {
                phase: "Phase 4",
                timeline: "2027 Q3-Q4",
                icon: "🔋",
                product: "Battery minerals",
                condition: "If EU battery passport enforced",
                color: "blue"
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{phase.icon}</span>
                    <ClockIcon className="w-6 h-6 text-gray-400" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{phase.phase}</h3>
                  <div className="text-sm text-blue-600 font-semibold mb-3">{phase.timeline}</div>
                  <div className="text-gray-700 font-medium mb-2">{phase.product}</div>
                  {phase.location && (
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPinIcon className="w-4 h-4 mr-1" />
                      {phase.location}
                    </div>
                  )}
                  {phase.condition && (
                    <div className="mt-3 text-xs text-amber-600 italic border-t pt-3">
                      💡 {phase.condition}
                    </div>
                  )}
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Ambitious CTA Section */}
      <motion.section 
        className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 to-blue-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Supply Chain?
          </motion.h2>
          
          <motion.p
            className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join the platform that's revolutionizing agricultural finance across Madagascar.
            From feature phones to Fortune 500 companies.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="bg-white text-slate-900 font-bold text-xl px-12 py-6 rounded-lg liquid-button shadow-2xl"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <RocketLaunchIcon className="w-8 h-8 inline mr-3" />
              Start Your Journey
            </motion.button>
            
            <motion.button 
              className="bg-transparent border-2 border-white text-white font-bold text-xl px-12 py-6 rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Demo
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Professional Footer */}
      <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <motion.span 
                  className="text-2xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  🚀
                </motion.span>
                <span className="text-xl font-bold">Ranto</span>
              </div>
              <p className="text-slate-400 text-sm">
                Transforming Madagascar's supply chain into bankable data. 
                From feature phones to Fortune 500 companies.
              </p>
              <div className="text-sm text-slate-500">
                <p className="font-semibold text-slate-300">Our Mission</p>
                <p className="italic">"We turn rural supply-chain data into money in farmers' mobile wallets."</p>
              </div>
            </div>
            
            {/* Platform Column */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-slate-100">Platform</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="hover:text-white transition-colors cursor-pointer">For Exporters</li>
                <li className="hover:text-white transition-colors cursor-pointer">For Banks</li>
                <li className="hover:text-white transition-colors cursor-pointer">For Farmers</li>
                <li className="hover:text-white transition-colors cursor-pointer">For Buyers</li>
                <li className="hover:text-white transition-colors cursor-pointer">For Agencies</li>
                <li className="hover:text-white transition-colors cursor-pointer">For Transport</li>
              </ul>
            </div>
            
            {/* Company Column */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-slate-100">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="hover:text-white transition-colors cursor-pointer">About Ranto</li>
                <li className="hover:text-white transition-colors cursor-pointer">Our Vision</li>
                <li className="hover:text-white transition-colors cursor-pointer">Team</li>
                <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
                <li className="hover:text-white transition-colors cursor-pointer">Success Stories</li>
                <li className="hover:text-white transition-colors cursor-pointer">Press</li>
              </ul>
            </div>
            
            {/* Contact Column */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-slate-100">Connect</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-center space-x-2">
                  <span>📧</span>
                  <span className="hover:text-white transition-colors">hello@ranto.mg</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>📱</span>
                  <span>+261 20 123 4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>📍</span>
                  <span>Antananarivo, Madagascar</span>
                </li>
              </ul>
              <div className="mt-6">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold">
                  API Documentation
                </button>
              </div>
            </div>
          </div>
          
          {/* Bottom Footer */}
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-slate-400 text-sm">
                <p>© 2025 Ranto - Building Africa's Agricultural Future</p>
              </div>
              
              <div className="flex space-x-6 text-xs text-slate-500">
                <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
                <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
                <span className="hover:text-white transition-colors cursor-pointer">Security</span>
              </div>
            </div>
            
            <div className="text-center mt-6 text-slate-600 text-xs">
              <p>
                <span className="font-semibold">Legal & Compliance:</span> Bank of Madagascar Licensed | SOC 2 Compliant | GDPR Ready
              </p>
              <motion.p 
                className="mt-2 text-slate-500"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🎯 Vision 2027: 45% FOB price for farmers within 48 hours
              </motion.p>
            </div>
          </div>
        </div>
      </footer>
      </div> {/* End of Main Content Container */}
    </div>
  );
};

export default EnhancedLandingPage;