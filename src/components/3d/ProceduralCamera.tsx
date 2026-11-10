'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface RemoteMonitoringConsoleProps {
  scrollOffset?: number;
  isMobile?: boolean;
}

export const ProceduralCamera: React.FC<RemoteMonitoringConsoleProps> = ({
  scrollOffset = 0,
  isMobile = false,
}) => {
  const consoleGroupRef = useRef<THREE.Group>(null);
  const screenGroupRef = useRef<THREE.Group>(null);
  const streamPulseRef = useRef<THREE.MeshBasicMaterial>(null);
  const statusLedRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((state, delta) => {
    if (!consoleGroupRef.current || !screenGroupRef.current) return;

    const time = state.clock.getElapsedTime();

    // Gentle cursor parallax for the monitoring station
    const targetX = state.pointer.x * (isMobile ? 0.2 : 0.45);
    const targetY = state.pointer.y * (isMobile ? 0.15 : 0.3);

    consoleGroupRef.current.rotation.y = THREE.MathUtils.lerp(
      consoleGroupRef.current.rotation.y,
      0.35 + targetX,
      delta * 2.2
    );

    consoleGroupRef.current.rotation.x = THREE.MathUtils.lerp(
      consoleGroupRef.current.rotation.x,
      0.22 - targetY * 0.4,
      delta * 2.2
    );

    // Subtle gentle float
    consoleGroupRef.current.position.y = Math.sin(time * 1.2) * 0.03;

    // Pulse the stream status beacon
    if (statusLedRef.current) {
      statusLedRef.current.emissiveIntensity = 1.6 + Math.sin(time * 3) * 0.6;
    }

    if (streamPulseRef.current) {
      streamPulseRef.current.opacity = 0.15 + Math.sin(time * 2.5) * 0.08;
    }
  });

  return (
    <group ref={consoleGroupRef} position={[0, -0.2, 0]}>
      {/* =========================================================================
          MONITORING CONSOLE DESK & MOUNTING ARCHITECTURE
          ========================================================================= */}
      {/* Console Pedestal Base */}
      <mesh position={[0, -0.9, -0.2]}>
        <cylinderGeometry args={[0.9, 1.1, 0.15, 36]} />
        <meshStandardMaterial color="#1C1F26" roughness={0.4} metalness={0.8} />
      </mesh>

      {/* Support Arm Column */}
      <mesh position={[0, -0.4, -0.3]}>
        <cylinderGeometry args={[0.12, 0.15, 0.9, 24]} />
        <meshStandardMaterial color="#2A2E38" roughness={0.3} metalness={0.85} />
      </mesh>

      {/* Cross-arm Screen Mount Bar */}
      <mesh position={[0, 0.1, -0.25]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.07, 0.07, 2.6, 24]} />
        <meshStandardMaterial color="#3A3F4B" roughness={0.2} metalness={0.9} />
      </mesh>

      {/* =========================================================================
          MULTI-FEED SURVEILLANCE DISPLAY ARRAY (REMOTE SOC WORKSTATION)
          ========================================================================= */}
      <group ref={screenGroupRef}>
        {/* --- CENTER PRIMARY MONITOR (Main Live Feed) --- */}
        <group position={[0, 0.25, 0]}>
          {/* Bezel frame */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[1.7, 1.05, 0.06]} />
            <meshStandardMaterial color="#1C1F26" roughness={0.3} metalness={0.7} />
          </mesh>

          {/* Active Display Panel with Electric Blue Border */}
          <mesh position={[0, 0, 0.035]}>
            <planeGeometry args={[1.62, 0.97]} />
            <meshBasicMaterial color="#0E121A" />
          </mesh>

          {/* Simulated 4-Camera Grid Layout on Center Screen */}
          {/* Cam 1 (Top-Left) */}
          <mesh position={[-0.39, 0.23, 0.038]}>
            <planeGeometry args={[0.76, 0.44]} />
            <meshBasicMaterial color="#1C2230" />
          </mesh>
          {/* Cam 2 (Top-Right) */}
          <mesh position={[0.39, 0.23, 0.038]}>
            <planeGeometry args={[0.76, 0.44]} />
            <meshBasicMaterial color="#181E2B" />
          </mesh>
          {/* Cam 3 (Bottom-Left) */}
          <mesh position={[-0.39, -0.23, 0.038]}>
            <planeGeometry args={[0.76, 0.44]} />
            <meshBasicMaterial color="#181E2B" />
          </mesh>
          {/* Cam 4 (Bottom-Right) */}
          <mesh position={[0.39, -0.23, 0.038]}>
            <planeGeometry args={[0.76, 0.44]} />
            <meshBasicMaterial color="#1C2230" />
          </mesh>

          {/* Screen Perimeter Glow Accent */}
          <mesh position={[0, 0, 0.032]}>
            <planeGeometry args={[1.66, 1.01]} />
            <meshBasicMaterial color="#1E5BFF" transparent opacity={0.25} />
          </mesh>

          {/* Top Status LED (Live Feed Active) */}
          <mesh position={[0, 0.54, 0.03]}>
            <sphereGeometry args={[0.02, 16, 16]} />
            <meshStandardMaterial
              ref={statusLedRef}
              color="#5B8CFF"
              emissive="#1E5BFF"
              emissiveIntensity={2.0}
            />
          </mesh>
        </group>

        {/* --- LEFT ANGLED MONITOR (Incident Logs & Queue) --- */}
        <group position={[-1.4, 0.2, -0.2]} rotation={[0, 0.38, 0]}>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[1.05, 0.88, 0.05]} />
            <meshStandardMaterial color="#1C1F26" roughness={0.3} metalness={0.7} />
          </mesh>
          <mesh position={[0, 0, 0.03]}>
            <planeGeometry args={[0.98, 0.81]} />
            <meshBasicMaterial color="#0A0D14" />
          </mesh>
          {/* Simulated Telemetry Log Rows */}
          <mesh position={[0, 0.2, 0.032]}>
            <planeGeometry args={[0.88, 0.14]} />
            <meshBasicMaterial color="#1E5BFF" transparent opacity={0.2} />
          </mesh>
          <mesh position={[0, 0.0, 0.032]}>
            <planeGeometry args={[0.88, 0.14]} />
            <meshBasicMaterial color="#2A2E38" />
          </mesh>
          <mesh position={[0, -0.2, 0.032]}>
            <planeGeometry args={[0.88, 0.14]} />
            <meshBasicMaterial color="#2A2E38" />
          </mesh>
        </group>

        {/* --- RIGHT ANGLED MONITOR (Perimeter & Map Stream) --- */}
        <group position={[1.4, 0.2, -0.2]} rotation={[0, -0.38, 0]}>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[1.05, 0.88, 0.05]} />
            <meshStandardMaterial color="#1C1F26" roughness={0.3} metalness={0.7} />
          </mesh>
          <mesh position={[0, 0, 0.03]}>
            <planeGeometry args={[0.98, 0.81]} />
            <meshBasicMaterial color="#0A0D14" />
          </mesh>
          {/* Simulated Site Floorplan Matrix */}
          <mesh position={[0, 0, 0.032]}>
            <planeGeometry args={[0.86, 0.7]} />
            <meshBasicMaterial color="#161C26" />
          </mesh>
          <mesh position={[0, 0, 0.034]}>
            <ringGeometry args={[0.18, 0.2, 24]} />
            <meshBasicMaterial color="#1E5BFF" transparent opacity={0.6} />
          </mesh>
        </group>
      </group>

      {/* --- SURVEILLANCE BEAM RADIATING TO EXISTING CAMERAS --- */}
      <mesh position={[0, -1.0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.2, 1.25, 48]} />
        <meshBasicMaterial ref={streamPulseRef} color="#1E5BFF" transparent opacity={0.2} />
      </mesh>
    </group>
  );
};
