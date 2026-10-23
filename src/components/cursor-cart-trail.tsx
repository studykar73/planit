"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ShoppingCart } from "lucide-react";

type TrailItem = {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
};

const SPAWN_INTERVAL_MS = 45;
const MAX_PARTICLES = 24;
const LIFETIME_MS = 800;

export function CursorCartTrail() {
  const [particles, setParticles] = useState<TrailItem[]>([]);
  const lastSpawn = useRef(0);
  const idCounter = useRef(0);
  const timers = useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map());

  const removeParticle = useCallback((id: number) => {
    setParticles((prev) => prev.filter((p) => p.id !== id));
    const timer = timers.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timers.current.delete(id);
    }
  }, []);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    const onMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastSpawn.current < SPAWN_INTERVAL_MS) return;
      lastSpawn.current = now;

      const particle: TrailItem = {
        id: ++idCounter.current,
        x: e.clientX,
        y: e.clientY,
        rotation: Math.random() * 50 - 25,
        scale: 0.7 + Math.random() * 0.5,
      };

      setParticles((prev) => {
        const next = [...prev, particle];
        return next.length > MAX_PARTICLES ? next.slice(-MAX_PARTICLES) : next;
      });

      const timer = setTimeout(() => removeParticle(particle.id), LIFETIME_MS);
      timers.current.set(particle.id, timer);
    };

    window.addEventListener("mousemove", onMouseMove);
    const activeTimers = timers.current;
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      activeTimers.forEach((timer) => clearTimeout(timer));
      activeTimers.clear();
    };
  }, [removeParticle]);

  if (particles.length === 0) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
    >
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="cart-trail-particle absolute text-brand"
          style={{
            left: particle.x,
            top: particle.y,
          }}
        >
          <span
            className="block"
            style={{
              transform: `rotate(${particle.rotation}deg) scale(${particle.scale})`,
            }}
          >
            <ShoppingCart className="size-4" strokeWidth={2.25} />
          </span>
        </span>
      ))}
    </div>
  );
}
