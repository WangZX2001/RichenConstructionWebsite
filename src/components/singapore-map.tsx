import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { MapPin, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import projectImage from "../../photo/king albert project.jpg";
import tampinesImage from "../../photo/Tam1.JPG";

// Custom map style - Light lively grey theme
const mapStyles = [
  {
    elementType: "geometry",
    stylers: [{ color: "#f0f0f0" }],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#ffffff" }],
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#8c8c8c" }],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#707070" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#a8a8a8" }],
  },
  {
    featureType: "poi",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#e8e8e8" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#e6e6e6" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#a8a8a8" }],
  },
  {
    featureType: "road",
    elementType: "labels",
    stylers: [{ visibility: "simplified" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#f5f5f5" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#d4d4d4" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels",
    stylers: [{ visibility: "simplified" }],
  },
  {
    featureType: "transit",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#dcdcdc" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#a8a8a8" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#ffffff" }],
  },
];

// Project locations with pins
const projectLocations = [
  {
    id: 1,
    name: "Capital Square Renovation",
    position: { lat: 1.28, lng: 103.85 },
    description:
      "Premium office tower facade in the heart of Singapore's CBD",
  },
  {
    id: 2,
    name: "Tampines One Renovation",
    position: { lat: 1.3496, lng: 103.9568 },
    description:
      "Complete facade renovation for major shopping center",
  },
  {
    id: 3,
    name: "Link@896 Dunnearn Village Renovation",
    position: { lat: 1.3358, lng: 103.7831 },
    description: "Comerical Building Facade Renovation",
  },
  {
    id: 4,
    name: "Changi Airport T5 Hangar",
    position: { lat: 1.3644, lng: 103.9915 },
    description:
      "Terminal 5 hangar sliding door installation for Singapore's airport expansion",
  },
];

const API_KEY = "AIzaSyCvwd3_oXTNXu-v27bt_JV_XCmS5Ntlz_4";

export function SingaporeMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<
    (typeof projectLocations)[0] | null
  >(null);

  useEffect(() => {
    // Check if Google Maps is already loaded
    if (
      typeof window !== "undefined" &&
      !(window as any).google
    ) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      script.onload = () => {
        // Add a delay to ensure Google Maps is fully initialized
        setTimeout(() => {
          if ((window as any).google?.maps?.Map) {
            initMap();
          }
        }, 500);
      };
    } else if ((window as any).google?.maps?.Map) {
      initMap();
    }
  }, []);

  const initMap = () => {
    if (!mapRef.current || !(window as any).google?.maps?.Map) return;

    // Create map with custom grey styling
    const mapInstance = new google.maps.Map(mapRef.current, {
      center: { lat: 1.3521, lng: 103.8198 }, // Singapore center
      zoom: 11,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      zoomControl: true,
      scrollwheel: false, // Disable scroll to zoom
      gestureHandling: "greedy", // Allow drag without Ctrl key
      styles: mapStyles, // Apply custom grey styling
    });

    setMap(mapInstance);

    // Keep track of currently open info window
    let currentInfoWindow: google.maps.InfoWindow | null = null;

    // Add markers for each location
    projectLocations.forEach((location) => {
      const marker = new google.maps.Marker({
        position: location.position,
        map: mapInstance,
        title: location.name,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: "#2563eb",
          fillOpacity: 1,
          strokeColor: "#ffffff",
          strokeWeight: 3,
        },
      });

      // Create info window
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="padding: 4px 12px 12px 12px; max-width: 280px;">
            <img 
              src="${location.name === "Tampines One Renovation" ? tampinesImage : projectImage}" 
              alt="${location.name}" 
              style="width: 100%; height: 160px; object-fit: cover; border-radius: 8px; margin-bottom: 10px; display: block;"
            />
            <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold; color: #1f2937;">
              ${location.name}
            </h3>
            <p style="margin: 0; font-size: 13px; color: #6b7280;">
              ${location.description}
            </p>
          </div>
        `,
      });

      // Click event for marker
      marker.addListener("click", () => {
        // Close previously open info window
        if (currentInfoWindow) {
          currentInfoWindow.close();
        }
        // Open new info window
        infoWindow.open(mapInstance, marker);
        currentInfoWindow = infoWindow;
        setSelectedLocation(location);
      });
    });

    // Click event for map - close info window when clicking on map
    mapInstance.addListener("click", () => {
      if (currentInfoWindow) {
        currentInfoWindow.close();
        currentInfoWindow = null;
      }
      setSelectedLocation(null);
    });
  };

  const navigate = useNavigate();

  return (
    <div className="mb-20">
      {/* Header with padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex-1">
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl mb-4 text-gray-900"
            >
              Project Locations
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 max-w-2xl"
            >
              Serving clients across Singapore with quality
              facade solutions for commercial and residential
              developments
            </motion.p>
          </div>

          {/* Learn More Box */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onClick={() => {
              navigate("/projects");
              window.scrollTo({ top: 0, behavior: "auto" });
            }}
            className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 shadow-lg hover:shadow-xl transition-all group flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-left">
              <div className="text-lg">Learn More</div>
              <div className="text-sm text-slate-300">
                View all projects
              </div>
            </div>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>

      {/* Map Container - Full Width */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full mb-6"
      >
        <div
          ref={mapRef}
          className="w-full h-[600px] md:h-[700px]"
        />
      </motion.div>

      {/* Location Cards with padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projectLocations.map((location) => (
            <motion.button
              key={location.id}
              onClick={() => {
                if (map) {
                  map.panTo(location.position);
                  map.setZoom(13);
                  setSelectedLocation(location);
                }
              }}
              className={`text-left p-5 rounded-xl transition-all flex flex-col h-full ${
                selectedLocation?.id === location.id
                  ? "bg-blue-600 text-white shadow-xl scale-105"
                  : "bg-white hover:bg-blue-50 shadow-md hover:shadow-lg"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start gap-3 flex-grow">
                <MapPin
                  className={`w-6 h-6 flex-shrink-0 mt-0.5 ${
                    selectedLocation?.id === location.id
                      ? "text-white"
                      : "text-blue-600"
                  }`}
                />
                <div className="flex-1 flex flex-col">
                  <h4
                    className={`font-bold mb-2 flex-shrink-0 ${
                      selectedLocation?.id === location.id
                        ? "text-white"
                        : "text-gray-900"
                    }`}
                  >
                    {location.name}
                  </h4>
                  <p
                    className={`text-sm flex-grow ${
                      selectedLocation?.id === location.id
                        ? "text-blue-100"
                        : "text-gray-600"
                    }`}
                  >
                    {location.description}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-center text-sm text-gray-500"
        >
          <p>
            Click markers or cards to view details • Drag to
            explore • Use +/- buttons to zoom
          </p>
        </motion.div>
      </div>
    </div>
  );
}