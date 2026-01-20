
import React, { useRef } from "react";

function GlowCard({ card, children, index }) {
  const cardRefs = useRef([]);

  const handleMouseMove = (e, index) => {
    const cardEl = cardRefs.current[index];
    if (!cardEl) return;

    const rect = cardEl.getBoundingClientRect();

    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = angle + 360;

    cardEl.style.setProperty("--start", `${angle + 60}`);
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={(e) => handleMouseMove(e, index)}
      className="card card-border timeline-card rounded-xl p-10"
    >
      <div className="glow" />

      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img
            src="/images/star.png"
            key={i}
            alt="star"
            className="size-5"
          />
        ))}
      </div>

      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>

      {children}
    </div>
  );
}

export default GlowCard;
