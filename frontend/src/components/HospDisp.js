import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import HospCards from "./HospCards";
import { Map, CircleMarker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import data from "./hospitals";

export default (props) => (
  <div>
    <Grid container>
      <Grid item xs={6}>
        <HospCards />
      </Grid>
      <Grid item xs={6}>
        <Map
          style={{
            height: "100%",
            width: "100%",
            marginTop: 15,
            marginLeft: 10,
          }}
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
    </Grid>
  </div>
);
