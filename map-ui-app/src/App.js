import React from 'react';
import './App.css';
import { Layout, Button, Form, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setRegionInfo } from './actions/mapActions';
import HeaderComponent from './components/Header';
import SidebarComponent from './components/Sidebar';
import MapComponent from './components/Map';

import RegionInfoCard from './components/RegionInfoCard';
import './ftr.css';

const { Content } = Layout;

const regions = ['United States', 'India', 'United Kingdom'];

const App = () => {
  const dispatch = useDispatch();
  const regionInfo = useSelector((state) => state.map.regionInfo);

  const handleRegionSelect = (value) => {
    dispatch(setRegionInfo(value));
  };

  const handleLoadButtonClick = () => {
    // Implement your logic here to load region data and update the map.
    // Use libraries like turfjs and osmtogeojson to process the map data.
  };

  return (
    <div>
    <div className="header">
     <HeaderComponent/>
    </div>
    <div className="sidebar">
      <SidebarComponent />
    </div>
    <div className="app-container">
      <MapComponent />
      <div class="region">
        <RegionInfoCard/>
      </div>
    </div>
    
    <div className="ftr">
       <h1>footer</h1>
    </div>
  </div>
  );
};

export default App;

