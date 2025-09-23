import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particles array
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create particles with faster movement
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2, // Increased speed from 0.5 to 2
        vy: (Math.random() - 0.5) * 2, // Increased speed from 0.5 to 2
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.6 + 0.3
      });
    }

    // Connection lines
    const drawConnections = () => {
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            const opacity = (1 - distance / 150) * 0.3;
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
        });
      });
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(30, 58, 138, ${particle.opacity})`;
        ctx.fill();
      });

      // Draw connections
      drawConnections();

      requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Canvas for particle network */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none opacity-60"
        style={{ zIndex: -1 }}
      />

      {/* Animated gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -2 }}>
        {/* Large ambient orb */}
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(30, 58, 138, 0.3) 0%, rgba(37, 99, 235, 0.15) 40%, transparent 70%)',
            filter: 'blur(40px)',
            top: '-400px',
            right: '-200px',
          }}
          animate={{
            x: [0, 150, -100, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.3, 0.9, 1],
          }}
          transition={{
            duration: 8, // Reduced from 20 to 8 seconds
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Medium floating orb */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, rgba(37, 99, 235, 0.1) 50%, transparent 70%)',
            filter: 'blur(30px)',
            bottom: '-300px',
            left: '-100px',
          }}
          animate={{
            x: [0, -200, 150, -50, 0],
            y: [0, -150, 100, -75, 0],
            scale: [1, 1.4, 0.8, 1.2, 1],
          }}
          transition={{
            duration: 10, // Reduced from 25 to 10 seconds
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Small accent orb */}
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.2) 0%, rgba(30, 58, 138, 0.1) 40%, transparent 60%)',
            filter: 'blur(25px)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 1.5, 0.8, 1.3, 1],
            opacity: [0.8, 1, 0.6, 1, 0.8],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6, // Reduced from 15 to 6 seconds
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating geometric shapes */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.1 }}>
          <motion.rect
            x="10%"
            y="20%"
            width="100"
            height="100"
            fill="none"
            stroke="#1E3A8A"
            strokeWidth="1"
            animate={{
              rotate: [0, 360],
              x: ["10%", "25%", "5%", "20%", "10%"],
              y: ["20%", "35%", "15%", "30%", "20%"],
            }}
            transition={{
              duration: 10, // Reduced from 30 to 10 seconds
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <motion.polygon
            points="200,10 250,100 150,100"
            fill="none"
            stroke="#1E3A8A"
            strokeWidth="1"
            style={{ transformOrigin: "200px 70px" }}
            animate={{
              rotate: [0, -720], // Double rotation speed
              scale: [1, 1.5, 0.8, 1.3, 1],
              x: [0, 50, -50, 0],
            }}
            transition={{
              duration: 8, // Reduced from 25 to 8 seconds
              repeat: Infinity,
              ease: "linear"
            }}
          />

          <motion.circle
            cx="80%"
            cy="70%"
            r="50"
            fill="none"
            stroke="#1E3A8A"
            strokeWidth="1"
            animate={{
              scale: [1, 2, 0.8, 1.5, 1],
              opacity: [0.3, 0.8, 0.2, 0.6, 0.3],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 5, // Reduced from 20 to 5 seconds
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>

        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(30, 58, 138, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(30, 58, 138, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Animated gradient mesh */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at top left, rgba(30, 58, 138, 0.02) 0%, transparent 50%),
              radial-gradient(ellipse at bottom right, rgba(37, 99, 235, 0.02) 0%, transparent 50%),
              radial-gradient(ellipse at center, rgba(30, 58, 138, 0.01) 0%, transparent 70%)
            `,
          }}
          animate={{
            opacity: [0.5, 1, 0.3, 0.8, 0.5],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{
            duration: 4, // Reduced from 10 to 4 seconds
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Flowing lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.05 }}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0" />
              <stop offset="50%" stopColor="#1E3A8A" stopOpacity="1" />
              <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          <motion.path
            d="M0,100 Q250,50 500,100 T1000,100"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            animate={{
              d: [
                "M0,100 Q250,50 500,100 T1000,100",
                "M0,100 Q250,200 500,50 T1000,100",
                "M0,100 Q250,0 500,150 T1000,100",
                "M0,100 Q250,150 500,100 T1000,100",
                "M0,100 Q250,50 500,100 T1000,100",
              ],
            }}
            transition={{
              duration: 5, // Reduced from 15 to 5 seconds
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.path
            d="M0,300 Q350,250 700,300 T1400,300"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            animate={{
              d: [
                "M0,300 Q350,250 700,300 T1400,300",
                "M0,300 Q350,400 700,200 T1400,300",
                "M0,300 Q350,150 700,350 T1400,300",
                "M0,300 Q350,350 700,300 T1400,300",
                "M0,300 Q350,250 700,300 T1400,300",
              ],
            }}
            transition={{
              duration: 6, // Reduced from 20 to 6 seconds
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2 // Reduced delay from 5 to 2 seconds
            }}
          />
        </svg>
      </div>
    </>
  );
};

export default AnimatedBackground;