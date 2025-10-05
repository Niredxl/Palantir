# Palantir - Near-Earth Object (NEO) Visualization & Impact Simulator 🌍💥🛰️

A comprehensive asteroid tracking and impact simulation platform combining **real NASA data** with interactive 3D visualization and physics-based impact modeling. Track real near-earth objects, simulate custom asteroid impacts, visualize 3D trajectories, and evaluate planetary defense strategies.

## 🎯 System Overview

**Palantir** consists of three integrated modules:
1. **Live Sentry Feed** - Real-time NASA NEO tracking with 3D visualization
2. **Custom Impact Simulator** - Interactive asteroid impact modeling anywhere on Earth
3. **Mitigation Evaluator** - Planetary defense strategy calculator

---

## 🚀 Main Features

### 🛰️ Live Sentry Feed (Real-Time NASA Data)
Track real near-earth objects from NASA's database with immersive 3D visualization.

- **Real NASA NEO data** from the NASA NeoWs (Near Earth Object Web Service) API
- **3D Earth visualization** using Three.js with realistic Earth textures
- **Interactive asteroid tracking** showing real approaching objects in real-time
- **Search functionality** to find and focus on specific meteors
- **Live orbital mechanics** with gravitational physics simulation
- **Auto-updating feed** with approach dates, sizes, velocities, and hazard status
- **Fallback data system** ensures functionality even when NASA API is unavailable
- **15,000+ star field** for immersive space environment
- **Click any asteroid** to view its orbital path and details
- **Sidebar panel** with scrollable list of approaching NEOs
- **Hazard indicators** showing potentially hazardous asteroids

### 🎮 Custom Asteroid Impact Simulator
Simulate hypothetical asteroid impacts anywhere on Earth with scientifically-based physics.

#### 🗺️ Interactive 2D Map
- **Click anywhere on Earth** to drop your asteroid
- **Real-time visualization** of impact zones with colored circles
- **OpenStreetMap** integration for accurate geography
- **Zoom and pan** controls for detailed exploration
- **Animated impact markers** showing ground zero
- **Reliable rendering** that works on all systems
- **Impact flash effect** and screen shake on impact
- **Auto-zoom to fit** entire damage area

#### 🚀 3D Trajectory Visualization
- **Separate trajectory page** with full 3D animation
- Watch the meteor approach Earth from space
- **Real NASA Blue Marble texture** on Earth
- **Atmospheric entry effects** with heat trails
- **Impact explosion** with particle effects
- **Bright flash and boom sound** on impact
- **Real-time timeline** showing impact phases
- **Orbiting camera** for cinematic views

#### 🛡️ Mitigation Strategies Evaluation Engine
Evaluate and compare planetary defense methods to deflect incoming asteroids.

- **Kinetic Impactor (KI) Model**:
  - Based on NASA's DART mission
  - Calculate momentum transfer and deflection
  - Momentum enhancement factor (β) from ejecta (DART achieved β ≈ 3.6)
  - Adjustable impactor mass and velocity
  - Success evaluation based on required deflection
  - Real-time lead time calculation
  - **3D visualization** of deflection trajectory

- **Gravity Tractor (GT) Model**:
  - Slow gravitational pull method
  - Calculate mission duration requirements
  - Multiple tractor support (formation flying)
  - Standoff distance optimization
  - Real gravitational force calculations using Newton's law
  - **3D visualization** with gravitational field lines

- **Strategy Comparison**:
  - Side-by-side analysis table
  - Automatic recommendations based on scenario
  - Mission complexity assessment
  - Duration vs effectiveness trade-offs

- **Educational formulas** showing methodology
- **DART Mission preset** with actual parameters from NASA's 2022 mission

#### 📊 Dynamic Casualty Calculations
Advanced location-based casualty modeling using real geographic data.

- **Location-based factors**:
  - Urban areas (up to 15,000 people/km² for megacities)
  - Suburban areas (3,000 people/km²)
  - Rural areas (100-500 people/km²)
  - Coastal regions (tsunami risk multiplier)
  - Mountainous terrain (50 people/km²)
  - Open ocean (zero casualties)

