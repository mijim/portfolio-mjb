import React, { useEffect, useState } from "react";
import "./App.css";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas } from "react-three-fiber";
import * as THREE from "three";
import NavigationControls from "./camera/camera";
import Loader from "./components/loader/loader";
import Menu from "./components/menu/menu";

/**
 Assembly - sections:

 contacto:
 Assembly-8 

 proyectos:
 Assembly-8_2
 Assembly-11_1
 Assembly-14

 enlaces:
 Assembly-8_1

 sobre mi:
 Assembly-12
 */

const initPos2 = [2.815255628617398, 2.317359635567619, 0.6678043001467961];
const initRotation2 = [
  -0.5379590106574698,
  0.999354090194259,
  0.46513659438111615
];

const initPos = [4.431716337943775, 5.037659635568481, -3.0789426917704303];
const initRotation = [
  -1.9971314317087887,
  0.6647914739833739,
  2.20544313186807
];

const projectsPos = [
  -0.010578873576172786,
  1.4729496355720053,
  -0.20894175942057594
];
const projectsRot = [
  -2.247876777984284,
  1.4411851645229805,
  2.2519935915275706
];

const contactPos = [
  -0.40154128989215804,
  1.5489796355717402,
  0.780202785262715
];

const contactRot = [
  -1.5822028354256448,
  0.02557185801826034,
  1.990423180100031
];

const aboutPos = [-0.25559730511247675, 1.7824296355719624, 0.3143418313611403];

const aboutRot = [-0.2695999166321467, 0.7678853941471353, 0.1896349937533332];

const linksPos = [-0.8568908418930415, 1.5354296355721382, -1.0320761973641777];

const linksRot = [
  -1.5707962773736786,
  -1.8397984633163056e-10,
  -0.003722672238629215
];

const edgesMaterial = new THREE.LineBasicMaterial({
  color: 0xf5deb3,
  linewidth: 10
});

function App() {
  const [mainCamera, setMainCamera] = useState(null);
  const [mainScene, setMainScene] = useState(null);
  const [viewPosition, setViewPosition] = useState(initPos);
  const [viewRotation, setViewRotation] = useState(initRotation);
  const [sceneLoaded, setSceneLoaded] = useState(false);
  const [hoveredSection, setHoveredSection] = useState("");

  useEffect(() => {
    if (mainScene) {
      const loader = new GLTFLoader();
      loader.load("/models/portfolio_scene.glb", object => {
        mainScene.children.push(object.scene);
        // object.scene.children[0].children.forEach(child => {
        //   if (
        //     child.name.indexOf("Assembly") > -1 &&
        //     child.name.indexOf("Assembly-7") === -1
        //   ) {
        //     addEdges(mainScene, child, `${child.name}-edges`);
        //   }
        // });
        setTimeout(() => {
          setViewPosition(initPos2);
          setViewRotation(initRotation2);
          setSceneLoaded(true);
        }, 1000);
      });
    }
  }, [mainScene]);

  useEffect(() => {
    const handleClick = () => {
      if (hoveredSection !== "") {
        handleClickSection(hoveredSection);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [hoveredSection]);

  // useEffect(() => {
  //   if (mainCamera) {
  //     const handleMove = ev => {
  //       const xValue = ev.clientX / 50000;
  //       const yValue = ev.clientY / 50000;
  //       if (initPos[0] !== viewRotation[0]) {
  //         mainCamera.rotation.set(
  //           viewRotation[0] - xValue,
  //           viewRotation[1] - yValue,
  //           viewRotation[2]
  //         );
  //       }
  //     };
  //     document.addEventListener("mousemove", handleMove);
  //     return () => document.removeEventListener("mousemove", handleMove);
  //   }
  // }, [mainCamera, viewRotation]);

  const addEdges = (scene, object, name) => {
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
      object.children.forEach(child => addEdges(scene, child, name));
    }
  };

  const handleHover = object => {
    if (
      object &&
      object.name.indexOf("Assembly") === -1 &&
      object.parent &&
      object.name.indexOf("Assembly-7") === -1
    ) {
      handleHover(object.parent);
    } else if (
      object &&
      object.name.indexOf("Assembly") > -1 &&
      object.name.indexOf("Assembly-7") === -1
    ) {
      document.body.style.cursor = "pointer";
      if (hoveredSection === "") {
        switch (object.name) {
          case "Assembly-8":
            setHoveredSection("contact");
            break;
          case "Assembly-8_2":
          case "Assembly-11_1":
          case "Assembly-14":
            setHoveredSection("projects");
            break;
          case "Assembly-8_1":
            setHoveredSection("links");
            break;
          case "Assembly-12":
            setHoveredSection("about");
            break;
          default:
        }
      }
    } else {
      if (hoveredSection !== "") {
        setHoveredSection("");
      }
      document.body.style.cursor = "inherit";
    }
  };

  const handleClickSection = section => {
    switch (section) {
      case "projects":
        setViewPosition(projectsPos);
        setViewRotation(projectsRot);
        break;
      case "links":
        setViewPosition(linksPos);
        setViewRotation(linksRot);
        break;
      case "about":
        setViewPosition(aboutPos);
        setViewRotation(aboutRot);
        break;
      case "contact":
        setViewPosition(contactPos);
        setViewRotation(contactRot);
        break;
      default:
        setViewPosition(initPos2);
        setViewRotation(initRotation2);
    }
  };

  return (
    <div className="App">
      <Loader loaded={sceneLoaded} />
      <Canvas
        id="main-canvas"
        camera={{
          position: [3.2158506873285586, 3.644959635571787, -1],
          fov: 50,
          near: 0.001
        }}
        onCreated={context => setMainScene(context.scene)}
        shadowMap
      >
        <NavigationControls
          newViewPostion={viewPosition}
          newViewRotation={viewRotation}
          editMode={true}
          setCamera={camera => setMainCamera(camera)}
          objects={
            mainScene && mainScene.children[1]
              ? mainScene.children[1].children
              : null
          }
          onObjectHover={objects => {
            if (objects) {
              [objects[0]].forEach(object => {
                handleHover(object.object);
              });
            } else {
              document.body.style.cursor = "inherit";
              if (hoveredSection !== "") {
                setHoveredSection("");
              }
            }
          }}
        />
        <directionalLight
          color={"#ffffff"}
          intensity={1.2}
          position={[0.8, 1, 0]}
        />
      </Canvas>
      {sceneLoaded && (
        <Menu
          hoveredSection={hoveredSection}
          onClickSection={handleClickSection}
        />
      )}
    </div>
  );
}

export default App;
