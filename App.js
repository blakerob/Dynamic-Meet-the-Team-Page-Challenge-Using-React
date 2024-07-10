// U92725213

import React from 'react';
import Header from './Header';
import Gallery from './Gallery';
import './App.css'; // Example CSS for styling

function App() {
  // Dummy team member data (replace with actual data or fetch from API)
  const teamData = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO',
      photo: 'john.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'CTO',
      photo: 'jane.jpg',
    },
    // Add more team members as needed
  ];

  return (
    <div className="App">
      <Header />
      <Gallery teamData={teamData} />
    </div>
  );
}

export default App;
