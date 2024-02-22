import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

type EarthProps = {
  scale: number;
  radius: number;
  orbit: boolean;
};

export default function Earth({ scale, radius, orbit }: EarthProps) {
  const [earthTexture] = useTexture(["/planets/earth.jpeg"]);
  const earthRef = useRef<any>();

  if (orbit) {
    useFrame(({ clock }) => {
      const elapsedTime = clock.elapsedTime - 6;
      // const radius = radius; // Adjust this value as needed
      const orbitSpeed = 0.5; // Adjust this value as needed
      const position = { x: 0, y: 0, z: 0 };

      // Set positions with the calculated values
      earthRef.current.position.x =
        position.x + Math.cos(elapsedTime * orbitSpeed) * radius;
      earthRef.current.position.z =
        position.z - Math.sin(elapsedTime * orbitSpeed) * radius;
      // earthRef.current.position.y =
      //   position.y - Math.cos(elapsedTime * orbitSpeed) * -1;
    });
  }

  return (
    <mesh
      ref={earthRef}
      scale={scale}
      // position={position}
      position={[radius, 0, 0]}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={earthTexture} />
    </mesh>
  );
}
