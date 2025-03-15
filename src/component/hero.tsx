import React, { useState, useEffect, useCallback } from "react";

const InteractiveHero = () => {
  // State for parallax effect
  const [offset, setOffset] = useState(0);

  // State for the interactive elements
  const [activeFeature, setActiveFeature] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Features to showcase - expanded with more detailed content
  const features = [
    {
      title: "Intuitive Design",
      description:
        "Our user-centered platform offers a seamless experience with thoughtful navigation, clear visual hierarchy, and responsive interfaces that work across all devices.",
      icon: "💡",
      color: "from-[#32a7e2] to-[#7bc9f2]",
    },
    {
      title: "Powerful Tools",
      description:
        "Access a comprehensive suite of integrated tools that automate workflows, provide actionable insights, and help you achieve results in record time.",
      icon: "⚒️",
      color: "from-[#32a7e2] to-[#1a5d8c]",
    },
    {
      title: "Secure Platform",
      description:
        "Rest easy with our SOC 2 compliant infrastructure, end-to-end encryption, and regular security audits that keep your sensitive data protected.",
      icon: "🔒",
      color: "from-[#32a7e2] to-[#32d7d1]",
    },
    {
      title: "Smart Analytics",
      description:
        "Transform raw data into strategic insights with our intelligent analytics dashboard, customizable reports, and predictive modeling capabilities.",
      icon: "📊",
      color: "from-[#32a7e2] to-[#32e2b0]",
    },
  ];

  // Optimized scroll handler with useCallback
  const handleScroll = useCallback(() => {
    // Only update state when we're in the viewport to improve performance
    const element = document.getElementById("hero-section");
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top >= -rect.height && rect.bottom <= window.innerHeight * 2) {
        setOffset(window.pageYOffset);
      }
    } else {
      setOffset(window.pageYOffset);
    }
  }, []);

  // Parallax effect with performance optimization
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Auto-rotate features with smooth animation
  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setActiveFeature((prev) => (prev + 1) % features.length);
          setTimeout(() => {
            setIsAnimating(false);
          }, 300);
        }, 300);
      }, 5000); // Increased time to give users more time to read

      return () => clearInterval(interval);
    }
  }, [isHovering, features.length]);

  // Scroll to content section
  const scrollToContent = () => {
    const contentSection = document.getElementById("content-section");
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <div
      id="hero-section"
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Faded gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#008794] via-[#32a7e2] to-white opacity-90"></div>

      {/* Enhanced background elements with more varied shapes and subtle animation */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white blur-3xl animate-pulse"
          style={{
            transform: `translateY(${offset * 0.4}px) rotate(${offset * 0.02}deg)`,
            animationDuration: "8s",
          }}
        ></div>
        <div
          className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-[#1a5d8c] blur-3xl animate-pulse"
          style={{
            transform: `translateY(${offset * -0.3}px) rotate(${offset * -0.01}deg)`,
            animationDuration: "12s",
          }}
        ></div>
        <div
          className="absolute top-40 right-40 w-48 h-48 rounded-full bg-[#7bc9f2] blur-3xl animate-pulse"
          style={{
            transform: `translateY(${offset * 0.2}px) rotate(${offset * 0.03}deg)`,
            animationDuration: "10s",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 py-16 md:py-20 lg:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Enhanced hero text content with improved typography and animations */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div
              className="transform transition-all duration-700 text-white"
              style={{
                transform: `translateY(${Math.min(offset * 0.1, 20)}px)`,
                opacity: 1 - Math.min(offset, 300) / 700,
              }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-[#384b6e]">
                Transform Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#1a5d8c]">
                  Experience
                </span>
              </h1>

              <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl">
                Discover a powerful platform that adapts to your needs,
                streamlines your workflow, and helps you achieve more with less
                effort.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <button
                  className="px-8 py-3 bg-white text-[#32a7e2] font-semibold rounded-lg shadow-lg hover:bg-opacity-90 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  onClick={() =>
                    alert(
                      "Thanks for clicking! This would navigate to a signup page.",
                    )
                  }
                >
                  Watch Demo
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced interactive feature showcase with improved animations and visual appeal */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 shadow-xl">
              <div className="flex flex-wrap md:flex-nowrap gap-2 mb-6">
                {features.map((feature, index) => (
                  <button
                    key={index}
                    className={`flex-1 py-2 px-3 text-center font-medium transition-all duration-300 rounded-lg ${activeFeature === index
                      ? "bg-white text-[#32a7e2] shadow-md"
                      : "hover:bg-white hover:bg-opacity-20 text-white"
                      }`}
                    onClick={() => {
                      setIsAnimating(true);
                      setTimeout(() => {
                        setActiveFeature(index);
                        setTimeout(() => {
                          setIsAnimating(false);
                        }, 300);
                      }, 150);
                    }}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <span className="hidden md:inline">{feature.title}</span>
                    <span className="inline md:hidden">{feature.icon}</span>
                  </button>
                ))}
              </div>

              <div
                className="h-72 flex items-center justify-center p-6 transition-all duration-500 overflow-hidden"
                style={{
                  opacity: isAnimating ? 0 : 1,
                  transform: `scale(${isAnimating ? 0.95 : 1})`,
                }}
              >
                <div className="text-center max-w-md text-white">
                  <div
                    className={`inline-flex mb-6 p-4 rounded-full bg-gradient-to-br ${features[activeFeature].color} text-white`}
                  >
                    <span className="text-4xl">
                      {features[activeFeature].icon}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    {features[activeFeature].title}
                  </h3>
                  <p className="opacity-90 leading-relaxed">
                    {features[activeFeature].description}
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-4">
                <div className="flex space-x-2">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${activeFeature === index
                        ? "bg-white w-6"
                        : "bg-white bg-opacity-40"
                        }`}
                      onClick={() => setActiveFeature(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced interactive scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer transition-opacity duration-500"
        style={{ opacity: offset > 100 ? 0 : 1 }}
        onClick={scrollToContent}
      >
        <div className="p-3 rounded-full border-2 border-white border-opacity-50 hover:border-opacity-100 transition-all duration-300 mb-2">
          <svg
            className="w-6 h-6 animate-bounce text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
        <p className="text-sm font-medium text-white">Scroll to explore</p>
      </div>
    </div>
  );
};

export default InteractiveHero;
