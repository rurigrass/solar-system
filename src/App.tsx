import { Canvas } from "@react-three/fiber";
import "./App.css";
import Space from "./components/Space";
import { OrbitControls } from "@react-three/drei";
import SolarSystem from "./components/SolarSystem";
import Controls from "./components/Controls";
import { useState } from "react";

function App() {
  const [scaleType, setScaleType] = useState("fun");
  const [radiusType, setRadiusType] = useState("fun");

  const handleScaleChange = (newScale: string) => {
    setScaleType(newScale);
  };

  const handleRadiusChange = (newRadius: string) => {
    setRadiusType(newRadius);
  };

  return (
    <div className="relative">
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
          position: [50, 50, -200],
        }}
      >
        <OrbitControls />
        <Space />
        <SolarSystem scaleType={scaleType} radiusType={radiusType} />
        <ambientLight />
      </Canvas>
      <Controls
        onScaleChange={handleScaleChange}
        onRadiusChange={handleRadiusChange}
      />
    </div>
  );
}

export default App;