- **Comprehensive city database** with 25+ major world cities
- **Building density** calculations for collapse casualties
- **Major city detection** (NYC, LA, Tokyo, Delhi, Shanghai, etc.)
- **Realistic fatality rates** by zone type:
  - Blast zone: 95% fatality rate
  - Thermal zone: 50% fatality rate
  - Building collapse: 20% additional in urban areas
  - Tsunami: Coastal multiplier for water impacts

- **Detailed casualty breakdown** showing:
  - Population density of impact area
  - Blast casualties
  - Thermal radiation casualties
  - Building collapse casualties
  - Tsunami casualties (if applicable)
  - Full calculation formula displayed

#### ⚙️ Advanced Physics Simulation
Scientifically-based impact modeling using real equations.

- **Impact Energy**: Calculates kinetic energy in megatons of TNT
- **Crater Formation**: Accurate crater diameter calculations based on:
  - Impact energy
  - Impact angle (15° - 90°)
  - Target type (land vs water)
  - Asteroid composition
- **Fireball Radius**: Immediate vaporization zone
- **Air Blast Radius**: Overpressure wave calculations (20 psi threshold)
- **Thermal Radiation**: 3rd-degree burn radius
- **Seismic Effects**: Richter scale earthquake magnitude
- **Energy comparisons**: TNT equivalent, nuclear weapons, historical events

#### 🎛️ Customizable Parameters
- **Asteroid Diameter**: 10m - 10km (10,000m)
- **Impact Velocity**: 11-72 km/s (cosmic velocities)
- **Impact Angle**: 15° - 90° (grazing to perpendicular)
- **Composition Types** with realistic densities:
  - Iron (7,800 kg/m³) - metallic asteroids
  - Stone (3,000 kg/m³) - rocky asteroids (most common)
  - Ice (1,000 kg/m³) - cometary bodies
  - Carbon-rich (2,000 kg/m³) - carbonaceous asteroids
- **Target Selection**: Land or water (ocean) impacts

#### 🌟 Famous Asteroid Presets
Load historically significant impact scenarios with accurate parameters.

- **Tunguska Event (1908)**: 60m icy body that leveled 2,000 km² of Siberian forest
- **Chelyabinsk (2013)**: 20m meteor that exploded over Russia, injuring 1,500
- **Barringer Crater**: Created Arizona's famous meteor crater 50,000 years ago
- **Chicxulub Impact**: The dinosaur-killer - 10km asteroid, 66 million years ago

---

## 🖥️ Backend API

The project includes a **Flask-based REST API** for fetching real asteroid data.

### API Endpoints

**Base URL**: `http://localhost:5000`

#### `GET /api/neo`
Fetches near-earth objects for a given date range from NASA's API.

**Query Parameters**:
- `start_date` (optional): Start date in YYYY-MM-DD format (default: 2025-10-01)
- `end_date` (optional): End date in YYYY-MM-DD format (default: 2025-10-02)

**Response**: JSON array of asteroid objects with:
```json
[
  {
    "name": "Asteroid Name",
    "size": 150,
    "distance": 1500000,
    "speed": 15.2,
    "isHazardous": true
  }
]
```

### Backend Features
- **NASA NEO Web Service integration** using official API
- **Environment-based API key management** via `.env` file
- **Automatic fallback system** when NASA API is unavailable
- **CORS enabled** for cross-origin frontend requests
- **Error handling** with graceful degradation
- **Sample data** for development and testing

### Setup Instructions

1. **Install Python dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

2. **Configure NASA API Key**:
   - Get a free API key from: https://api.nasa.gov/
   - Create a `.env` file in the backend directory:
     ```
     NASA_NEO_API=your_api_key_here
     ```

3. **Run the backend server**:
   ```bash
   cd backend
   python app.py
   ```
   Server will start on `http://localhost:5000`

4. **Open the frontend**:
   - Navigate to the `Frontend` directory
   - Open `index.html` in a web browser

### Dependencies
- **Flask**: Web framework
- **Flask-CORS**: Cross-origin resource sharing
- **requests**: HTTP library for NASA API calls
- **python-dotenv**: Environment variable management

---

## 📖 How to Use

### Live Sentry Feed
1. **Open `Frontend/index.html`** in your browser
2. **View real approaching asteroids** in the sidebar
3. **Search for specific objects** using the search bar
4. **Click any asteroid** in the 3D view to see its path
5. **Watch orbital mechanics** in real-time with gravitational pull
6. **Navigate to simulators** using the ribbon header buttons

