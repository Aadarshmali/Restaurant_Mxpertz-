const leaves = Array.from({ length: 10 }, (_, index) => ({
  id: index,
  bottom: 40 + index * 22,
  width: 80 - index * 3,
  duration: 3 + index * 0.2,
}));

const sparkles = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  left: (index * 37) % 360,
  bottom: 80 + ((index * 29) % 120),
  size: 3 + (index % 4),
  duration: 2 + (index % 3) * 0.6,
  delay: (index % 5) * 0.3,
}));

export default function Page() {
  return (
    <main className="page">
      <div className="scene">
        <div className="handGlow" />

        <div className="feather">
          <div className="eye" />
          <div className="stem" />

          {leaves.map((leaf) => (
            <div
              key={`left-${leaf.id}`}
              className="leaf left"
              style={{
                bottom: `${leaf.bottom}px`,
                left: "-75px",
                width: `${leaf.width}px`,
                animationDuration: `${leaf.duration}s`,
              }}
            />
          ))}

          {leaves.map((leaf) => (
            <div
              key={`right-${leaf.id}`}
              className="leaf right"
              style={{
                bottom: `${leaf.bottom}px`,
                right: "-75px",
                width: `${leaf.width}px`,
                animationDuration: `${leaf.duration}s`,
              }}
            />
          ))}
        </div>

        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="sparkle"
            style={{
              left: `${sparkle.left}px`,
              bottom: `${sparkle.bottom}px`,
              width: `${sparkle.size}px`,
              height: `${sparkle.size}px`,
              animationDuration: `${sparkle.duration}s`,
              animationDelay: `${sparkle.delay}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: radial-gradient(circle at top, #091540, #020617 70%);
        }

        .scene {
          position: relative;
          width: 400px;
          height: 600px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .handGlow {
          position: absolute;
          bottom: 120px;
          width: 120px;
          height: 40px;
          background: radial-gradient(circle, rgba(255, 140, 0, 0.9), transparent 70%);
          filter: blur(15px);
          animation: pulse 2s infinite ease-in-out;
        }

        .feather {
          position: relative;
          width: 18px;
          height: 320px;
          transform-origin: bottom center;
          animation: floatFeather 4s ease-in-out infinite;
        }

        .stem {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 260px;
          background: linear-gradient(to top, #f6c453, #fdf2b2);
          border-radius: 10px;
          box-shadow: 0 0 12px rgba(255, 220, 120, 0.8);
        }

        .leaf {
          position: absolute;
          height: 30px;
          border-radius: 100% 0 100% 0;
          background: linear-gradient(90deg, #1de9b6, #2979ff, #651fff);
          opacity: 0.9;
          filter: drop-shadow(0 0 10px rgba(0, 255, 255, 0.5));
          animation-name: floatFeather;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        .left {
          transform-origin: right center;
          transform: rotate(-25deg);
        }

        .right {
          transform-origin: left center;
          transform: rotate(25deg) scaleX(-1);
        }

        .eye {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 90px;
          height: 120px;
          border-radius: 50% 50% 45% 45%;
          background: radial-gradient(circle at center, #00e5ff 5%, #0d47a1 25%, #1a237e 45%, #00c853 70%, transparent 100%);
          box-shadow: 0 0 30px rgba(0, 255, 255, 0.7);
          animation: glowEye 2s infinite alternate;
        }

        .eye::before {
          content: "";
          position: absolute;
          width: 30px;
          height: 30px;
          background: #111;
          border-radius: 50%;
          top: 45px;
          left: 50%;
          transform: translateX(-50%);
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
        }

        .sparkle {
          position: absolute;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 12px #fff, 0 0 20px #00e5ff;
          animation-name: sparkleAnim;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes floatFeather {
          0%,
          100% {
            transform: rotate(-2deg) translateY(0);
          }
          50% {
            transform: rotate(2deg) translateY(-15px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
        }

        @keyframes glowEye {
          from {
            filter: brightness(1);
          }
          to {
            filter: brightness(1.4);
          }
        }

        @keyframes sparkleAnim {
          0% {
            transform: translateY(0) scale(0.5);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            transform: translateY(-250px) scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </main>
  );
}
