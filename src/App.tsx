import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { StoveModel } from "./models/Stove";
function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <StoveModel />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
          <ambientLight intensity={0.1} />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
