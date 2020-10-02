import React, { useEffect, useState, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, pointLight } from "react-three-fiber";
import * as THREE from "three";
import { OrbitControls, Box } from "drei";
const defaultMaterial = new THREE.MeshStandardMaterial({
  color: 0xff6666
});
const edgesMaterial = new THREE.LineBasicMaterial({
  color: 0x000000,
  linewidth: 10,
  linecap: "square"
});

function App() {
  const [mainScene, setMainScene] = useState(null);
  const controlsRef = useRef(null);

  useEffect(() => {
    if (mainScene) {
      const loader = new GLTFLoader();
      console.log("controlsRef --> ", controlsRef);
      loader.load("/models/portfolio_scene.glb", object => {
        console.log("mainScene --> ", mainScene);
        console.log("object --> ", object);
        object.scene.position.set(-2.5, -0.6, 1.5);
        object.scene.castShadow = true;
        object.scene.receiveShadow = true;
        setCastShadow(object.scene);
        addEdges(mainScene, object.scene);
        mainScene.children.push(object.scene);
      });
    }
  }, [mainScene]);

  const setCastShadow = object => {
    if (object.castShadow === false) {
      object.castShadow = true;
    }
    // if (object.receiveShadow === false) {
    //   object.receiveShadow = true;
    // }
    if (object.children) {
      object.children.forEach(child => setCastShadow(child));
    }
  };

  const addEdges = (scene, object) => {
    if (object.geometry) {
      const edges = new THREE.EdgesGeometry(object.geometry);
      const edgesMesh = new THREE.LineSegments(edges, edgesMaterial);
      const worldpos = object.getWorldPosition();
      const worldscale = object.getWorldScale();
      const quaternion = object.getWorldQuaternion();
      const rotation = new THREE.Euler();
      rotation.setFromQuaternion(quaternion);
      edgesMesh.position.set(worldpos.x, worldpos.y, worldpos.z);
      edgesMesh.rotation.set(rotation.x, rotation.y, rotation.z);
      edgesMesh.scale.set(worldscale.x, worldscale.y, worldscale.z);
      scene.children.push(edgesMesh);
    }
    if (object.children) {
      object.children.forEach(child => addEdges(scene, child));
    }
  };

  return (
    <div className="App">
      <Canvas
        id="main-canvas"
        camera={{
          position: [
            -1.8319611968285672,
            1.8641761009840985,
            4.6711600969489524
          ],
          fov: 50,
          near: 0.001,
          rotation: [0, 0, 0]
        }}
        onCreated={context => setMainScene(context.scene)}
        shadowMap
      >
        <OrbitControls ref={controlsRef} />
        {/* <ambientLight /> */}
        <pointLight
          position={[-1.7, 1, 1.2]}
          intensity={0.6}
          castShadow
          receiveShadow
        />
        <Box
          scale={[3, 0.5, 3]}
          position={[-1.7, -0.87, 1.2]}
          rotation={[0, 0, 0]}
          castShadow
          receiveShadow
          material={defaultMaterial}
        />
      </Canvas>
    </div>
  );
}

export default App;
