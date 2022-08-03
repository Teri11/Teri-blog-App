import { useState } from "react";


const Home = () => {
 
 let [name, setName] = useState('Teri');
 let [age, setAge] = useState(25);


  let handClick = () => {
    setName('Augustine')
    setAge(30);

  }

  return ( 
    <div className="home">
      <h2>Homepage</h2>
      <p>{name} is {age} years old.</p>
      <button onClick={handClick}>Click Me</button>
     </div>
   );
}
 
export default Home;