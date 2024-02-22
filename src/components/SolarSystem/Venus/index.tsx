import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

type VenusProps = {
  scale: number;
  radius: number;
};

export default function Venus({ scale, radius }: VenusProps) {
  const [venusTexture] = useTexture(["/planets/venus.jpeg"]);
  const venusRef = useRef<any>();

  useFrame(({ clock }) => {
    const elapsedTime = clock.elapsedTime - 6;
    // const radius = 55; // Adjust this value as needed
    const orbitSpeed = 0.5; // Adjust this value as needed
    const position = { x: 0, y: 0, z: 0 };

    // Set positions with the calculated values
    venusRef.current.position.x =
      position.x + Math.cos(elapsedTime * orbitSpeed) * radius;
    venusRef.current.position.z =
      position.z - Math.sin(elapsedTime * orbitSpeed) * radius;
    // earthRef.current.position.y =
    //   position.y - Math.cos(elapsedTime * orbitSpeed) * -1;
  });

  return (
    <mesh
      ref={venusRef}
      scale={scale}
      // position={position}
      position={[0, 0, 0]}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={venusTexture} />
    </mesh>
  );
}
