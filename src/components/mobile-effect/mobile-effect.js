/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import "./mobile-effect.css";
import { Canvas, useFrame, render } from "react-three-fiber";
import { vertexShader, fragmentShader } from "./shaders";
import * as THREE from "three";
import { Sphere, OrbitControls } from "drei";
import gsap from "gsap";

let movePower = 0.1;

const uniforms = {
  u_time: {
    type: "f",
    value: 0.0
  },
  u_frame: {
    type: "f",
    value: 0.0
  },
  color1: {
    value: new THREE.Color("#db4d59")
  },
  color2: {
    value: new THREE.Color("wheat")
  },
  u_resolution: {
    type: "v2",
    value: new THREE.Vector2(
      window.innerWidth,
      window.innerHeight
    ).multiplyScalar(window.devicePixelRatio)
  },
  u_mouse: {
    type: "v2",
    value: new THREE.Vector2(
      movePower * window.innerWidth,
      window.innerHeight
    ).multiplyScalar(window.devicePixelRatio)
  },
  u_color: {
    type: "v3",
    value: new THREE.Vector3(45, 255, 255)
  }
};

const material = new THREE.ShaderMaterial({
  color: "#643fff",
  uniforms,
  vertexShader,
  fragmentShader,
  side: THREE.DoubleSide,
  transparent: true,
  extensions: {
    derivatives: true
  },
  vertexColors: THREE.VertexColors,
  wireframe: true
});

let increaseTime = 0.01;
let totalTime = 0;
let interval = null;

const MobileEffect = props => {
  const { stopAnimation, moveFast } = props;
  const sphereRef = useRef();

  useEffect(() => {
    clearInterval(interval);
    interval = setInterval(() => {
        console.log('yep');
        if(!moveFast) {
          sphereRef.current.geometry = new THREE.SphereGeometry(1, Math.floor(Math.random() * 16) + 1, 
          Math.floor(Math.random() * 16) + 1, 
          Math.floor(Math.random() * 16) + 1 , 
          Math.floor(Math.random() * 16) + 1 ,
          Math.floor(Math.random() * 16) + 1 ,
          Math.floor(Math.random() * 16) + 1  )
        }
      },500);
  }, [moveFast])

  useEffect(() => {
    setInterval(() => {
      totalTime += increaseTime;
      const clockTime = totalTime; //clock.getElapsedTime();
      uniforms.u_time.value = clockTime;
      uniforms.u_frame.value += 0.1;
    }, 10);
  }, []);

  let timeout = null;
  useEffect(() => {
    clearTimeout(timeout);
    if (moveFast) {
      increaseTime = 0.005;
      if (sphereRef.current) {
        gsap.to(sphereRef.current.scale, {
          duration: 0.7,
          x: 4,
          y: 4,
          z: 4,
          ease: "power2.in"
        });
        gsap.to(sphereRef.current.rotation, {
          duration: 0.7,
          x: 0.4,
          y: 0.4,
          z: 0.4,
          ease: "power2.in"
        });
      }
    } else {
      increaseTime = 0.01;
      if (sphereRef.current) {
        gsap.to(sphereRef.current.scale, {
          duration: 0.7,
          x: 0.7,
          y: 0.7,
          z: 0.7,
          ease: "power2.out"
        });
        gsap.to(sphereRef.current.rotation, {
          duration: 0.7,
          x: 0,
          y: 0,
          z: 0,
          ease: "power2.out"
        });
      }
    }
  }, [stopAnimation, moveFast]);

  return (
    <div>
      <Canvas
        id="main-canvas"
        camera={{
          position: [3.2158506873285586, 3.644959635571787, -1],
          fov: 50,
          near: 0.001
        }}
        //onCreated={context => setMainScene(context.scene)}
        shadowMap
      >
        <Sphere
          ref={sphereRef}
          position={[-0.2, -1.4, 0]}
          material={material}
          scale={[0.7, 0.7, 0.7]}
          args={[1,4,1, 1]}
        />
        {/* <directionalLight
          color={"#ffffff"}
          intensity={0.8}
          position={[0.8, 1, 0]}
        />
        <OrbitControls />
        <hemisphereLight
          castShadow={true}
          color={"#bee8f7"}
          groundColor={"#f5deb3"}
          intensity={0.3}
          position={[0, 2, 0]}
        /> */}
      </Canvas>
    </div>
  );
};

export default MobileEffect;
