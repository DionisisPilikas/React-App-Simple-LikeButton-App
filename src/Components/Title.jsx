import React from 'react'; // Are we using HTML inside our JS? If yes, then we need to import React
import './Title.css'; // Simple CSS import from a local file

// Create a Component: <Title></Title>
function Title(){
  return (
    <p className="title">
      React simple like App
    </p>
  );
}
// Need to export our Component, in order for other files to import it
export default Title;