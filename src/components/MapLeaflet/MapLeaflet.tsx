import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./MapLeaflet.css";

const MapLeaflet = () => {
  return (
    <MapContainer center={[50, 15]} zoom={3} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>A pretty CSS3 popup. Easily customizable.</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapLeaflet;