### Custom Impact Simulator
1. **Click "Custom Asteroid"** button or open `Frontend/custom.html`
2. **Adjust Parameters**: Use the left control panel to set:
   - Asteroid diameter
   - Impact velocity
   - Impact angle
   - Composition type
   - Target type (land/water)
3. **Click the Map**: Drop your asteroid anywhere on Earth
4. **View Results**: See impact zones, detailed casualty breakdown, and statistics
5. **See Location Details**: Check the "Location Type" to understand the area
6. **View Trajectory**: Click "🚀 View Trajectory Animation" button
7. **Evaluate Mitigation**: Click "🛡️ Evaluate Mitigation Strategies" button
8. **Try Presets**: Click famous asteroid buttons for historical impacts

### Mitigation Strategies
1. **Open from impact simulator** or navigate directly to `Frontend/mitigation.html`
2. **Review asteroid parameters** or edit them
3. **Test Kinetic Impactor**:
   - Adjust impactor mass and velocity
   - Set momentum enhancement factor (β)
   - Set warning time
   - Calculate deflection
4. **Test Gravity Tractor**:
   - Set spacecraft mass
   - Adjust standoff distance
   - Choose number of tractors
   - Calculate mission duration
5. **Compare Strategies**: View side-by-side comparison table
6. **Visualize in 3D**: Click visualization buttons to see animated deflections

### Keyboard Shortcuts
- **R**: Generate random asteroid parameters
- **C**: Clear current impact visualization
- **T**: View trajectory animation (after impact)
- **M**: Evaluate mitigation strategies (after impact)
- **Mouse Drag**: Pan the map
- **Mouse Scroll**: Zoom in/out

### What You'll See on Impact
- 💥 **Impact Point**: Animated marker showing exact impact location
- ⭕ **Damage Zones**: Three color-coded circles:
  - Red: Fireball (vaporization)
  - Orange: Air blast (overpressure)
  - Yellow: Thermal radiation (burns)
- 📊 **Real-time Statistics**: Impact energy, crater size, casualties
- 🏙️ **Location Type**: Urban, rural, coastal, etc. with population density
- 👥 **Dynamic Casualties**: Location-based casualty estimates with breakdown
- 🔍 **Auto-zoom**: Map automatically frames the entire impact area
- 🎯 **Interactive Zones**: Click circles for more information
- 🚀 **Trajectory Button**: Opens 3D visualization of meteor path
- 🛡️ **Mitigation Button**: Opens deflection strategy calculator

---

## 🔧 Technical Details

### Physics Calculations

The simulator uses scientifically-based equations:

- **Kinetic Energy**: E = ½ mv² (converted to megatons TNT)
- **Crater Diameter**: Scaling laws based on impact energy and angle
- **Blast Radius**: R = k × E^(1/3) where k depends on overpressure threshold
- **Thermal Radius**: R = 0.67 × E^0.41 (for 3rd degree burns)
- **Seismic Magnitude**: M = 0.67 × log₁₀(E) + 3.87 (Richter scale)
- **Momentum Transfer**: Δv = β × (m_impactor × v_impactor) / m_asteroid
- **Gravitational Force**: F = G × (m₁ × m₂) / r²

### Technologies Used

**Frontend**:
- **Three.js**: 3D rendering engine for Earth and asteroid visualization
- **Leaflet.js**: Interactive 2D map library
- **OpenStreetMap**: Free map tile provider
- **Vanilla JavaScript**: Core physics engine and calculations
- **CSS3**: Modern animations, transitions, and glassmorphism effects
- **HTML5**: Semantic structure and canvas elements

**Backend**:
- **Flask**: Lightweight Python web framework
- **NASA NEO Web Service API**: Official near-earth object data source
- **JSON**: Data interchange format
- **RESTful architecture**: Standard API design

### Browser Compatibility
- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Opera
- ⚠️ Internet Explorer not supported

### System Requirements

**Frontend Only**:
- Modern web browser
- Internet connection (for map tiles and libraries)
- No special hardware requirements

**With Backend**:
- Python 3.7+
- Internet connection (for NASA API)
- 50MB free disk space

---

## 🎨 User Interface Features

