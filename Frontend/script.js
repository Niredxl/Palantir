import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('bg'),
    antialias: true,
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.set(25, 25, 35);


const ambientLight = new THREE.AmbientLight(0xffffff, 5);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 7.0);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);


const textureLoader = new THREE.TextureLoader();
const earthGeometry = new THREE.SphereGeometry(8, 64, 64);
const earthMaterial = new THREE.MeshStandardMaterial({
    color: 0x6688aa, 
});
textureLoader.load(
    'earthmap.jpg',
    (texture) => {
        earthMaterial.map = texture;
        earthMaterial.needsUpdate = true;
    },
    undefined,
    (error) => {
        console.error('An error occurred while loading the Earth texture. Displaying fallback model.');
    }
);
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);


const starGeometry = new THREE.BufferGeometry();
const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.02 });
const starVertices = [];
for (let i = 0; i < 15000; i++) {
    const x = (Math.random() - 0.5) * 2000;
    const y = (Math.random() - 0.5) * 2000;
    const z = (Math.random() - 0.5) * 2000;
    if (Math.sqrt(x*x + y*y + z*z) > 100) {
         starVertices.push(x, y, z);
    }
}
starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);


const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.minDistance = 10;
controls.maxDistance = 150;


const asteroids = [];
const clock = new THREE.Clock();
const G = 25; 

function animate() {
    requestAnimationFrame(animate);
    const delta = clock.getDelta();
    
    earth.rotation.y += 0.1 * delta;

    for (let i = asteroids.length - 1; i >= 0; i--) {
        const asteroid = asteroids[i];
        const distanceVector = new THREE.Vector3().subVectors(earth.position, asteroid.object.position);
        const distanceSq = distanceVector.lengthSq();

        const earthRadius = earth.geometry.parameters.radius;
        if (distanceSq < earthRadius * earthRadius) {   
            scene.remove(asteroid.object);
            asteroids.splice(i, 1);
            if (currentTrajectoryLine && asteroids.length === 0) {
                scene.remove(currentTrajectoryLine);
                currentTrajectoryLine = null;
            }
            continue; 
        }

        const gravityMagnitude = G / distanceSq;
        const gravityForce = distanceVector.normalize().multiplyScalar(gravityMagnitude);
        asteroid.velocity.add(gravityForce.multiplyScalar(delta));

        asteroid.object.position.add(asteroid.velocity.clone().multiplyScalar(delta));
        asteroid.object.rotation.x += 0.1 * delta;
        asteroid.object.rotation.y += 0.1 * delta;
    }

    controls.update();
    renderer.render(scene, camera);
}



const neoList = document.getElementById('neo-list');
const loadingIndicator = document.getElementById('loading-indicator');
const searchBox = document.getElementById('search-box');
const sidebarHeader = document.querySelector('.sidebar-header');
const customBtn = document.getElementById('customastro-btn');
const mitigationBtn = document.getElementById('mitigation-btn');

let allNeoData = [];
let currentTrajectoryLine = null;
let selectedNEO = null;

async function fetchNEOData() {
    const today = new Date().toISOString().split('T')[0];
    const API_URL = `http://127.0.0.1:5000/api/neo?start_date=${today}`;

    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();

        loadingIndicator.style.display = 'none';
        allNeoData = data.sort((a, b) => a.distance - b.distance);
        updateSidebar(allNeoData);
        visualizeAllNEOs(allNeoData);
        
        const hint = document.createElement('p');
        hint.className = 'hint';
        hint.style.fontSize = '0.75rem';
        hint.style.textAlign = 'center';
        hint.style.color = '#a0a0c0';
        hint.style.marginTop = '0.5rem';    
        hint.innerText = '(Click header to reset view)';
        if (!sidebarHeader.querySelector('.hint')) {
            sidebarHeader.appendChild(hint);
        }
    } catch (error) {
        console.error("Could not fetch NEO data:", error);
        loadingIndicator.innerHTML = '<span style="color: #ef4444;">Failed to load NASA data. Check console.</span>';
    }
}

function updateSidebar(data) {
    neoList.innerHTML = '';
    if (data.length === 0) {
        neoList.innerHTML = `<li class="no-results">No matching NEOs found.</li>`;
        return;
    }

    data.forEach(neo => {
        const item = document.createElement('li');
        item.className = 'neo-item';
        if (neo.isHazardous) item.classList.add('hazardous');
        
        item.innerHTML = `
            <div class="item-header">
                <h3>${neo.name}</h3>
                ${neo.isHazardous ? '<span class="hazardous-tag">HAZARDOUS</span>' : ''}
            </div>
            <div class="item-details">
                <p><strong><i class="fa-solid fa-ruler-horizontal"></i> Size:</strong> ~${neo.size.toLocaleString()} m</p>
                <p><strong><i class="fa-solid fa-gauge-high"></i> Speed:</strong> ${neo.speed.toLocaleString()} km/s</p>
                <p><strong><i class="fa-solid fa-map-location-dot"></i> Miss Distance:</strong> ${neo.distance.toLocaleString()} km</p>
            </div>
        `;
        
        item.addEventListener('click', () => {
            document.querySelectorAll('.neo-item.active').forEach(el => el.classList.remove('active'));
            item.classList.add('active');
            displaySingleNEO(neo);
            
            selectedNEO = neo;
        });
        neoList.appendChild(item);
    });
}

