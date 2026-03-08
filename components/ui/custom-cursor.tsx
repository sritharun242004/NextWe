"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.documentElement.classList.add("custom-cursor-active");

    const mouse = { x: 0, y: 0 };
    const ringPos = { x: 0, y: 0 };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const onMouseDown = () => {
      dot.style.width = "6px";
      dot.style.height = "6px";
      dot.style.margin = "-3px 0 0 -3px";
      ring.style.width = "30px";
      ring.style.height = "30px";
      ring.style.margin = "-15px 0 0 -15px";
    };

    const onMouseUp = () => {
      dot.style.width = "8px";
      dot.style.height = "8px";
      dot.style.margin = "-4px 0 0 -4px";
      ring.style.width = "36px";
      ring.style.height = "36px";
      ring.style.margin = "-18px 0 0 -18px";
    };

    const onMouseLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHoverable = target.closest("a, button, [role='button'], input, textarea, select");
      if (isHoverable) {
        ring.style.width = "50px";
        ring.style.height = "50px";
        ring.style.margin = "-25px 0 0 -25px";
        ring.style.borderColor = "#a0ff4a";
      } else {
        ring.style.width = "36px";
        ring.style.height = "36px";
        ring.style.margin = "-18px 0 0 -18px";
        ring.style.borderColor = "rgba(160, 255, 74, 0.5)";
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseover", onMouseOver);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    });

    let raf: number;
    const animateRing = () => {
      ringPos.x += (mouse.x - ringPos.x) * 0.15;
      ringPos.y += (mouse.y - ringPos.y) * 0.15;
      ring.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px)`;
      raf = requestAnimationFrame(animateRing);
    };
    raf = requestAnimationFrame(animateRing);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Small center dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          margin: "-4px 0 0 -4px",
          borderRadius: "50%",
          backgroundColor: "#a0ff4a",
          opacity: 0,
          pointerEvents: "none",
          zIndex: 99999,
          transition: "opacity 0.2s, width 0.15s, height 0.15s, margin 0.15s",
        }}
      />

      {/* Outer ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          margin: "-18px 0 0 -18px",
          borderRadius: "50%",
          border: "2px solid rgba(160, 255, 74, 0.5)",
          opacity: 0,
          pointerEvents: "none",
          zIndex: 99998,
          transition: "opacity 0.2s, width 0.25s, height 0.25s, margin 0.25s, border-color 0.25s",
        }}
      />
    </>
  );
}
