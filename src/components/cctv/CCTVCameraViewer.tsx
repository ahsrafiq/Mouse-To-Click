'use client';

import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { ProceduralCamera } from '@/components/3d/ProceduralCamera';
import { SceneEnvironment } from '@/components/3d/SceneEnvironment';
import { Shield, Eye, ZoomIn, ZoomOut, RotateCw, Maximize2, ShieldCheck, Activity } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export const CCTVCameraViewer: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState<number>(4.2);
  const [isRotating, setIsRotating] = useState<boolean>(true);

  return (
    <div className="relative bg-white dark:bg-charcoal-card border border-charcoal/10 dark:border-charcoal-border rounded-xl p-6 lg:p-8 overflow-hidden shadow-sm dark:shadow-2xl space-y-6 transition-colors">
      {/* Top Telemetry & Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-charcoal/10 dark:border-white/10 gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-electric animate-beacon" />
            <span className="text-xs font-mono uppercase tracking-widest text-blue-electric dark:text-blue-hover font-semibold">
              Commercial Hardware Inspection Mode
            </span>
          </div>
          <h3 className="text-2xl font-heading font-bold text-charcoal dark:text-white">
            Vanguard Dome 4K Surveillance Unit
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="blue" className="font-mono text-xs">
            IK10 VANDAL PROOF
          </Badge>
          <Badge variant="outline" className="font-mono text-xs hidden sm:inline-flex">
            IP67 WEATHERPROOF
          </Badge>
        </div>
      </div>

      {/* 3D WebGL Inspection Canvas */}
      <div className="relative w-full h-[450px] sm:h-[520px] bg-charcoal rounded-lg border border-white/10 overflow-hidden select-none">
        {/* Inspection HUD Overlay */}
        <div className="absolute top-4 left-4 z-10 pointer-events-none text-xs font-mono space-y-1">
          <p className="text-white font-semibold flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-blue-hover" />
            <span>OPTICAL PAYLOAD: SONY STARVIS 2</span>
          </p>
          <p className="text-charcoal-muted">RESOLUTION: 3840 x 2160 @ 60 FPS</p>
        </div>

        <div className="absolute top-4 right-4 z-10 pointer-events-none text-right text-xs font-mono space-y-1 hidden sm:block">
          <p className="text-blue-hover font-semibold">IR NIGHT VISION: 45M</p>
          <p className="text-charcoal-muted">WIDE DYNAMIC RANGE: 140dB</p>
        </div>

        {/* Viewport Control Buttons */}
        <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2 bg-charcoal/90 backdrop-blur-md p-1.5 rounded-lg border border-white/20">
          <button
            type="button"
            onClick={() => setZoomLevel((prev) => Math.max(prev - 0.6, 2.5))}
            className="p-2 rounded bg-charcoal-card text-white hover:text-blue-hover hover:border-blue-hover border border-charcoal-border transition-colors"
            title="Zoom In"
            aria-label="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setZoomLevel((prev) => Math.min(prev + 0.6, 6.0))}
            className="p-2 rounded bg-charcoal-card text-white hover:text-blue-hover hover:border-blue-hover border border-charcoal-border transition-colors"
            title="Zoom Out"
            aria-label="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setIsRotating((prev) => !prev)}
            className={`p-2 rounded border transition-colors ${
              isRotating
                ? 'bg-blue-electric text-white border-blue-electric'
                : 'bg-charcoal-card text-white border-charcoal-border hover:text-blue-hover'
            }`}
            title="Toggle Auto Rotation"
            aria-label="Toggle Auto Rotation"
          >
            <RotateCw className="w-4 h-4" />
          </button>
        </div>

        <div className="absolute bottom-4 left-4 z-10 pointer-events-none hidden sm:block">
          <p className="text-[10px] font-mono text-charcoal-muted">
            // INTERACTIVE 3D: CLICK &amp; DRAG TO ROTATE &bull; SCROLL TO ZOOM
          </p>
        </div>

        {/* 3D Canvas */}
        <Canvas
          camera={{ position: [2.4, 1.8, zoomLevel], fov: 38 }}
          gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
        >
          <Suspense fallback={null}>
            <SceneEnvironment />
            <ProceduralCamera />
            <OrbitControls
              autoRotate={isRotating}
              autoRotateSpeed={1.2}
              enableZoom={true}
              minDistance={2.4}
              maxDistance={6.0}
              maxPolarAngle={Math.PI / 1.8}
              minPolarAngle={Math.PI / 4}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Hardware Highlights Footer */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
        <div className="bg-offwhite dark:bg-charcoal p-3.5 rounded border border-charcoal/10 dark:border-white/10">
          <span className="text-charcoal-muted uppercase text-[10px] block">Casing Material</span>
          <span className="text-charcoal dark:text-white font-bold">Die-Cast Aluminum</span>
        </div>
        <div className="bg-offwhite dark:bg-charcoal p-3.5 rounded border border-charcoal/10 dark:border-white/10">
          <span className="text-charcoal-muted uppercase text-[10px] block">Video Compression</span>
          <span className="text-charcoal dark:text-white font-bold">H.265+ Smart Codec</span>
        </div>
        <div className="bg-offwhite dark:bg-charcoal p-3.5 rounded border border-charcoal/10 dark:border-white/10">
          <span className="text-charcoal-muted uppercase text-[10px] block">On-Board Analytics</span>
          <span className="text-charcoal dark:text-white font-bold">Deep Learning AI</span>
        </div>
        <div className="bg-offwhite dark:bg-charcoal p-3.5 rounded border border-charcoal/10 dark:border-white/10">
          <span className="text-charcoal-muted uppercase text-[10px] block">Power Delivery</span>
          <span className="text-charcoal dark:text-white font-bold">PoE+ (802.3at)</span>
        </div>
      </div>
    </div>
  );
};

