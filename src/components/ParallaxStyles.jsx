export default function ParallaxStyles() {
  return (
    <style jsx>{`
      .glow-text {
        text-shadow: 
          0 0 10px rgba(255, 255, 255, 0.3),
          0 0 20px rgba(255, 255, 255, 0.2),
          0 0 30px rgba(255, 255, 255, 0.1);
      }
      
      .glow-text-blue {
        text-shadow: 
          0 0 10px rgba(45, 153, 186, 0.5),
          0 0 20px rgba(45, 153, 186, 0.4),
          0 0 30px rgba(45, 153, 186, 0.3),
          0 0 40px rgba(45, 153, 186, 0.2);
      }
      
      .custom-cursor {
        color: #2D99BA;
        font-size: 1.2em;
        font-weight: bold;
        text-shadow: 
          0 0 10px rgba(45, 153, 186, 0.8),
          0 0 20px rgba(45, 153, 186, 0.6),
          0 0 30px rgba(45, 153, 186, 0.4);
        animation: cursor-blink 1s infinite;
        display: inline-block;
        width: 0.1em;
        height: 1.2em;
        margin-left: 2px;
        vertical-align: middle;
        line-height: 1;
      }
      
      @keyframes cursor-blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }

      @keyframes slideInFromBottom {
        from {
          opacity: 0;
          transform: translateY(60px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* Mobile-specific styles */
      @media (max-width: 768px) {
        .custom-cursor {
          font-size: 1em;
          height: 1em;
          margin-left: 1px;
          vertical-align: middle;
        }
        h1 {
          line-height: 1.2;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .text-[#2D99BA] {
          display: inline-flex;
          align-items: center;
        }
      }

      /* Tablet-specific grid fixes */
      @media (min-width: 640px) and (max-width: 1023px) {
        .grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.5rem;
          max-width: 800px;
          margin: 0 auto;
        }
      }
    `}</style>
  )
}
