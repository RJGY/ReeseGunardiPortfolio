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
          enable: true,
          speed: { min: 0.1, max: 0.3 }, 
        },
        opacity: {
          value: { min: 0.1, max: 0.6 }, 
          anim: {
            enable: true,
            speed: 0.3,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: { min: 0.5, max: 3 }, 
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