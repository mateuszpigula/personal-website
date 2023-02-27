import { useRef, useState } from "react";
import type { MeshProps } from "react-three-fiber";
import { useFrame } from "react-three-fiber";
import type { Mesh } from "three";
import { DoubleSide } from "three";

export const Box = (props: MeshProps) => {
  const mesh = useRef<Mesh>(null);

  const [active, setActive] = useState(false);

  useFrame(() => {
    if (!mesh.current) {
      return;
    }

    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [2, 2, 2] : [1.5, 1.5, 1.5]}
      onClick={(e) => setActive(!active)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        transparent
        side={DoubleSide}
        color="hsl(143, 94%, 19%)"
      />
    </mesh>
  );
};
