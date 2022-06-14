import { useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { IPlace } from "../../types/places.types";
import "./MapLeaflet.css";

interface Props {
  places: IPlace[];
}

const MapLeaflet = ({ places }: Props) => {
  console.log({ places });
  const markers = useMemo(() => {
    return places.filter((place) => place.location?.coordinates.length);
  }, [places]);

  console.log("markers?", markers);
  return (
    <MapContainer center={[50, 15]} zoom={3} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {markers.map((place: IPlace, index) => {
        const [lat, lng] = place.location.coordinates as [number, number];
        return (
          <Marker key={index} position={[lat, lng]}>
            <Popup>{place.address}</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default MapLeaflet;
