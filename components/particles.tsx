import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 
import { useCallback, useMemo } from "react";

// tsParticles Repository: https://github.com/matteobruni/tsparticles
// tsParticles Website: https://particles.js.org/
const ParticlesComponent = (props) => {
  const options = useMemo(() => {
    return {
      background: {
        color: "#000",
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      particles: {
        move: {
          enable: true, // enabling this will make particles move in the canvas
          speed: { min: 0.5, max: 3 }, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
        },
        opacity: {
          value: { min: 0.2, max: 0.8 }, // using a different opacity, to have some semitransparent effects
        },
        size: {
          value: { min: 0.5, max: 2 }, // let's randomize the particles size a bit
        },
      },
    };
  }, []);

  const particlesInit = async (engine) => {
    loadSlim(engine);
  };

  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;