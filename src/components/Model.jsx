import React, { useEffect, useState, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Model(props) {
  const { nodes, materials } = useGLTF("/models/pepper-soda.glb");
  const [size, setSize] = useState(window.innerWidth < 1000 ? 70 : 90);

  function handleResize() {
    if (window.innerWidth < 1000) setSize(70);
    else setSize(90);
  }
  const meshRef = useRef();
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });
  return (
    <group {...props} position={[0, -1.5, 0]} dispose={null} ref={meshRef}>
      <group rotation={[-Math.PI / 2, 0, -1.177]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.DrPepper__Material_0.geometry}
            material={materials.Material}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={size}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/pepper-soda.glb");
