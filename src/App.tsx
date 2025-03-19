import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { StoveModel } from "./models/Stove";
import { Suspense } from "react";
function App() {
  return (
    <div id="canvas-container">
      <Canvas shadows>
        <Suspense fallback={null}>
          <StoveModel />
        </Suspense>
        <ambientLight />
        <OrbitControls />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
}

export default App;
