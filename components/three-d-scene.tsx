"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Float, MeshTransmissionMaterial } from "@react-three/drei"
import type { Mesh, Group } from "three"
import { Color } from "three"

function AnimatedLightBulb() {
  const meshRef = useRef<Mesh>(null)
  const groupRef = useRef<Group>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.5
      meshRef.current.rotation.x = Math.sin(time * 0.3) * 0.2
    }
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(time * 0.8) * 0.3
    }
  })

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Main Bulb */}
        <mesh ref={meshRef} position={[0, 0, 0]}>
          <sphereGeometry args={[1, 32, 32]} />
          <MeshTransmissionMaterial
            background={new Color("#ffffff")}
            transmission={0.95}
            roughness={0.1}
            thickness={0.5}
            chromaticAberration={0.5}
            anisotropy={1}
            color="#4f9fff"
          />
        </mesh>

        {/* Light Glow */}
        <pointLight position={[0, 0, 0]} intensity={2} color="#ffd700" distance={10} />

        {/* Inner Core */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial emissive="#ffd700" emissiveIntensity={2} color="#ffd700" />
        </mesh>

        {/* Orbital Rings */}
        <mesh rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[1.5, 0.05, 16, 100]} />
          <meshStandardMaterial color="#4f9fff" emissive="#4f9fff" emissiveIntensity={0.5} />
        </mesh>

        <mesh rotation={[Math.PI / 4, Math.PI / 2, 0]}>
          <torusGeometry args={[1.7, 0.05, 16, 100]} />
          <meshStandardMaterial color="#ffa500" emissive="#ffa500" emissiveIntensity={0.5} />
        </mesh>
      </Float>
    </group>
  )
}

function ParticleField() {
  const particlesRef = useRef<Group>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.05
    }
  })

  const particles = Array.from({ length: 100 }, (_, i) => {
    const theta = Math.random() * Math.PI * 2
    const phi = Math.random() * Math.PI
    const radius = 5 + Math.random() * 10

    return {
      position: [
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi),
      ] as [number, number, number],
      scale: 0.05 + Math.random() * 0.1,
      color: Math.random() > 0.5 ? "#4f9fff" : "#ffa500",
    }
  })

  return (
    <group ref={particlesRef}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[particle.scale, 8, 8]} />
          <meshStandardMaterial color={particle.color} emissive={particle.color} emissiveIntensity={0.5} />
        </mesh>
      ))}
    </group>
  )
}

export function ThreeDScene() {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <color attach="background" args={["#0a0a0a"]} />
        <fog attach="fog" args={["#0a0a0a", 5, 20]} />

        <ambientLight intensity={0.3} />
        <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={1} castShadow />

        <AnimatedLightBulb />
        <ParticleField />

        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}
