# Palantir - Asteroid Impact Simulator 🌍💥

An enhanced, interactive web-based asteroid impact simulator that visualizes the devastating effects of asteroid collisions with Earth. Features include 2D map for impact selection, 3D trajectory visualization, location-based casualty calculations, and real-time physics simulations.

## Features

### 🗺️ Interactive 2D Map
- **Click anywhere on Earth** to drop your asteroid
- **Real-time visualization** of impact zones with colored circles
- **OpenStreetMap** integration for accurate geography
- **Zoom and pan** controls for detailed exploration
- **Animated impact markers** showing ground zero
- **Reliable rendering** that works on all systems

### 🚀 3D Trajectory Visualization
- **Separate trajectory page** with full 3D animation
- Watch the meteor approach Earth from space
- **Real NASA Blue Marble texture** on Earth
- **Atmospheric entry effects** with heat trails
- **Impact explosion** with particle effects
- **Bright flash and boom sound** on impact
- **Real-time timeline** showing impact phases
- **Orbiting camera** for cinematic views

### 🛡️ Mitigation Strategies Evaluation Engine (NEW!)
- **Kinetic Impactor (KI) Model**:
  - Based on NASA's DART mission
  - Calculate momentum transfer and deflection
  - Momentum enhancement factor (β) from ejecta
  - Adjustable impactor mass and velocity
  - Success evaluation based on required deflection
- **Gravity Tractor (GT) Model**:
  - Slow gravitational pull method
  - Calculate mission duration requirements
  - Multiple tractor support (formation flying)
  - Standoff distance optimization
- **Strategy Comparison**:
  - Side-by-side analysis
  - Automatic recommendations
  - Mission complexity assessment
- **Educational formulas** showing methodology

### 📊 Dynamic Casualty Calculations (NEW!)
- **Location-based factors**:
  - Urban areas (8,000 people/km²)
  - Suburban areas (3,000 people/km²)
  - Rural areas (100 people/km²)
  - Coastal regions (tsunami risk)
  - Mountainous terrain
- **Building density** calculations
- **Major city detection** (NYC, LA, Tokyo, etc.)
- **Realistic fatality rates** by zone type
- **Tsunami multiplier** for coastal impacts

### ⚙️ Advanced Physics Simulation
- **Impact Energy**: Calculates kinetic energy in megatons of TNT
- **Crater Formation**: Accurate crater diameter calculations based on energy, angle, and target type
- **Fireball Radius**: Immediate vaporization zone
- **Air Blast Radius**: Overpressure wave calculations (20 psi)
- **Thermal Radiation**: 3rd-degree burn radius
- **Seismic Effects**: Richter scale earthquake magnitude

### 🎛️ Customizable Parameters
- **Asteroid Diameter**: 10m - 10km
- **Impact Velocity**: 11-72 km/s (cosmic velocities)
- **Impact Angle**: 15° - 90° (grazing to perpendicular)
- **Composition Types**: 
  - Iron (7,800 kg/m³)
  - Stone (3,000 kg/m³)
  - Ice (1,000 kg/m³)
  - Carbon-rich (2,000 kg/m³)
- **Target Selection**: Land or water impacts

### 🌟 Famous Asteroid Presets
- **Tunguska Event (1908)**: 60m icy body that leveled 2,000 km² of Siberian forest
- **Chelyabinsk (2013)**: 20m meteor that exploded over Russia
- **Barringer Crater**: Created Arizona's famous meteor crater
- **Chicxulub Impact**: The dinosaur-killer - 10km asteroid

### 📊 Real-Time Impact Analysis
- Energy comparisons (TNT equivalent, nuclear weapons)
- Estimated casualties based on affected area
- Multiple damage zones visualized with color-coded circles
- Detailed statistics panel

### 🎨 Modern, Beautiful UI
- Dark space-themed design
- Smooth animations and transitions
- Glassmorphism effects
- Responsive controls
- Professional gradient styling

## How to Use

