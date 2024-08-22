import React from 'react';
import { Outlet } from 'react-router-dom';

const SimpleLayout = () => {
  return (
    <div>
      <Outlet /> {/* Render child routes here */}
    </div>
  );
};

export default SimpleLayout;