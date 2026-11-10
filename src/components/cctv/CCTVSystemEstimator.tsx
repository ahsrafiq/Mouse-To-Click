'use client';

import React, { useState } from 'react';
import { Sliders, HardDrive, ShieldCheck, Eye, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export const CCTVSystemEstimator: React.FC = () => {
  const [facilitySize, setFacilitySize] = useState<number>(15000);
  const [entryPoints, setEntryPoints] = useState<number>(4);
  const [hasOutdoor, setHasOutdoor] = useState<boolean>(true);
  const [retentionDays, setRetentionDays] = useState<number>(60);

  const baseIndoorCameras = Math.max(4, Math.ceil(facilitySize / 2500));
  const outdoorCameras = hasOutdoor ? Math.max(3, Math.ceil(facilitySize / 5000) * 2) : 0;
  const entryCameras = entryPoints;
  const totalCameras = baseIndoorCameras + outdoorCameras + entryCameras;

  const totalStorageTB = Math.ceil((totalCameras * 25 * retentionDays) / 1000);

  return (
    <div className="bg-white dark:bg-charcoal-card border border-charcoal/10 dark:border-charcoal-border rounded-xl p-6 lg:p-8 space-y-8 shadow-sm dark:shadow-2xl transition-colors">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-charcoal/10 dark:border-white/10 gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-blue-electric dark:text-blue-hover font-semibold">
            Interactive Planning Tool
          </span>
          <h3 className="text-2xl font-heading font-bold text-charcoal dark:text-white">
            Surveillance Infrastructure Estimator
          </h3>
        </div>
        <span className="text-xs font-mono text-charcoal-muted">
          Real-time hardware specification modeling
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Sliders Input */}
        <div className="lg:col-span-7 space-y-6">
          {/* Facility Size */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-charcoal dark:text-white/80 uppercase">Facility Footprint</span>
              <span className="text-blue-electric font-bold">
                {facilitySize.toLocaleString()} sq. ft.
              </span>
            </div>
            <input
              type="range"
              min="2000"
              max="100000"
              step="1000"
              value={facilitySize}
              onChange={(e) => setFacilitySize(Number(e.target.value))}
              className="w-full h-1.5 bg-offwhite dark:bg-charcoal rounded-lg appearance-none cursor-pointer accent-blue-electric"
              aria-label="Facility Footprint in square feet"
            />
          </div>

          {/* Entry & Access Points */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-charcoal dark:text-white/80 uppercase">Entry Gates &amp; Portals</span>
              <span className="text-blue-electric font-bold">{entryPoints} Portals</span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              value={entryPoints}
              onChange={(e) => setEntryPoints(Number(e.target.value))}
              className="w-full h-1.5 bg-offwhite dark:bg-charcoal rounded-lg appearance-none cursor-pointer accent-blue-electric"
              aria-label="Entry Gates and Portals"
            />
          </div>

          {/* Outdoor Perimeter Toggle & Retention Days */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-charcoal dark:text-white/80 block">
                Outdoor Perimeter
              </span>
              <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                <button
                  type="button"
                  onClick={() => setHasOutdoor(true)}
                  className={`py-2.5 rounded border transition-colors ${
                    hasOutdoor
                      ? 'bg-blue-electric text-white border-blue-electric font-bold'
                      : 'bg-offwhite dark:bg-charcoal text-charcoal dark:text-white/80 border-charcoal/15 dark:border-charcoal-border hover:border-blue-electric'
                  }`}
                >
                  Yes (Required)
                </button>
                <button
                  type="button"
                  onClick={() => setHasOutdoor(false)}
                  className={`py-2.5 rounded border transition-colors ${
                    !hasOutdoor
                      ? 'bg-blue-electric text-white border-blue-electric font-bold'
                      : 'bg-offwhite dark:bg-charcoal text-charcoal dark:text-white/80 border-charcoal/15 dark:border-charcoal-border hover:border-blue-electric'
                  }`}
                >
                  Indoor Only
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-charcoal dark:text-white/80 block">
                Retention Buffer
              </span>
              <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                {[30, 60, 90].map((days) => (
                  <button
                    key={days}
                    type="button"
                    onClick={() => setRetentionDays(days)}
                    className={`py-2.5 rounded border transition-colors ${
                      retentionDays === days
                        ? 'bg-blue-electric text-white border-blue-electric font-bold'
                        : 'bg-offwhite dark:bg-charcoal text-charcoal dark:text-white/80 border-charcoal/15 dark:border-charcoal-border hover:border-blue-electric'
                    }`}
                  >
                    {days} Days
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Calculated Specification Output */}
        <div className="lg:col-span-5 bg-offwhite dark:bg-charcoal p-6 rounded-xl border border-charcoal/10 dark:border-white/10 space-y-6">
          <span className="text-xs font-mono text-blue-electric dark:text-blue-hover uppercase font-semibold block border-b border-charcoal/10 dark:border-white/10 pb-2">
            // Recommended Optical Blueprint
          </span>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-[10px] font-mono text-charcoal-muted uppercase block">
                Total Cameras
              </span>
              <p className="text-3xl font-heading font-extrabold text-charcoal dark:text-white">
                {totalCameras}{' '}
                <span className="text-xs font-mono text-blue-electric font-normal">Units</span>
              </p>
            </div>
            <div>
              <span className="text-[10px] font-mono text-charcoal-muted uppercase block">
                Storage Vault
              </span>
              <p className="text-3xl font-heading font-extrabold text-charcoal dark:text-white">
                {totalStorageTB}{' '}
                <span className="text-xs font-mono text-blue-electric font-normal">TB RAID</span>
              </p>
            </div>
          </div>

          <div className="space-y-1.5 text-xs font-mono text-charcoal/80 dark:text-white/80 border-t border-charcoal/10 dark:border-white/10 pt-4">
            <div className="flex justify-between">
              <span className="text-charcoal-muted">&bull; Indoor 4K Domes:</span>
              <span>{baseIndoorCameras} Units</span>
            </div>
            <div className="flex justify-between">
              <span className="text-charcoal-muted">&bull; Outdoor PTZ Arrays:</span>
              <span>{outdoorCameras} Units</span>
            </div>
            <div className="flex justify-between">
              <span className="text-charcoal-muted">&bull; Portal Access Units:</span>
              <span>{entryCameras} Units</span>
            </div>
          </div>

          <a href="/contact">
            <Button fullWidth variant="primary" size="md" className="font-mono text-xs">
              Lock In Blueprint &amp; Schedule Survey
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
