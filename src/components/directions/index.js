import React from 'react'
import MapViewDirections from 'react-native-maps-directions'

const Directions = ({destination,origin, onReady}) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyC2E_1QPwbcMjsUET5cAoPTEdXabXnefFw"
    strokeWidth={3}
    strokeColor="#eb001b"
  />
);

export default Directions