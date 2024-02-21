import { useThree } from "@react-three/fiber";
import { CubeTextureLoader } from "three";

export default function Space() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
  const texture = loader.load([
    "/space/nx.png",
    "/space/ny.png",
    "/space/nz.png",
    "/space/px.png",
    "/space/py.png",
    "/space/pz.png",
  ]);

  // Set the scene background property to the resulting texture.
  scene.background = texture;
  return null;
}
