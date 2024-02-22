import { Canvas } from "@react-three/fiber";
import "./App.css";
import Space from "./components/Space";
import { OrbitControls } from "@react-three/drei";
import SolarSystem from "./components/SolarSystem";

function App() {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 1000,
        position: [0, 0, -1000],
      }}
    >
      <OrbitControls />
      <Space />
      <SolarSystem />
      <ambientLight />
    </Canvas>
  );
}

export default App;
