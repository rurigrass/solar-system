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
    mercury: {
      scale: { actual: 0.2, fun: 1 },
      radius: { actual: 10, fun: 15 },
      speed: { actual: 1.607 },
    },
    venus: {
      scale: { actual: 0.949, fun: 4.9 },
      radius: { actual: 10, fun: 25 },
      speed: { actual: 1.176 },
    },
    earth: {
      scale: { actual: 1, fun: 5 },
      radius: { actual: 10, fun: 35 },
      speed: { actual: 1 },
    },
    mars: {
      scale: { actual: 0.5, fun: 2.5 },
      radius: { actual: 10, fun: 45 },
      speed: { actual: 0.808 },
    },
    jupiter: {
      scale: { actual: 11, fun: 15 },
      radius: { actual: 10, fun: 60 },
      speed: { actual: 0.439 },
    },
    saturn: {
      scale: { actual: 10, fun: 13 },
      radius: { actual: 10, fun: 75 },
      speed: { actual: 0.325 },
    },
    uranus: {
      scale: { actual: 4.1, fun: 9.5 },
      radius: { actual: 10, fun: 90 },
      speed: { actual: 0.228 },
    },
    neptune: {
      scale: { actual: 4, fun: 9 },
      radius: { actual: 10, fun: 100 },
      speed: { actual: 0.181 },
    },
  };

  const divide = 4;
  const orbit = true;

  return (
    <>
      <Sun scale={measurements.sun.scale.fun / divide} />
      <Mercury
        scale={measurements.mercury.scale.fun / divide}
        radius={measurements.mercury.radius.fun}
        orbit={orbit}
        speed={measurements.mercury.speed.actual}
      />
      <Venus
        scale={measurements.venus.scale.fun / divide}
        radius={measurements.venus.radius.fun}
        orbit={orbit}
        speed={measurements.venus.speed.actual}
      />
      <Earth
        scale={measurements.earth.scale.fun / divide}
        radius={measurements.earth.radius.fun}
        orbit={orbit}
        speed={measurements.earth.speed.actual}
      />
      <Mars
        scale={measurements.mars.scale.fun / divide}
        radius={measurements.mars.radius.fun}
        orbit={orbit}
        speed={measurements.mars.speed.actual}
      />
      <Jupiter
        scale={measurements.jupiter.scale.fun / divide}
        radius={measurements.jupiter.radius.fun}
        orbit={orbit}
        speed={measurements.jupiter.speed.actual}
      />
      <Saturn
        scale={measurements.jupiter.scale.fun / divide}
        radius={measurements.saturn.radius.fun}
        orbit={orbit}
        speed={measurements.saturn.speed.actual}
      />
      <Uranus
        scale={measurements.uranus.scale.fun / divide}
        radius={measurements.uranus.radius.fun}
        orbit={orbit}
        speed={measurements.uranus.speed.actual}
      />
      <Neptune
        scale={measurements.neptune.scale.fun / divide}
        radius={measurements.neptune.radius.fun}
        orbit={orbit}
        speed={measurements.neptune.speed.actual}
      />

      {/* <Sun scale={measurements.sun.scale.actual / divide} />
      <Mercury
        scale={measurements.mercury.scale.actual / divide}
        radius={40}
        orbit={orbit}
      />
      <Venus
        scale={measurements.venus.scale.actual / divide}
        radius={40}
        orbit={orbit}
      />
      <Earth
        scale={measurements.earth.scale.actual / divide}
        radius={50}
        orbit={orbit}
      />
      <Mars scale={measurements.mars.scale.actual / divide} radius={60} orbit />
      <Jupiter
        scale={measurements.jupiter.scale.actual / divide}
        radius={70}
        orbit={orbit}
      />
      <Saturn
        scale={measurements.jupiter.scale.actual / divide}
        radius={80}
        orbit={orbit}
      />
      <Uranus
        scale={measurements.uranus.scale.actual / divide}
        radius={75}
        orbit={orbit}
      />
      <Neptune
        scale={measurements.neptune.scale.actual / divide}
        radius={90}
        orbit={orbit}
      /> */}
    </>
  );
}