### Design Elements
- **Dark space-themed** design for immersive experience
- **Smooth animations** and transitions
- **Glassmorphism effects** on panels
- **Gradient styling** for buttons and headers
- **Responsive controls** that work on all screen sizes
- **Professional sidebar** with scrollable asteroid list
- **Color-coded hazard indicators**
- **Loading animations** for API fetches
- **Interactive tooltips** and popups

### Accessibility
- Clear visual hierarchy
- High contrast text
- Descriptive labels
- Keyboard navigation support
- Hover states for interactive elements

---

## 📚 Educational Value

This tool helps understand:
- **The devastating power of asteroid impacts** and their global consequences
- **Why asteroid detection and deflection are crucial** for planetary defense
- **Scale differences between various asteroids** from Chelyabinsk to Chicxulub
- **How impact parameters affect outcomes** (angle, velocity, composition)
- **The importance of early warning** for successful deflection
- **Real planetary defense technologies** like DART and gravity tractors
- **Physics of impact events** including energy transfer and blast dynamics
- **Real near-earth objects** currently approaching Earth

### Use Cases
- **Educational institutions**: Physics and astronomy classes
- **Science communication**: Public outreach and engagement
- **Research visualization**: Impact modeling and scenario planning
- **Gaming and entertainment**: Realistic impact simulations
- **Planetary defense awareness**: Understanding real threats

---

## 🔮 Future Enhancements

Potential additions:
- ✨ **Real-time notifications** for actual approaching asteroids
- 🗺️ **USGS datasets** for tsunami and seismic predictions
- 🏗️ **More realistic building collapse physics**
- 🔥 **Fire and smoke particle systems** post-impact
- 📖 **Historical impact database** with geological evidence
- 🔗 **Share impact scenarios** via URL parameters
- 🔊 **Sound effects** and shockwave audio
- 💥 **Multiple simultaneous impacts** simulation
- 🌪️ **Atmospheric entry trail visualization** with fragmentation
- 🎮 **VR/AR support** for immersive experience
- 🌦️ **Real-time weather and atmospheric effects**
- 📊 **Export data** to CSV/JSON for analysis
- 🤖 **Machine learning** for impact prediction refinement

---

## 📁 Project Structure

```
Palantir/
├── Frontend/
│   ├── index.html           # Live Sentry Feed (main page)
│   ├── custom.html          # Custom Impact Simulator
│   ├── trajectory.html      # 3D Trajectory Visualization
│   ├── mitigation.html      # Mitigation Strategy Evaluator
│   ├── script.js            # 3D Earth and asteroid logic
│   ├── style.css            # Main page styles
│   ├── styles.css           # Impact simulator styles
│   ├── trajectory.css       # Trajectory page styles
│   ├── mitigation.css       # Mitigation page styles
│   └── earthmap.jpg         # Earth texture for 3D visualization
├── backend/
│   ├── app.py               # Flask application and routes
│   ├── neo_requests.py      # NASA API integration
│   └── fallback_neo_data.json  # Fallback asteroid data
├── requirements.txt         # Python dependencies
├── APIs.md                  # API documentation
└── README.md               # This file
```

---

## 🤝 Contributing

Contributions are welcome! Areas for improvement:
- Enhanced physics models
- More realistic casualty calculations
- Additional mitigation strategies (nuclear deflection, laser ablation)
- Mobile-optimized interface
- Accessibility improvements
- Documentation translations

---

## ⚖️ License

Open source - feel free to use and modify!

---

## 🙏 Acknowledgments

- **NASA** for the NEO Web Service API and DART mission data
- **OpenStreetMap** contributors for map tiles
- **Three.js** team for the amazing 3D library
- **Leaflet** team for the mapping library
- Scientific community for impact physics research

---

## ⚠️ Disclaimer

This is a **simplified simulation for educational purposes**. Actual asteroid impacts involve extremely complex physics including:
- Atmospheric entry heating and fragmentation
- Varied geological and ocean responses
- Secondary effects (wildfires, tsunamis, climate change)
- Long-term environmental impacts

Real impact predictions require sophisticated computational models, supercomputers, and extensive observational data. This simulator provides approximate results for educational understanding and should not be used for actual planetary defense planning.

For real asteroid threat assessment, consult:
- **NASA's Planetary Defense Coordination Office**
- **ESA's Space Situational Awareness Programme**
- **International Asteroid Warning Network (IAWN)**

---

**Built with 🌍 for planetary defense education and awareness**
