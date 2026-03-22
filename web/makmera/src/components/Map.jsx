import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const locations = [
  {
    name: "Makmera – Skopje (Head Office)",
    position: [41.9875895, 21.4356011],
    address: "Bulevar Makedonija 16a, Skopje",
  },
  {
    name: "Makmera – Skopje (Warehouse & Service)",
    position: [41.95915, 21.4901856],
    address: "Skopje – Warehouse & Service Center",
  },
  {
    name: "Makmera – Bitola",
    position: [41.0323966, 21.3186362],
    address: "Bitola, Boulevard 1st of May 124",
  },
  {
    name: "Makmera – Strumica",
    position: [41.4428795, 22.6463706],
    address: "Kliment Ohridski St. 104, Strumica",
  },
];

function Map() {
  return (
    <MapContainer
      center={[41.65, 21.6]} // roughly between all locations
      zoom={8}
      scrollWheelZoom={false}
      style={{ height: "420px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {locations.map((loc, index) => (
        <Marker key={index} position={loc.position}>
          <Popup>
            <strong>{loc.name}</strong><br />
            {loc.address}<br />
            <a
              href={`https://www.google.com/maps?q=${loc.position[0]},${loc.position[1]}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
            </a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;
