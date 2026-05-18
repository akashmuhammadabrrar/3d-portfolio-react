import {  Float, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useEffect } from 'react'
import * as THREE from 'three';




function TechIcon({ model }) {
    const { scene } = useGLTF(model.modelPath);


    useEffect(() => {
        if (model.name === 'Interactive Developr') {
            scene.scene.traverse((child) => {
                if (child.isMesh && child.name === 'Object_5') {
                    child.material = new THREE.MeshStandardMaterial({ color: 'white' })
                }
            })
        }
    }, [scene])

    return (
        <Canvas dpr={[1, 1.5]} gl={{ powerPreference: "high-performance", antialias: true }}>
            {/* Ambient base lighting */}
            <ambientLight intensity={0.4} />
            
            {/* Hemisphere light for natural color gradients */}
            <hemisphereLight skyColor="#ffffff" groundColor="#333333" intensity={0.6} />

            {/* Main Key Light */}
            <directionalLight position={[5, 8, 5]} intensity={1.2} />

            {/* Back rim light for beautiful glossy edges */}
            <directionalLight position={[-5, 5, -5]} intensity={0.8} color="#e0aaff" />

            {/* Point light for sharp specular highlights */}
            <pointLight position={[0, 4, 3]} intensity={1.5} distance={15} decay={2} />

            <OrbitControls enableZoom={false} enablePan={false} />

            <Float speed={3} rotationIntensity={0.4} floatIntensity={0.6}>
                <group scale={model.scale} rotation={model.rotation}>
                    <primitive object={scene} />
                </group>
            </Float>
        </Canvas>
    )
}

export default TechIcon