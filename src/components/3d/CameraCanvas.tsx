'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { ProceduralCamera } from './ProceduralCamera';
import { SceneEnvironment } from './SceneEnvironment';
import { ShieldCheck, MonitorCheck, Radio, Clock, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CameraCanvasProps {
  className?: string;
  scrollOffset?: number;
}

export const CameraCanvas: React.FC<CameraCanvasProps> = ({
  className,
  scrollOffset = 0,
}) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleMotionChange);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (!isMounted || prefersReducedMotion) {
    return (
      <div
        className={cn(
          'relative w-full h-full min-h-[380px] bg-charcoal rounded-xl border border-charcoal-border flex items-center justify-center p-8 overflow-hidden select-none',
          className
        )}
        aria-label="MouseToClick Remote Video Monitoring Console"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-electric/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative text-center space-y-4">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-charcoal-card border border-blue-electric flex items-center justify-center shadow-electric-glow">
            <MonitorCheck className="w-10 h-10 text-blue-hover" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-mono uppercase tracking-widest text-blue-hover font-semibold">
              Remote Video Monitoring Console
            </p>
            <p className="text-xs font-mono text-charcoal-muted">
              Live Surveillance on Existing Compatible CCTV Cameras
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'relative w-full h-[420px] sm:h-[500px] lg:h-[580px] select-none rounded-xl overflow-hidden bg-charcoal border border-charcoal/15 dark:border-white/10 shadow-md dark:shadow-2xl',
        className
      )}
    >
      {/* Remote Video Monitoring HUD Overlays */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 pointer-events-none">
        <span className="w-2.5 h-2.5 rounded-full bg-blue-electric animate-beacon" />
        <span className="text-[11px] font-mono tracking-wider text-blue-hover font-semibold uppercase">
          Remote Video Monitoring // ACTIVE
        </span>
      </div>

      <div className="absolute top-4 right-4 z-10 hidden sm:flex items-center gap-2 pointer-events-none text-[11px] font-mono text-white/90">
        <ShieldCheck className="w-4 h-4 text-blue-hover" />
        <span>WORKS WITH EXISTING CAMERAS</span>
      </div>

      <div className="absolute bottom-4 left-4 z-10 pointer-events-none hidden sm:block">
        <p className="text-[10px] font-mono text-charcoal-muted flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-blue-hover" />
          <span>FLEXIBLE MONITORING SCHEDULES &bull; 24/7 ARRANGEMENTS</span>
        </p>
      </div>

      <div className="absolute bottom-4 right-4 z-10 pointer-events-none">
        <span className="text-[10px] font-mono text-blue-hover border border-blue-electric/30 px-2.5 py-1 rounded bg-charcoal/80 backdrop-blur-sm">
          SAVINGS: 30&ndash;40% VS IN-HOUSE
        </span>
      </div>

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0.5, 4.4], fov: 42 }}
        gl={{
          antialias: true,
          powerPreference: 'high-performance',
          alpha: false,
        }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
      >
        <Suspense fallback={null}>
          <SceneEnvironment />
          <ProceduralCamera scrollOffset={scrollOffset} isMobile={isMobile} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2.0}
            minPolarAngle={Math.PI / 3.2}
            maxAzimuthAngle={Math.PI / 3}
            minAzimuthAngle={-Math.PI / 3}
            rotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
