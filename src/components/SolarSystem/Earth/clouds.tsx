import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

interface cloudsProps {
  orbit: boolean;
}

export default function Clouds({ orbit }: cloudsProps) {
  const cloudsRef = useRef<Mesh>(null); // Specify Mesh as the type and provide an initial value
  const [cloudsTexture] = useTexture(["/planets/earth_clouds.jpeg"]);

  if (orbit) {
    useFrame(() => {
      // Check if cloudsRef.current is not null before accessing its properties
      if (cloudsRef.current) {
        cloudsRef.current.rotation.y += 0.003;
      }
    });
  }

  return (
    <mesh
      ref={cloudsRef}
      scale={1.01}
      // position={position}
      //x should be 10
      position={[0, 0, 0]}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial alphaMap={cloudsTexture} transparent={true} />
    </mesh>
  );
}
