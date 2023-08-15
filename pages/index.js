import { useState } from "react";

function Home() {
     const [show, setShow] = useState(false);

     return (
          <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
               <h1>Olá Tayane, gostaria de saber o segredo?</h1>
               <button onClick={() => setShow(!show)}>click para descobrir</button>
               {show && (
                    <>
                    <h1>Você descobriu o jhon lombrado, parabéns!</h1>
                    <img style={{width: '100%', height: 'auto'}} src="jhon-lombrado.jpeg" />
                    </>
               )}
          </div>
     )
}

export default Home;