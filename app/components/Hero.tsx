import { Canvas } from "react-three-fiber";
import { Box } from "./Box";
import { Line } from "./Line";

export const Hero = () => {
  return (
    <div className="w-screen h-screen absolute -z-10 opacity-100">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Line start={[0, 0, 0]} end={[3, -2, 1]} />
      </Canvas>
    </div>
  );
};
