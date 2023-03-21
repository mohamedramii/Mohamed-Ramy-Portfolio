import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection='geoAzimuthalEqualArea'
      projectionConfig={{
        rotate: [-5.0, -55.0, 0],
        center: [25, -25],
        scale: 900,
      }}
      style={{ width: "100%", height: "100%" }}>
      <Geographies
        geography='/features.json'
        fill='#2c065d'
        stroke='#FFFFFF'
        strokeWidth={0.5}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[28.3522, 30.8566]}
        dx={-20}
        dy={-30}
        connectorProps={{
          stroke: "#fff",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
        >
        <text fontWeight="bold" x='-8' textAnchor='end' alignmentBaseline='middle' fill='#fff'>
          {"Egypt , Alexandria"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
