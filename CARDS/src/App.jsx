import 'bulma/css/bulma.css'
import { useState } from 'react'
import './App.css'
import MyProject from './MyProject'
import Image1 from './Images/1.jpg';
import Image2 from './Images/2.jpg';
import Image3 from './Images/3.jpg';
import Image4 from './Images/4.jpg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section class="hero is-link">
      <div class="hero-body">
        <p class="title">
          Projelerim
        </p>
      </div>
    </section>
    <div className='container'>
      <section className='section'> 
      <div className='columns'>
        <div className='column'>
        <MyProject image={Image1} title="Connected Architecture" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus quia sapiente quisquam id quidem odio porro ipsam reiciendis asperiores consequuntur, laborum, accusantium, totam tenetur. Commodi, dolor omnis! A, corrupti obcaecati."/>
        </div>
        <div className='column'>
        <MyProject image={Image2} title="E-Shopper" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus quia sapiente quisquam id quidem odio porro ipsam reiciendis asperiores consequuntur, laborum, accusantium, totam tenetur. Commodi, dolor omnis! A, corrupti obcaecati."/>
        </div>
        <div className='column'>
        <MyProject image={Image3} title="My Project" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus quia sapiente quisquam id quidem odio porro ipsam reiciendis asperiores consequuntur, laborum, accusantium, totam tenetur. Commodi, dolor omnis! A, corrupti obcaecati."/>
        </div>
        <div className='column'>
        <MyProject image={Image4} title="Students Automation" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus quia sapiente quisquam id quidem odio porro ipsam reiciendis asperiores consequuntur, laborum, accusantium, totam tenetur. Commodi, dolor omnis! A, corrupti obcaecati."/>
        </div>
      </div>
      </section>
      
    </div>
    </>
    
  )
}

export default App
