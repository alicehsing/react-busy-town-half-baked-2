import React from 'react';
import Vehicle from './Vehicle';

export default function VehicleList(props) {
  return (
    <div className="traffic">
      {/* this component takes in a prop called traffic, which is an array of vehicle strings */}
      {/* map through the traffic array in props */}
      {/* for each item render a Vehicle component. Pass the vehicle string as a prop called vehicle to the Vehicle component.  */}
      {props.traffic.map((vehicle, i) => 
        <Vehicle key={vehicle + i} vehicle={vehicle} />
      )}
    </div>
  );
}
