import React from "react";
import Grid from "@material-ui/core/Grid";
import QuarantineCards from "./QuarantineCards";
import { Map, CircleMarker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import data from "./hospitals";

export default (props) => (
  <div>
    <Grid container>
      <Grid item xs={12}>
        <Map
          style={{ height: "480px", width: "100%" }}
          zoom={14}
          center={[18.5204, 73.8567]}
        >
          <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {data.city.map((city) => {
            return (
              <CircleMarker
                center={[city["coordinates"][1], city["coordinates"][0]]}
              />
            );
          })}
        </Map>
      </Grid>

      <Grid item xs={6}>
        <QuarantineCards />
      </Grid>
    </Grid>
  </div>
);
