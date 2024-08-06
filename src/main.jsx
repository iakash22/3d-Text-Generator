import * as THREE from 'three';
import './index.css'
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { FontLoader } from 'three/examples/jsm/Addons.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import gsap from 'gsap';


const scene = new THREE.Scene();

let userText = prompt('Enter your text');

const fontLoader = new FontLoader();
fontLoader.load('/fonts/helvetiker_regular.typeface.json',
  (font) => {
    const textGeometry = new TextGeometry(userText, {
      font,
      size: 0.8,
      depth: 0.2,
      curveSegments: 5,
      bevelEnabled: true,
      bevelThickness: 0.3,
      bevelSize: 0.02,
      bevelOffset: 0,
      bevelSegments: 4
    });
    const textMaterial = new THREE.MeshNormalMaterial();
    // textMaterial.wireframe = true;
    const text = new THREE.Mesh(textGeometry, textMaterial);

    // textGeometry.computeBoundingBox();
    // textGeometry.translate(
    //   (textGeometry.boundingBox.max.x - 0.02) * -0.5,
    //   (textGeometry.boundingBox.max.y - 0.02) * -0.5,
    //   (textGeometry.boundingBox.max.z - 0.3) * -0.5,
    // );

    textGeometry.center();
    scene.add(text);
  }
)

const size = {
  width: window.innerWidth,
  height: window.innerHeight,
}
const camera = new THREE.PerspectiveCamera(75, size.width / size.height, 1, 1000);
camera.position.z = 4;
scene.add(camera);


// Heart Object
const heartX = -25;
const heartY = -25;
const heartShape = new THREE.Shape();
heartShape.moveTo(25 + heartX, 25 + heartY);
heartShape.bezierCurveTo(25 + heartX, 25 + heartY, 20 + heartX, 0 + heartY, 0 + heartX, 0 + heartY);
heartShape.bezierCurveTo(-30 + heartX, 0 + heartY, -30 + heartX, 35 + heartY, -30 + heartX, 35 + heartY);
heartShape.bezierCurveTo(-30 + heartX, 55 + heartY, -10 + heartX, 77 + heartY, 25 + heartX, 95 + heartY);
heartShape.bezierCurveTo(60 + heartX, 77 + heartY, 80 + heartX, 55 + heartY, 80 + heartX, 35 + heartY);
heartShape.bezierCurveTo(80 + heartX, 35 + heartY, 80 + heartX, 0 + heartY, 50 + heartX, 0 + heartY);
heartShape.bezierCurveTo(35 + heartX, 0 + heartY, 25 + heartX, 25 + heartY, 25 + heartX, 25 + heartY);

const extrudeSettings = {
  depth: 8,
  bevelEnabled: true,
  bevelSegments: 2,
  steps: 2,
  bevelSize: 1,
  bevelThickness: 1,
};

const materialRed = new THREE.MeshBasicMaterial({
  color: '#FFC0CB',
});

const geometryHeart = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);


for (let i = 0; i < 100; i++){
  const meshHeart = new THREE.Mesh(geometryHeart, materialRed);
  meshHeart.position.set(
    (Math.random() - 0.5) * 20,
    (Math.random() - 0.5) * 20,
    (Math.random() - 0.5) * 20,
  )
  meshHeart.rotation.x = Math.PI
  meshHeart.scale.set(0.0075, 0.0075, 0.0075);
  gsap.to(meshHeart.scale, {x : 0.008, y : 0.008, z : 0.008, repeat : -1, duration : Math.floor(Math.random()) +1, })
  gsap.to(meshHeart.scale, {x : 0.007, y : 0.007, z : 0.007, repeat : -1, duration : Math.floor(Math.random()*3) +1,delay : 1, })
  scene.add(meshHeart);
}


// Resize screen size 
window.addEventListener('resize', () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
})

const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(size.width, size.height);
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

renderer.render(scene, camera);

const clock = new THREE.Clock();

const animate = () => {
  const e = clock.getElapsedTime();
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(animate);
}

animate();


