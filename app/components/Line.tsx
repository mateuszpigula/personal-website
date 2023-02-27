import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

type props = {
  start: number[];
  end: number[];
};

export const Line = (props: props) => {
  const ref = useRef<THREE.Line>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.geometry.setFromPoints(
        [props.start, props.end].map((point) => new THREE.Vector3(...point))
      );
    }
  });
  return (
    //@ts-ignore
    <line ref={ref}>
      <bufferGeometry />
      <lineBasicMaterial color="green" />
    </line>
  );
};
