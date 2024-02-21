import { useTexture } from "@react-three/drei";

export default function Sun() {
  const [sunTexture] = useTexture(["/planets/sun.jpeg"]);

  return (
    <mesh
      scale={1.5}
      // position={position}
      position={[0, 0, 0]}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={sunTexture} />
    </mesh>
  );
}
