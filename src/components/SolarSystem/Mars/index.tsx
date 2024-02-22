import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

type MarsProps = {
  scale: number;
  radius: number;
};

export default function Mars({ scale, radius }: MarsProps) {
  const [marsTexture] = useTexture(["/planets/mars.jpeg"]);
  const marsRef = useRef<any>();

  useFrame(({ clock }) => {
    const elapsedTime = clock.elapsedTime - 6;
    // const radius = 55; // Adjust this value as needed
    const orbitSpeed = 0.5; // Adjust this value as needed
    const position = { x: 0, y: 0, z: 0 };

    // Set positions with the calculated values
    marsRef.current.position.x =
      position.x + Math.cos(elapsedTime * orbitSpeed) * radius;
    marsRef.current.position.z =
      position.z - Math.sin(elapsedTime * orbitSpeed) * radius;
    // earthRef.current.position.y =
    //   position.y - Math.cos(elapsedTime * orbitSpeed) * -1;
  });

  return (
    <mesh
      ref={marsRef}
      scale={scale}
      // position={position}
      position={[0, 0, 0]}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={marsTexture} />
    </mesh>
  );
}
