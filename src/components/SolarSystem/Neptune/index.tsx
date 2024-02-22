import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

type NeptuneProps = {
  scale: number;
  radius: number;
  orbit: boolean;
};

export default function Neptune({ scale, radius, orbit }: NeptuneProps) {
  const [neptuneTexture] = useTexture(["/planets/neptune.jpeg"]);
  const neptuneRef = useRef<any>();

  if (orbit) {
    useFrame(({ clock }) => {
      const elapsedTime = clock.elapsedTime - 6;
      // const radius = 55; // Adjust this value as needed
      const orbitSpeed = 0.5; // Adjust this value as needed
      const position = { x: 0, y: 0, z: 0 };

      // Set positions with the calculated values
      neptuneRef.current.position.x =
        position.x + Math.cos(elapsedTime * orbitSpeed) * radius;
      neptuneRef.current.position.z =
        position.z - Math.sin(elapsedTime * orbitSpeed) * radius;
      // earthRef.current.position.y =
      //   position.y - Math.cos(elapsedTime * orbitSpeed) * -1;
    });
  }

  return (
    <mesh
      ref={neptuneRef}
      scale={scale}
      // position={position}
      position={[radius, 0, 0]}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={neptuneTexture} />
    </mesh>
  );
}
