import './App.css';
import Eclipse from './Images/Eclipse.png'
import Fleche from './Images/icon.png'
import { useState } from 'react';

function App() {
  const [open,setOpen]=useState(true);//to set a className each time the user clicked on the accordion

  return (
    <section className={open?"accordion":"accordion-open"}>
      <div className="first-accordion">
        <h1 className={open?"title":"none"}>Conseil</h1>
        <p className={open?"desc":"none"}>Vous accompagner dans la démarche sécurité</p>
        <h6 className={open?"notion":"none"}>La maitrise des risques numériques passe par la mise œuvre d’une démarche décurité à la fois organisée et formalisée.</h6>
        <h1 className='numero'>1</h1>
      </div>
      <img src={Eclipse} alt='Eclipse'className={open?'background-eclipse':'none'}/>
      <img src={Fleche} alt='fleche' className={open?'btn-fleche':'btn-fleche-open'} onClick={()=>{setOpen(!open)}}/>
    </section>
  );
}

export default App;
