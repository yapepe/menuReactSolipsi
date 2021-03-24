import './assets/Hamburger.css'
import { useState } from 'react'

export default function Hamburger( { links }) {
    const [mostrarMenu , setMostrarMenu] = useState(false)

   

  return (
    <div className="Hamburger">
        {(!mostrarMenu)
        ? <div 
            className="Hamburger__boton" 
            onClick={ () => setMostrarMenu(true)}
          >=</div>
        : <div className="Hamburger__menu">
            <div className="Hamburger__menu__lista">
                <div 
                    className="Hamburger__menu__lista__tache"
                    onClick={ () => setMostrarMenu(false)}
                >x</div>
                { (Array.isArray(links))
                    ? links.map( link => {
                        return(
                            <div className='Hamburger__menu__lista__links'>
                                { link }
                            </div>
                        )
                    })
                : console.log('CRITICAL ERROR: la entrada de hamburger no es un array')    
                }
            </div>
            <div className="Hamburger__menu__cerrar"
            onClick={ () => setMostrarMenu(false)}
            > </div>
          </div>
        }
    </div>
  )
}