function clearScene() {
    asteroids.forEach(a => scene.remove(a.object));
    asteroids.length = 0;
    if (currentTrajectoryLine) {
        scene.remove(currentTrajectoryLine);
        currentTrajectoryLine = null;
    }
}

function visualizeAllNEOs(data) {
    clearScene();
    document.querySelectorAll('.neo-item.active').forEach(el => el.classList.remove('active'));
    data.forEach(neo => createAsteroid(neo, true));
    
    selectedNEO = null;
}

function displaySingleNEO(neo) {
    clearScene();
    const asteroidObj = createAsteroid(neo, false);
    
    const trajectoryPoints = [];
    const simulationSteps = 1000;
    const timeStep = 0.05;
    let simPosition = asteroidObj.object.position.clone();
    let simVelocity = asteroidObj.velocity.clone();

    for (let i = 0; i < simulationSteps; i++) {
        const distVec = new THREE.Vector3().subVectors(earth.position, simPosition);
        if (distVec.lengthSq() > earth.geometry.parameters.radius * earth.geometry.parameters.radius) {
            const gravMag = G / distVec.lengthSq();
            const gravForce = distVec.normalize().multiplyScalar(gravMag);
            simVelocity.add(gravForce.multiplyScalar(timeStep));
        }
        simPosition.add(simVelocity.clone().multiplyScalar(timeStep));
        trajectoryPoints.push(simPosition.clone());
    }

    const trajectoryGeom = new THREE.BufferGeometry().setFromPoints(trajectoryPoints);
    const trajectoryMat = new THREE.LineBasicMaterial({
        color: neo.isHazardous ? 0xff4444 : 0xffff00,
        transparent: true,
        opacity: 0.7
    });
    currentTrajectoryLine = new THREE.Line(trajectoryGeom, trajectoryMat);
    scene.add(currentTrajectoryLine);

    asteroids.push(asteroidObj);
    scene.add(asteroidObj.object);
}

function createAsteroid(neo, isSwarm) {
    const size = Math.log(neo.size + 1) * 0.1;
    const geometry = new THREE.IcosahedronGeometry(size > 0.05 ? size : 0.05, 0);
    const material = new THREE.MeshStandardMaterial({
        color: neo.isHazardous ? 0xff4444 : 0xaaaaaa,
        flatShading: true,
    });
    const object = new THREE.Mesh(geometry, material);

    const earthRadius = earth.geometry.parameters.radius;
    const missDistanceUnits = earthRadius + Math.log10(neo.distance / 10000 + 1) * 2;

    const approachVector = new THREE.Vector3(
        Math.random() - 0.5,
        Math.random() - 0.5,
        Math.random() - 0.5
    ).normalize();
    
    const randomPerp = new THREE.Vector3().copy(approachVector).applyAxisAngle(new THREE.Vector3(Math.random(), Math.random(), Math.random()).normalize(), Math.PI / 2);
    const perpendicularVector = new THREE.Vector3().crossVectors(approachVector, randomPerp).normalize();

    const closestPoint = perpendicularVector.multiplyScalar(missDistanceUnits);
    
    const startPosition = new THREE.Vector3()
        .copy(approachVector)
        .multiplyScalar(-100)
        .add(closestPoint);
        
    if(isSwarm){
        startPosition.multiplyScalar(1 + (Math.random() - 0.5) * 0.2);
    }

    object.position.copy(startPosition);

    const baseSpeed = 5 + neo.speed / 5;
    const velocity = approachVector.clone().multiplyScalar(baseSpeed);

    const asteroidData = { object, velocity };
    if (isSwarm) {
        asteroids.push(asteroidData);
        scene.add(object);
    }
    return asteroidData;
}


// --- Event Listeners & Initial Call ---
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

searchBox.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredData = allNeoData.filter(neo => neo.name.toLowerCase().includes(searchTerm));
    updateSidebar(filteredData);
});

sidebarHeader.addEventListener('click', () => {
    searchBox.value = '';
    updateSidebar(allNeoData);
    visualizeAllNEOs(allNeoData);
});



customBtn.addEventListener('click', () => {
    window.location.href = 'custom.html';
});
mitigationBtn.addEventListener('click', () => {
    window.location.href = 'mitigation.html';
});


animate();
fetchNEOData();

