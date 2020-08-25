import { useState } from 'react';
import { mapConstants } from '../../constants/maps';

export function useMap(location) {
  const initialDeltas = mapConstants.mapDeltas;

  const initialRegion = {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
    ...initialDeltas,
  };

  const [deltas, setDeltas] = useState(initialDeltas);
  const [region, setRegion] = useState(initialRegion);

  const findMe = () => {
    setRegion(initialRegion);
    setDeltas(initialDeltas);
  };
  return { deltas, region, setRegion, findMe };
}
