'use client';

import React from 'react';
import * as THREE from 'three';

export const SceneEnvironment: React.FC = () => {
  return (
    <>
      {/* Charcoal Fog for deep infinite immersion */}
      <color attach="background" args={['#1C1F26']} />
      <fog attach="fog" args={['#1C1F26', 4.5, 9.5]} />

      {/* AMBIENT FILL LIGHT (Deep charcoal tint) */}
      <ambientLight intensity={0.65} color="#2A2E38" />

      {/* WHITE KEY LIGHTING (Crisp white highlight from top-front) */}
      <directionalLight
        position={[2.5, 4.0, 3.5]}
        intensity={1.8}
        color="#FFFFFF"
        castShadow={false}
      />

      {/* ELECTRIC BLUE RIM LIGHT (Creates silhouette edge glow on camera casing) */}
      <directionalLight
        position={[-3.5, -1.0, -2.5]}
        intensity={2.8}
        color="#1E5BFF"
      />

      {/* SECONDARY BLUE ACCENT (Soft front-under fill) */}
      <pointLight
        position={[0, -1.5, 2.0]}
        intensity={1.2}
        color="#5B8CFF"
        distance={6}
      />

      {/* SUBTLE GRID FLOOR (Electric Blue at low opacity) */}
      <group position={[0, -1.6, 0]}>
        <gridHelper
          args={[14, 28, '#1E5BFF', '#2A2E38']}
          position={[0, 0, 0]}
        />
        {/* Subtle ground plane */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
          <planeGeometry args={[14, 14]} />
          <meshBasicMaterial color="#1C1F26" transparent opacity={0.8} />
        </mesh>
      </group>
    </>
  );
};

