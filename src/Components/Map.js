// AIzaSyAb3PzN3_KiTTlGkbrbIKEOSwlugzjKj-8 5b2ebd48f1f138e
"use client";

import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";
import { Container } from "@mui/material";

export default function Intro() {
  const position = { lat: 1.3417069351637054, lng: 103.87310926127779 };

  return (
    <Container maxWidth="xl">
    <APIProvider apiKey="AIzaSyAb3PzN3_KiTTlGkbrbIKEOSwlugzjKj-8">
      <div style={{ height: "60vh", width: "100%" }}>
        <Map zoom={16} center={position} mapId="5b2ebd48f1f138e">
          <AdvancedMarker position={position}>
            <Pin
              background={"red"}
              glyphColor={"#8d0000"}
            />
          </AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
    </Container>
  );
}