import { useTexture } from "@react-three/drei";

type SunProps = {
  scale: number;
};

export default function Sun({ scale }: SunProps) {
  const [sunTexture] = useTexture(["/planets/sun.jpeg"]);

  return (
    <mesh
      scale={scale}
      // position={position}
      position={[0, 0, 0]}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={sunTexture} />
    </mesh>
  );
}
