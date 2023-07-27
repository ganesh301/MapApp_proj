import React from 'react';
import { Card } from 'antd';

const RegionInfoCard = ({ regionInfo }) => {
  return (
    <Card title="Region Info" style={{ width: 300 }}>
      <p>{regionInfo}</p>
    </Card>
  );
};

export default RegionInfoCard;
