// MapComponent.js
import './map.css';
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Button, Select } from 'antd';
import RegionInfoCard from './RegionInfoCard';
import { useDispatch, useSelector } from 'react-redux';
import { setRegionInfo, setMapCenter } from '../actions/mapActions';


const { Option } = Select;

const MapComponent = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const dispatch = useDispatch();

  // Access the region info and map center from the Redux store
  const regionInfo = useSelector((state) => state.map.regionInfo);
  const mapCenter = useSelector((state) => state.map.mapCenter);

  const handleRegionSelect = (value) => {
    setSelectedRegion(value);
  };

  const handleLoadButtonClick = () => {
   
    const regionData = {
      UnitedStates: { coordinates: [37.0902, -95.7129] }, // Example coordinates for United States
      India: { coordinates: [20.5937, 78.9629] }, // Example coordinates for India
      UnitedKingdom: { coordinates: [51.509865, -0.118092] }, // Example coordinates for UK
    };

    
    dispatch(setMapCenter(regionData[selectedRegion].coordinates));
  };

  return (
    <>
      <MapContainer center={mapCenter} zoom={2} style={{ height: '100vh', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {mapCenter && regionInfo && (
          <Marker position={mapCenter}>
            <Popup>
              Region Info: <br />
              Currency: {regionInfo.currency} <br />
              Speed Unit: {regionInfo.speedUnit} <br />
              Distance Unit: {regionInfo.distanceUnit} <br />
              Volume Unit: {regionInfo.volumeUnit} <br />
              Timezone: {regionInfo.timezone} <br />
            </Popup>
          </Marker>
        )}
      </MapContainer>
      <div className="floating-controls">
        <Select
          value={selectedRegion}
          onChange={handleRegionSelect}
          style={{ width: 200, marginRight: 10 }}
        >
          <Option value="UnitedStates">United States</Option>
          <Option value="India">India</Option>
          <Option value="UnitedKingdom">United Kingdom</Option>
        
        </Select>
        <Button type="primary" onClick={handleLoadButtonClick}>
          Load
        </Button>
        {regionInfo && <RegionInfoCard regionInfo={regionInfo} />}
      </div>
    </>
  );
};

export default MapComponent;
