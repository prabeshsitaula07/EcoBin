import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  FaArrowLeft,
  FaClock,
  FaTruck,
  FaMapMarkerAlt,
  FaLocationArrow
} from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { useEffect } from 'react';

// Fix for default markers in React Leaflet
delete (Icon.Default.prototype as any)._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const summaryCards = [
  {
    id: 1,
    title: "Next Pickup",
    value: "2 hrs 15 min",
    icon: <FaClock className="w-8 h-8 text-gray-600" />,
    color: "text-gray-900"
  },
  {
    id: 2,
    title: "Active Trucks",
    value: "5",
    icon: <FaTruck className="w-8 h-8 text-[#00A72C]" />,
    color: "text-[#00A72C]"
  },
  {
    id: 3,
    title: "Distance to you",
    value: "1.2 km",
    icon: <FaMapMarkerAlt className="w-8 h-8 text-[#00A72C]" />,
    color: "text-gray-900"
  }
];

// Sample truck data
const trucks = [
  {
    id: 1,
    name: "Truck-001",
    position: [27.7172, 85.3240], // Kathmandu coordinates
    status: "Active",
    route: "Organic Collection",
    eta: "15 min"
  },
  {
    id: 2,
    name: "Truck-002", 
    position: [27.7200, 85.3300],
    status: "Active",
    route: "Inorganic Collection",
    eta: "45 min"
  },
  {
    id: 3,
    name: "Truck-003",
    position: [27.7150, 85.3200],
    status: "Active", 
    route: "Mixed Collection",
    eta: "1 hr 20 min"
  }
];

// Sample route data
const routes = [
  {
    id: 1,
    coordinates: [
      [27.7172, 85.3240],
      [27.7180, 85.3250],
      [27.7190, 85.3260],
      [27.7200, 85.3270]
    ],
    color: "#00A72C"
  },
  {
    id: 2,
    coordinates: [
      [27.7200, 85.3300],
      [27.7210, 85.3310],
      [27.7220, 85.3320]
    ],
    color: "#FF6B35"
  }
];

// Custom truck icon
const truckIcon = new Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  shadowSize: [41, 41]
});

// Map component
const MapComponent = () => {
  const map = useMap();
  
  useEffect(() => {
    // Fit bounds to show all trucks
    if (trucks.length > 0) {
      const bounds = trucks.map(truck => truck.position);
      try {
        map.fitBounds(bounds as any, { padding: [20, 20] });
      } catch (error) {
        console.log('Error fitting bounds:', error);
      }
    }
  }, [map]);

  return null;
};

const LiveTracking = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f6fbf7]">
      <motion.div 
        className="max-w-7xl mx-auto px-6 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Back Button */}
        <motion.button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition mb-6"
          variants={cardVariants}
        >
          <FaArrowLeft className="w-4 h-4" />
          Back
        </motion.button>

        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          variants={cardVariants}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Live Tracking</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Track waste collection trucks in real-time and schedule pickups efficiently.
          </p>
        </motion.div>

        {/* Summary Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          variants={cardVariants}
        >
          {summaryCards.map((card) => (
            <motion.div
              key={card.id}
              className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{card.title}</p>
                  <p className={`text-2xl font-bold ${card.color}`}>{card.value}</p>
                </div>
                <div className="text-gray-400">
                  {card.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Real-Time Map Section */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
          variants={cardVariants}
        >
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <FaMapMarkerAlt className="w-6 h-6 text-[#00A72C]" />
              <h2 className="text-2xl font-bold text-gray-900">Real-Time Map</h2>
            </div>
            <p className="text-gray-600">Live locations of waste collection trucks</p>
          </div>

          {/* Interactive Map */}
          <div className="h-[500px] rounded-lg overflow-hidden border border-gray-200">
            <MapContainer
              center={[27.7172, 85.3240]}
              zoom={13}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              
              {/* Routes */}
              {routes.map((route) => (
                <Polyline
                  key={route.id}
                  positions={route.coordinates as any}
                  color={route.color}
                  weight={3}
                  opacity={0.7}
                />
              ))}
              
              {/* Truck Markers */}
              {trucks.map((truck) => (
                <Marker
                  key={truck.id}
                  position={truck.position as any}
                  icon={truckIcon}
                >
                  <Popup>
                    <div className="p-2">
                      <h3 className="font-bold text-[#00A72C]">{truck.name}</h3>
                      <p className="text-sm text-gray-600">Status: {truck.status}</p>
                      <p className="text-sm text-gray-600">Route: {truck.route}</p>
                      <p className="text-sm text-gray-600">ETA: {truck.eta}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
              
              <MapComponent />
            </MapContainer>
          </div>

          {/* Map Legend */}
          <div className="mt-4 flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#00A72C] rounded-full"></div>
              <span className="text-sm text-gray-600">Organic Collection</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#FF6B35] rounded-full"></div>
              <span className="text-sm text-gray-600">Inorganic Collection</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#4A90E2] rounded-full"></div>
              <span className="text-sm text-gray-600">Mixed Collection</span>
            </div>
          </div>

          {/* Enable Location Services Button */}
          <div className="text-center mt-6">
            <motion.button
              className="bg-[#00A72C] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#00A72C]/90 transition flex items-center justify-center gap-2 mx-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaLocationArrow className="w-4 h-4" />
              Enable location services
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LiveTracking;
