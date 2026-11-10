'use client';

import React, { useState } from 'react';
import { Eye, Shield, Sliders, Zap } from 'lucide-react';
import { ViewfinderCorner } from '@/components/ui/ViewfinderCorner';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export const InteractiveCoverageSimulator: React.FC = () => {
  const [focalLength, setFocalLength] = useState<number>(2.8);
  const [angle, setAngle] = useState<number>(45);

  const fovDegrees = focalLength === 2.8 ? 108 : focalLength === 4.0 ? 86 : focalLength === 6.0 ? 54 : 32;
  const detectionRangeMeters = focalLength === 2.8 ? 22 : focalLength === 4.0 ? 38 : focalLength === 6.0 ? 60 : 95;

  return (
    <div className="relative bg-white dark:bg-charcoal-card border border-charcoal/10 dark:border-charcoal-border rounded-xl p-6 lg:p-8 overflow-hidden shadow-sm dark:shadow-2xl transition-colors">
      <ViewfinderCorner size={16} color="blue" />

      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-charcoal/10 dark:border-white/10 gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-electric animate-beacon" />
            <span className="text-xs font-mono uppercase tracking-widest text-blue-electric dark:text-blue-hover font-semibold">
              Live Optical Coverage Simulator
            </span>
          </div>
          <h3 className="text-xl font-heading font-bold text-charcoal dark:text-white">
            Site Optical Geometry Engine
          </h3>
        </div>
        <Badge variant="blue" className="font-mono text-xs">
          4K SENSOR // ACTIVE
        </Badge>
      </div>

      {/* Interactive Canvas Grid */}
      <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Visualizer Floor Plan */}
        <div className="lg:col-span-7 relative h-72 sm:h-80 bg-offwhite dark:bg-charcoal rounded-lg border border-charcoal/10 dark:border-white/10 overflow-hidden flex items-center justify-center">
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(to right, #6B7280 1px, transparent 1px), linear-gradient(to bottom, #6B7280 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Camera Mount Origin */}
          <div className="absolute left-10 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-white dark:bg-charcoal-card border-2 border-blue-electric flex items-center justify-center shadow-md">
              <Eye className="w-5 h-5 text-blue-electric" />
            </div>
            <span className="text-[10px] font-mono text-charcoal dark:text-white/90 mt-1 uppercase font-semibold">
              MOUNT #1
            </span>
          </div>

          {/* Dynamic Optical Coverage Cone */}
          <div
            className="absolute left-14 top-1/2 -translate-y-1/2 origin-left transition-all duration-300 pointer-events-none"
            style={{
              transform: `translateY(-50%) rotate(${angle - 45}deg)`,
            }}
          >
            <div
              className="relative overflow-hidden transition-all duration-300"
              style={{
                width: `${Math.min(detectionRangeMeters * 3.2, 280)}px`,
                height: `${(fovDegrees / 108) * 190}px`,
                background:
                  'radial-gradient(circle at left, rgba(30, 91, 255, 0.45) 0%, rgba(30, 91, 255, 0.08) 75%, transparent 100%)',
                clipPath: 'polygon(0% 50%, 100% 0%, 100% 100%)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-hover/30 to-transparent animate-scanline" />
            </div>
          </div>

          {/* Target Detection Marker */}
          <div className="absolute right-12 top-1/3 flex items-center gap-1.5 px-2.5 py-1 rounded bg-white dark:bg-charcoal-card border border-charcoal/15 dark:border-white/20 text-[10px] font-mono text-charcoal dark:text-white shadow-sm">
            <Shield className="w-3 h-3 text-blue-electric" />
            <span>PERIMETER GATE 2</span>
          </div>

          <div className="absolute right-16 bottom-1/4 flex items-center gap-1.5 px-2.5 py-1 rounded bg-white dark:bg-charcoal-card border border-charcoal/15 dark:border-white/20 text-[10px] font-mono text-charcoal dark:text-white shadow-sm">
            <Zap className="w-3 h-3 text-blue-electric" />
            <span>ENTRY PORTAL A</span>
          </div>

          <div className="absolute bottom-2 left-3 text-[10px] font-mono text-charcoal-muted">
            X: 14.8m &bull; Y: 32.1m &bull; SCALE: 1:100
          </div>
        </div>

        {/* Control Sliders & Telemetry Panel */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-charcoal dark:text-white/80 uppercase">Lens Focal Length</span>
              <span className="text-blue-electric font-bold">{focalLength} mm</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[2.8, 4.0, 6.0, 12.0].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setFocalLength(val)}
                  className={`py-2 rounded-md font-mono text-xs border transition-all ${
                    focalLength === val
                      ? 'bg-blue-electric text-white border-blue-electric shadow-sm'
                      : 'bg-offwhite dark:bg-charcoal text-charcoal dark:text-white/80 border-charcoal/15 dark:border-charcoal-border hover:border-blue-electric'
                  }`}
                >
                  {val}mm
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-charcoal dark:text-white/80 uppercase">Pan Orientation</span>
              <span className="text-blue-electric font-bold">{angle}&deg;</span>
            </div>
            <input
              type="range"
              min="15"
              max="75"
              value={angle}
              onChange={(e) => setAngle(Number(e.target.value))}
              className="w-full h-1.5 bg-offwhite dark:bg-charcoal rounded-lg appearance-none cursor-pointer accent-blue-electric"
              aria-label="Adjust Camera Pan Orientation"
            />
          </div>

          {/* Real-time Optics Breakdown */}
          <div className="bg-offwhite dark:bg-charcoal rounded-lg p-4 border border-charcoal/10 dark:border-white/10 grid grid-cols-2 gap-4 text-xs font-mono">
            <div>
              <span className="text-charcoal-muted block uppercase text-[10px]">
                Field of View (H)
              </span>
              <span className="text-charcoal dark:text-white font-bold text-base">{fovDegrees}&deg; Wide</span>
            </div>
            <div>
              <span className="text-charcoal-muted block uppercase text-[10px]">
                Identification Range
              </span>
              <span className="text-charcoal dark:text-white font-bold text-base">{detectionRangeMeters} Meters</span>
            </div>
          </div>

          <div className="pt-2">
            <a href="/cctv-surveillance">
              <Button fullWidth variant="outline" size="sm" className="font-mono text-xs border-charcoal/20 dark:border-white/20 text-charcoal dark:text-white hover:bg-charcoal/5 dark:hover:bg-white/10">
                Request Detailed Site Blueprint
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
