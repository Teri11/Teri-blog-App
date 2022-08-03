import { useState } from "react";


const Home = () => {
 
 let [name, setName] = useState('Teri');


  let handClick = () => {
    setName('Augustine')

  }

  return ( 
    <div className="home">
      <h2>Homepage</h2>
      <p>{name}</p>
      <button onClick={handClick}>Click Me</button>
     </div>
   );
}
 
export default Home;