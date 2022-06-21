import React  from 'react';
import TinderCards from './TinderCards';
import './App.css';
import SwipeButtons from './SwipeButtons';
import Header from './Header';
function App() {
  return (
    <div className="app">
    
     {/*tinderheader*/}
     <Header />
      {/*tindercard */}
      <TinderCards />
      {/*swipebutton */}
   <SwipeButtons />
</div>
  );
}

export default App;
