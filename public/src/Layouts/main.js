import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';



function Main() {
  const location = useLocation();
  const selectedItem = getSelectedItem(location.pathname);

  return (
    <main id='main' className='main'>
        
        <Outlet /> {/* Renders nested routes */}
    </main>
  )
}

function getSelectedItem(pathname) {
  switch (pathname) {
    case '/dashboard':
      return 'Dashboard';
    case '/dashboard/settings':
      return 'Settings';
    case '/dashboard/group':
      return 'Group';
    case '/dashboard/Profile':
      return 'Profile';
    
    default:
      return 'Dashboard';
  }
}

export default Main;
