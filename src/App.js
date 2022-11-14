import './App.css';
import Eclipse from './Images/Eclipse.png'
import Fleche from './Images/icon.png'
import { useState } from 'react';
import Allianz from './Images/allianz.png';
import Arcelor from './Images/arcelor.png';
import CA from './Images/CreditAgricol.png';
import Articles from './Assets/Articles';
import EmiliePauline from './Images/Emilie&Pauline.png';
import Capza from './Images/Capza.jpg';


function App() {
  const [open,setOpen]=useState(true);//to set a className each time the user clicked on the accordion

  return (
    <>
    {/* Accordions ------- */}
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

    <section className='accordion two'>
      <h1 className='numero'>2</h1>
    </section>

    <section className='accordion three'>
      <h1 className='numero'>3</h1>
    </section>

    <section className='accordion four'>
      <h1 className='numero'>4</h1>
    </section>

    {/* Partners ----- */}

    <section className="partners">
    <img src={CA} alt='Credit Agricole' className='' />
    <img src={Allianz} alt='Allianz' className='' />
    <img src={Arcelor} alt='Arcelor' className='' />
    <img src={CA} alt='Credit Agricole' className='No-phone' />
    <img src={Allianz} alt='Allianz' className='No-phone' />
    <img src={Arcelor} alt='Arcelor' className='No-phone' />
    </section>

    {/* Articles */}
    <h1 className='info'>Nos dernières publications</h1>
    <section className="articles">
    <Articles image={EmiliePauline} title={"Rencontre avec Pauline, Bintia et Emilie"} date={'15 septembre 2021'}/>
    <Articles title={`Cyber Stress : une grande étude sur le stress des Responsables Cyber`} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus orci a quam venenatis laoreet non eu massa.'} date={'15 septembre 2021'}/>
    <Articles image={Capza} title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} desc={"Une opération inédite qui ouvre la voie à un nouveau modèle d’entreprise à impact sociétal..."} date={'17 juin 2021'}/>
    </section>
  
    </>
    
  );
}

export default App;
