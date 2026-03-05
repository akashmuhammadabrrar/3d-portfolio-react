import { useGLTF } from "@react-three/drei";
import React from "react";

export function Computer(props) {
    const { scene } = useGLTF("/models/computer-optimized.glb");

    return <primitive object={scene} {...props} />;
}

useGLTF.preload("/models/computer-optimized.glb");
