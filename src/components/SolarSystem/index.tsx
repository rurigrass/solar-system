import Sun from "../Sun";
import Mercury from "./Mercury";
import Earth from "./Earth";
import Venus from "./Venus";
import Mars from "./Mars";
import Jupiter from "./Jupiter";
import Saturn from "./Saturn";
import Uranus from "./Uranus";
import Neptune from "./Neptune";

export default function SolarSystem() {
  const measurements = {
    sun: { scale: { actual: 109, fun: 25 } },
    mercury: { scale: { actual: 0.2, fun: 1 } },
    venus: { scale: { actual: 0.949, fun: 4.9 } },
    earth: { scale: { actual: 1, fun: 5 } },
    mars: { scale: { actual: 0.5, fun: 2.5 } },
    jupiter: { scale: { actual: 11, fun: 15 } },
    saturn: { scale: { actual: 10, fun: 13 } },
    uranus: { scale: { actual: 4.1, fun: 9.5 } },
    neptune: { scale: { actual: 4, fun: 9 } },
  };

  const divide = 4;

  return (
    <>
      {/* <Sun scale={measurements.sun.scale.fun / divide} />
      <Mercury scale={measurements.mercury.scale.fun / divide} radius={15} />
      <Venus scale={measurements.venus.scale.fun / divide} radius={25} />
      <Earth scale={measurements.earth.scale.fun / divide} radius={35} />
      <Mars scale={measurements.mars.scale.fun / divide} radius={45} />
      <Jupiter scale={measurements.jupiter.scale.fun / divide} radius={60} />
      <Saturn scale={measurements.jupiter.scale.fun / divide} radius={75} />
      <Uranus scale={measurements.uranus.scale.fun / divide} radius={90} />
      <Neptune scale={measurements.neptune.scale.fun / divide} radius={100} /> */}

      <Sun scale={measurements.sun.scale.actual / divide} />
      <Mercury scale={measurements.mercury.scale.actual / divide} radius={40} />
      <Venus scale={measurements.venus.scale.actual / divide} radius={40} />
      <Earth scale={measurements.earth.scale.actual / divide} radius={50} />
      <Mars scale={measurements.mars.scale.actual / divide} radius={60} />
      <Jupiter scale={measurements.jupiter.scale.actual / divide} radius={70} />
      <Saturn scale={measurements.jupiter.scale.actual / divide} radius={80} />
      <Uranus scale={measurements.uranus.scale.actual / divide} radius={75} />
      <Neptune scale={measurements.neptune.scale.actual / divide} radius={90} />
    </>
  );
}
