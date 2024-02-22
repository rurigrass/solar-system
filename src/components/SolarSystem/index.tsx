import Sun from "../Sun";
import Mercury from "./Mercury";
import Earth from "./Earth";
import Venus from "./Venus";

export default function SolarSystem() {
  const measurements = {
    sun: { scale: { actual: 109, fun: 25 } },
    mercury: { scale: { actual: 0.2, fun: 1 } },
    venus: { scale: { actual: 0.949, fun: 4.9 } },
    earth: { scale: { actual: 1, fun: 5 } },
    mars: { scale: { actual: 0.5, fun: 2.5 } },
  };

  const divide = 4;

  return (
    <>
      <Sun scale={measurements.sun.scale.fun / divide} />
      <Mercury scale={measurements.mercury.scale.fun / divide} radius={30} />
      <Venus scale={measurements.venus.scale.fun / divide} radius={40} />
      <Earth scale={measurements.earth.scale.fun / divide} radius={50} />

      {/* <Sun scale={measurements.sun.scale.actual / divide} />
      <Mercury scale={measurements.mercury.scale.actual / divide} radius={40}/>
      <Venus scale={measurements.venus.scale.actual / divide} radius={40} />
      <Earth scale={measurements.earth.scale.actual / divide} radius={50}/> */}
    </>
  );
}
