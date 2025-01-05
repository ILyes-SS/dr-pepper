import React, { useEffect, useState, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { forwardRef } from "react";

//we forward the ref cuz we dont have the <mesh> in the hero component to control 3D position
export const Model = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("/models/pepper-soda.glb");
  const [size, setSize] = useState(window.innerWidth < 1000 ? 95 : 110);

  const meshRef = useRef();

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.01;
    }
  });

  function handleResize() {
    if (window.innerWidth < 1000) setSize(95);
    else setSize(110);
  }

  return (
    <group {...props} position={[0, -2.6, 0]} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -1.177]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            ref={(el) => {
              meshRef.current = el; // Internal ref for rotation
              if (ref) ref.current = el; // Forwarded ref for external control
            }} //did this for both controls
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
});

useGLTF.preload("/models/pepper-soda.glb");
