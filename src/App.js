import "./index.css";
import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

function App() {
  const Places = data.map(item => {
      return (
          < Card key={item.id} item={item} />
      )
  })

  return (
    <div className='main--container'>
      <Header />
      <div className='main--body'>
        <div className='main--inside'>{Places}</div>
      </div>
    </div>
  );
}

export default App;
