import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls, Stars } from '@react-three/drei'

function GlowRings() {
  return (
    <Float speed={1.4} rotationIntensity={0.8} floatIntensity={1.2}>
      <group position={[1.8, 0, 0]}>
        <mesh scale={1.8}>
          <torusGeometry args={[1.1, 0.012, 16, 220]} />
          <meshStandardMaterial
            color="#facc15"
            emissive="#facc15"
            emissiveIntensity={1.8}
            transparent
            opacity={0.8}
          />
        </mesh>

        <mesh rotation={[1.1, 0.4, 0.2]} scale={2.1}>
          <torusGeometry args={[1.1, 0.008, 16, 220]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#22d3ee"
            emissiveIntensity={1.2}
            transparent
            opacity={0.45}
          />
        </mesh>

        <mesh rotation={[0.3, 1.2, 0.6]} scale={2.35}>
          <torusGeometry args={[1.1, 0.006, 16, 220]} />
          <meshStandardMaterial
            color="#fde047"
            emissive="#facc15"
            emissiveIntensity={1}
            transparent
            opacity={0.35}
          />
        </mesh>
      </group>
    </Float>
  )
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 42 }}
      dpr={[1, 1.5]}
    >
      <color attach="background" args={['#020617']} />
      <fog attach="fog" args={['#020617', 9, 22]} />

      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 5, 4]} intensity={1.8} />
      <pointLight position={[3, 1, 3]} intensity={3.2} color="#facc15" />
      <pointLight position={[-4, -2, -2]} intensity={1.4} color="#22d3ee" />

      <Stars radius={80} depth={40} count={1800} factor={4} fade speed={0.6} />

      <GlowRings />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  )
}
