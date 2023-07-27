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
    const regionData = {
      'United States': {
        currency: 'USD',
        speedUnit: 'mph',
        distanceUnit: 'miles',
        volumeUnit: 'gallons',
        timezone: 'UTC-5 to UTC-10',
      },
      India: {
        currency: 'INR',
        speedUnit: 'kmph',
        distanceUnit: 'kilometers',
        volumeUnit: 'liters',
        timezone: 'UTC+5:30',
      },
      'United Kingdom': {
        currency: 'GBP',
        speedUnit: 'mph',
        distanceUnit: 'miles',
        volumeUnit: 'liters',
        timezone: 'UTC+0 to UTC+1',
      },
    };

 
    const selectedRegion = regionInfo;

   
    if (selectedRegion && regionData[selectedRegion]) {
      dispatch(setRegionInfo(regionData[selectedRegion]));
    }
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
