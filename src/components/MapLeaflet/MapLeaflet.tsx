import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { IPlace } from "../../types/places.types";
import "./MapLeaflet.css";

interface Props {
  places: IPlace[];
}

const MapLeaflet = ({ places }: Props) => {
  return (
    <MapContainer center={[50, 15]} zoom={3} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {places.map((place: IPlace, index) => (
        <Marker key={index} position={[41.3874, 2.1686]}>
          <Popup>A pretty CSS3 popup. Easily customizable.</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapLeaflet;
