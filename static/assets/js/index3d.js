const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    antialias: true
});


const geometry = new THREE.SphereBufferGeometry(15, 32, 32);
const material = new THREE.MeshPhongMaterial();
const mesh = new THREE.Mesh(geometry, material);

const starsGeometry = new THREE.SphereGeometry(40, 32, 32);
const starsMaterial = new THREE.MeshBasicMaterial();
const starsMesh = new THREE.Mesh(starsGeometry, starsMaterial);

const light = new THREE.DirectionalLight(0xffffff, 1.2);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setPixelRatio(window.devicePixelRatio);

camera.position.z = 30;
light.position.set(-140, 102, 40);

material.map = new THREE.TextureLoader().load('/static/assets/img/diffuse.jpg');
material.bumpMap = new THREE.TextureLoader().load('/static/assets/img/bump.jpg');
material.bumpScale = 0.01;

starsMaterial.map = new THREE.TextureLoader().load('/static/assets/img/hero-bg.jpg');
starsMaterial.side = THREE.BackSide;


mesh.position.set(0, 0, 0);
mesh.rotation.set(110, 0, 0);

scene.add(mesh);
scene.add(light);
scene.add(starsMesh);

document.addEventListener('mousemove', (e) => {
    camera.position.y = (e.y - (window.innerWidth / 2)) * 0.006;
    camera.position.x = (e.x - (window.innerWidth / 2)) * 0.005;
    camera.lookAt(scene.position);
});

const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    mesh.rotation.y += 0.001;
};

animate();

