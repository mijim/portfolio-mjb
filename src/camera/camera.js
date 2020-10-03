/* eslint-disable react-hooks/exhaustive-deps */
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import { useThree } from "react-three-fiber";
import * as THREE from "three";
import React, { useRef, useEffect, useState } from "react";
import { extend, useFrame } from "react-three-fiber";
import gsap from "gsap";

extend({ PointerLockControls });

const NavigationControls = props => {
  const { collisions } = props;
  const [locked, setLocked] = useState(true);
  const controls = useRef();

  const mouse = new THREE.Vector2();
  mouse.x = window.innerWidth / 2;
  mouse.y = window.innerHeight / 2;

  const onMouseMove = event => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  const {
    camera,
    raycaster,
    gl: { domElement }
  } = useThree();
  const centerRaycaster = new THREE.Raycaster();

  let moveForward = false;
  let moveBackward = false;
  let moveUp = false;
  let moveDown = false;
  let moveLeft = false;
  let moveRight = false;
  let canJump = false;

  var prevTime = performance.now();
  const velocity = new THREE.Vector3();
  const direction = new THREE.Vector3();
  const vertex = new THREE.Vector3();
  const color = new THREE.Color();
  const objects = [];

  var onKeyDown = function(event) {
    if (event.ctrlKey && event.key === "m") {
      event.stopPropagation();
      event.preventDefault();
      if (locked) {
        setLocked(false);
        controls.current.lock();
      }
    }
    if (locked) return;
    switch (event.keyCode) {
      case 38: // up
        moveUp = true;
        break;
      case 87: // w
        moveForward = true;
        break;

      case 37: // left
      case 65: // a
        moveLeft = true;
        break;

      case 40: // down
        moveDown = true;
        break;
      case 83: // s
        moveBackward = true;
        break;

      case 39: // right
      case 68: // d
        moveRight = true;
        break;
      default:
        moveForward = false;
    }
  };

  var onKeyUp = function(event) {
    switch (event.keyCode) {
      case 38: // up
        moveUp = false;
        break;
      case 87: // w
        moveForward = false;
        break;

      case 37: // left
      case 65: // a
        moveLeft = false;
        break;

      case 40: // down
        moveDown = false;
        break;
      case 83: // s
        moveBackward = false;
        break;

      case 39: // right
      case 68: // d
        moveRight = false;
        break;
      default:
        console.log("camera --> ", camera);
        moveForward = false;
    }
  };

  useEffect(() => {
    if (props.setCamera) {
      props.setCamera(camera);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown, false);
    document.addEventListener("keyup", onKeyUp, false);
    document.addEventListener("mousemove", onMouseMove);
    // const walkUnlock = document.getElementById("mainCanvas");
    // walkUnlock.addEventListener("click", () => {
    //   setLocked(true);
    //   controls.current.unlock();
    // });
    // const walk = document.getElementById("walk");
    // walk.addEventListener("click", () => {
    //   setLocked(false);
    //   controls.current.lock();
    // });
    if (props.newViewPostion !== null && props.newViewRotation !== null) {
      gsap.to(camera.position, {
        duration: 2,
        x: props.newViewPostion[0],
        y: props.newViewPostion[1],
        z: props.newViewPostion[2]
      });
      gsap.to(camera.rotation, {
        duration: 2,
        x: props.newViewRotation[0],
        y: props.newViewRotation[1],
        z: props.newViewRotation[2]
      });
    }

    //return walk.removeEventListener("click", () => {});
  }, [
    props.newViewPostion,
    props.newViewRotation,
    locked,
    onKeyDown,
    onKeyUp,
    props.editMode,
    camera.position,
    camera.rotation
  ]);

  const getArtwork = object => {
    if (object.artwork) return object.artwork;
    else return getArtwork(object.parent);
  };

  useFrame(() => {
    if (props.objects && props.onObjectHover) {
      centerRaycaster.setFromCamera(mouse, camera);
      const centerIntersections = centerRaycaster.intersectObjects(
        props.objects,
        true
      );
      if (centerIntersections.length > 0) {
        props.onObjectHover(centerIntersections);
      } else {
        props.onObjectHover(null);
      }
    }
    if (!locked) {
      // raycaster.setFromCamera(mouse, camera);
      // raycaster.ray.origin.y -= 10;

      // var intersections = raycaster.intersectObjects(props.objects || objects);

      // var onObject = intersections.length > 0;

      var time = performance.now();
      var delta = (time - prevTime) / 5000;

      velocity.z -= velocity.z * 100 * delta;
      velocity.x -= velocity.x * 100 * delta;

      velocity.y -= 9.8 * 1000.0 * delta; // 100.0 = mass

      direction.z = Number(moveForward) - Number(moveBackward);
      direction.x = Number(moveRight) - Number(moveLeft);
      direction.normalize(); // this ensures consistent movements in all directions

      if (moveForward || moveBackward)
        velocity.z -= direction.z * 100.0 * delta;
      if (moveLeft || moveRight) velocity.x -= direction.x * 100.0 * delta;

      // if (onObject === true) {
      //   velocity.y = Math.max(0, velocity.y);
      // }
      if (!moveUp || !moveDown) velocity.y = 0;

      if (moveUp) velocity.y += 10.0;

      if (moveDown) velocity.y -= 10.0;

      controls.current.moveRight(-velocity.x * delta);
      controls.current.moveForward(-velocity.z * delta);

      controls.current.getObject().position.y += velocity.y * delta; // new behavior

      // if (controls.current.getObject().position.y < 10) {
      //   velocity.y = 0;
      //   controls.current.getObject().position.y = 3;
      // }

      prevTime = time;
    }
  });

  return <pointerLockControls ref={controls} args={[camera, domElement]} />;
};

export default NavigationControls;
