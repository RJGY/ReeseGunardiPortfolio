import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 
import { useCallback, useMemo } from "react";

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
      fpsLimit: 60,
      particles: {
        move: {
          enable: true, // enabling this will make particles move in the canvas
          speed: { min: 0.5, max: 3 }, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
        },
        opacity: {
          value: { min: 0.1, max: 0.8 }, // using a different opacity, to have some semitransparent effects
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: { min: 0.5, max: 3 }, // let's randomize the particles size a bit
        },
        number: {
          value: 400,
        }
      },
    };
  }, []);

  const particlesInit = async (engine) => {
    loadSlim(engine);
  };

  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;