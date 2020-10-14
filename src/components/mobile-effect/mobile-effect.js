/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./mobile-effect.css";
import { Canvas, useFrame, render } from "react-three-fiber";
import { vertexShader, fragmentShader } from "./shaders";
import * as THREE from "three";
import { Sphere, OrbitControls } from "drei";

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

const MobileEffect = props => {
  const { stopAnimation, moveFast } = props;

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
      totalTime = 20;
      timeout = setTimeout(() => {
        increaseTime = 0.0002;
      }, 500);
      uniforms.u_mouse.value
        .set(
          window.innerWidth * 3,
          window.innerHeight - (window.innerHeight * 3 - 100)
        )
        .multiplyScalar(window.devicePixelRatio);
    } else {
      totalTime = 80;
      increaseTime = 0.01;
      setTimeout(() => {
        uniforms.u_mouse.value
          .set(100, window.innerHeight - 100)
          .multiplyScalar(window.devicePixelRatio);
      }, 900);
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
          position={[0, -1.4, 0]}
          material={material}
          scale={[0.7, 0.7, 0.7]}
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
