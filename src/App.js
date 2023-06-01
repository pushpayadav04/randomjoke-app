import React, { useState,useEffect} from "react";

const API_URL='https://api.chucknorris.io/jokes/random';


function App(){
    const [joke, setJoke]=useState('');

    
    const generateJoke=()=>{
      
        fetch(API_URL)
            .then(res=>res.json())
            .then(data=>setJoke(data.value));
   
         }

    useEffect(() => {
       generateJoke();

    }, [])


  return(
      <div class="box">
        <h2>Random jokes</h2>
        <p>{joke}</p>
        <button onClick={generateJoke}>Get new Joke!</button>
      </div>

  );
}

export default App;
