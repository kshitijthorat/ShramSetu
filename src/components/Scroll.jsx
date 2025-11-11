import React, { useRef, useEffect } from "react";

const Scroll = ({ items, speed = 1 }) => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    let pos = 0;

    // Duplicate items for seamless scrolling
    const itemCount = items.length;
    const totalItems = [...items, ...items];

    const animate = () => {
      pos -= speed;
      if (pos <= -track.scrollWidth / 2) {
        pos = 0; // reset position to loop infinitely
      }
      track.style.transform = `translateX(${pos}px)`;
      requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animate);
  }, [items, speed]);

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        ref={trackRef}
        style={{
          display: "flex",
          whiteSpace: "nowrap",
        }}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            style={{
              flex: "none",
              marginRight: "20px",
              textAlign: "center",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{ height: "200px", width: "auto", borderRadius: "8px" }}
            />
            <h3>{item.title}</h3>
            <p style={{ fontSize: "1rem"  }}>{item.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scroll;
