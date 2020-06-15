import React from 'react'; // Are we using HTML inside our JS? If yes, then we need to import React

// we have 2 components
import Title from './Components/Title';
import LikeButton from './Components/Like';

import './App.css';

function App() {

  return (
    <div className="App">
      {/*create Title element*/}
      <Title></Title>

      {/*create LikeButton element*/}
      <LikeButton likes="0"  ></LikeButton>  {/*initialize number of likes to 0*/}
    </div>
  );
}
export default App;
