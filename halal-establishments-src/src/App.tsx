import React from 'react';

function App() {
  // Example coordinates; replace with actual logic to get user's location
  const userLocation = { latitude: 0, longitude: 0 }; // Update this with actual location fetching logic

  return (
    <div>
      {/* Your existing app content */}
      <footer>
        <p>User Location: Latitude: {userLocation.latitude}, Longitude: {userLocation.longitude}</p>
      </footer>
    </div>
  );
}

export default App;