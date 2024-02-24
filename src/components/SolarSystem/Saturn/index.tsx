import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

type SaturnProps = {
  scale: number;
  radius: number;
  orbit: boolean;
  speed: number;
};

export default function Saturn({ scale, radius, orbit, speed }: SaturnProps) {
  const [saturnTexture] = useTexture(["/planets/saturn.jpeg"]);
  const saturnRef = useRef<any>();

  if (orbit) {
    useFrame(({ clock }) => {
      const elapsedTime = clock.elapsedTime - 6;
      // const radius = 55; // Adjust this value as needed
      const orbitSpeed = speed; // Adjust this value as needed
      const position = { x: 0, y: 0, z: 0 };

      // Set positions with the calculated values
      saturnRef.current.position.x =
        position.x + Math.cos(elapsedTime * orbitSpeed) * radius;
      saturnRef.current.position.z =
        position.z - Math.sin(elapsedTime * orbitSpeed) * radius;
      // earthRef.current.position.y =
      //   position.y - Math.cos(elapsedTime * orbitSpeed) * -1;
    });
  }

  return (
    <mesh
      ref={saturnRef}
      scale={scale}
      // position={position}
      position={[radius, 0, 0]}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={saturnTexture} />
    </mesh>
  );
}