1. **Open `index.html`** in any modern web browser (Chrome, Firefox, Safari, Edge)
2. **Adjust Parameters**: Use the left control panel to set asteroid properties
3. **Click the Map**: Drop your asteroid anywhere on Earth
4. **View Results**: See impact zones, detailed casualty breakdown, and statistics
5. **See Location Details**: Check the "Location Type" to understand the area
6. **View Trajectory**: Click "🚀 View Trajectory Animation" button to see 3D approach
7. **Evaluate Mitigation**: Click "🛡️ Evaluate Mitigation Strategies" button
8. **Choose Defense Method**: Test Kinetic Impactor or Gravity Tractor
9. **Compare Strategies**: See which method works best for your scenario
10. **Return**: Click "← Back to Simulator" buttons to navigate
11. **Try Presets**: Click famous asteroid buttons for historical impacts

### Keyboard Shortcuts
- **R**: Generate random asteroid parameters
- **C**: Clear current impact visualization
- **T**: View trajectory animation (after impact)
- **M**: Evaluate mitigation strategies (after impact)
- **Mouse Drag**: Pan the map
- **Mouse Scroll**: Zoom in/out

### What You'll See
When you drop an asteroid, you'll witness:
- 💥 **Impact Point**: Animated marker showing exact impact location
- ⭕ **Damage Zones**: Three color-coded circles (fireball, blast, thermal)
- 📊 **Real-time Statistics**: Detailed impact calculations
- 🏙️ **Location Type**: See if it's urban, rural, coastal, etc.
- 👥 **Dynamic Casualties**: Location-based casualty estimates
- 🔍 **Auto-zoom**: Map automatically frames the entire impact area
- 🎯 **Interactive Zones**: Click circles for more information
- 🚀 **Trajectory Button**: Opens 3D visualization of meteor path

## System Requirements

### Recommended
- **Modern Web Browser**: Chrome, Firefox, Safari, Edge (any recent version)
- **Internet Connection**: Required to load Leaflet.js library and map tiles
- **No special requirements**: Works on any device with a web browser!

### Note
The simulator uses **free OpenStreetMap** tiles and **Leaflet.js** - no authentication or API keys required! It works out of the box on any system without WebGL or GPU requirements.

## Technical Details

### Physics Calculations
The simulator uses scientifically-based equations to calculate:
- Kinetic energy from mass and velocity
- Crater scaling laws
- Blast wave propagation
- Thermal radiation distance
- Seismic energy conversion

### Technologies Used
- **Cesium.js**: Advanced 3D globe rendering and terrain visualization
- **OpenStreetMap Buildings**: Real 3D building data from cities worldwide
- **WebGL**: Hardware-accelerated 3D graphics
- **Vanilla JavaScript**: Physics engine and calculations
- **CSS3**: Modern animations and effects
- **HTML5**: Semantic structure

## Improvements Over Original

This enhanced version includes:
1. ✅ **Interactive 2D map** with smooth controls
2. ✅ **Animated impact zones** with color-coded circles
3. ✅ **Zoom-to-impact** feature for better visualization
4. ✅ **Popup information** on damage zones
5. ✅ More detailed physics calculations
6. ✅ Beautiful modern UI with gradients and animations
7. ✅ Multiple asteroid composition types
8. ✅ Land vs water impact options
9. ✅ Seismic effect calculations
10. ✅ Energy comparison contexts
11. ✅ Famous asteroid presets
12. ✅ Smooth visual effects and transitions
13. ✅ Professional information panels
14. ✅ Real-time parameter updates
15. ✅ Keyboard shortcuts
16. ✅ Random asteroid generator
17. ✅ Responsive design
18. ✅ Casualty estimates
19. ✅ Works reliably on all systems (no WebGL issues)

## Future Enhancements

Potential additions:
- Integration with NASA NEO API for real asteroid data
- USGS datasets for tsunami and seismic predictions
- More realistic building collapse physics
- Fire and smoke particle systems
- Historical impact database
- Share impact scenarios
- Sound effects and shockwave audio
- Multiple simultaneous impacts
- Atmospheric entry trail visualization
- Fragmentation modeling
- VR/AR support for immersive experience
- Real-time weather and atmospheric effects

## Educational Value

This tool helps understand:
- The devastating power of asteroid impacts
- Why asteroid detection and deflection are crucial
- Scale differences between various asteroids
- How impact parameters affect outcomes
- The importance of planetary defense

## License

Open source - feel free to use and modify!

---

**⚠️ Disclaimer**: This is a simplified simulation for educational purposes. Actual asteroid impacts involve complex physics including atmospheric entry, fragmentation, and varied geological effects. Real impact predictions require sophisticated modeling.
