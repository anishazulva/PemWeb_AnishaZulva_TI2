//Import Libraries
import React from 'react'
import Header from './Header';
import Footer from './Footer.jsx';
import Images from './images.jsx';
import List from './List.jsx';
//Create Component

const App = () => {
  return (
    <div>
      <h1>  Hello React </h1>
      <p>
      My Name is anisha </p>
      <Images/>
      <Header />
      <List/>
      <Header />
      <Header />

      <Footer/>
    </div>
  );
}
//Export Component
export default App;