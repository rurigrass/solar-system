import Sun from "../Sun";
import Mercury from "./Mercury";
import Earth from "./Earth";
import Venus from "./Venus";
import Mars from "./Mars";
import Jupiter from "./Jupiter";
import Saturn from "./Saturn";
import Uranus from "./Uranus";
import Neptune from "./Neptune";

export default function SolarSystem({
  scaleType,
  radiusType,
}: {
  scaleType: string;
  radiusType: string;
}) {
  const divide = 4;
  const orbit = true;

  const measurements: any = {
    sun: { scale: { actual: 109, fun: 25 } },
    mercury: {
      scale: { actual: 0.2, fun: 1 },
      radius: { actual: 35, fun: 15 },
      speed: { actual: 1.607 },
    },
    venus: {
      scale: { actual: 0.949, fun: 4.9 },
      radius: { actual: 44.62, fun: 25 },
      speed: { actual: 1.176 },
    },
    earth: {
      scale: { actual: 1, fun: 5 },
      radius: { actual: 54.48, fun: 35 },
      speed: { actual: 1 },
    },
    mars: {
      scale: { actual: 0.5, fun: 2.5 },
      radius: { actual: 72.49, fun: 45 },
      speed: { actual: 0.808 },
    },
    jupiter: {
      scale: { actual: 11, fun: 15 },
      radius: { actual: 119.55, fun: 60 },
      speed: { actual: 0.439 },
    },
    saturn: {
      scale: { actual: 10, fun: 13 },
      radius: { actual: 149.68, fun: 75 },
      speed: { actual: 0.325 },
    },
    uranus: {
      scale: { actual: 4.1, fun: 9.5 },
      radius: { actual: 175.29, fun: 90 },
      speed: { actual: 0.228 },
    },
    neptune: {
      scale: { actual: 4, fun: 9 },
      radius: { actual: 204.98, fun: 100 },
      speed: { actual: 0.181 },
    },
  };

  return (
    <>
      <Sun scale={measurements.sun.scale[scaleType] / divide} />
      <Mercury
        scale={measurements.mercury.scale[scaleType] / divide}
        radius={measurements.mercury.radius[radiusType]}
        orbit={orbit}
        speed={measurements.mercury.speed.actual}
      />
      <Venus
        scale={measurements.venus.scale[scaleType] / divide}
        radius={measurements.venus.radius[radiusType]}
        orbit={orbit}
        speed={measurements.venus.speed.actual}
      />
      <Earth
        scale={measurements.earth.scale[scaleType] / divide}
        radius={measurements.earth.radius[radiusType]}
        orbit={orbit}
        speed={measurements.earth.speed.actual}
      />
      <Mars
        scale={measurements.mars.scale[scaleType] / divide}
        radius={measurements.mars.radius[radiusType]}
        orbit={orbit}
        speed={measurements.mars.speed.actual}
      />
      <Jupiter
        scale={measurements.jupiter.scale[scaleType] / divide}
        radius={measurements.jupiter.radius[radiusType]}
        orbit={orbit}
        speed={measurements.jupiter.speed.actual}
      />
      <Saturn
        scale={measurements.jupiter.scale[scaleType] / divide}
        radius={measurements.saturn.radius[radiusType]}
        orbit={orbit}
        speed={measurements.saturn.speed.actual}
      />
      <Uranus
        scale={measurements.uranus.scale[scaleType] / divide}
        radius={measurements.uranus.radius[radiusType]}
        orbit={orbit}
        speed={measurements.uranus.speed.actual}
      />
      <Neptune
        scale={measurements.neptune.scale[scaleType] / divide}
        radius={measurements.neptune.radius[radiusType]}
        orbit={orbit}
        speed={measurements.neptune.speed.actual}
      />
    </>
  );
}
