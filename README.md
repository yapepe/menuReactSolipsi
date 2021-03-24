# Hamburger.js
Menu tipo hamburger con desplegable vertical izquierdo
## Uso
Hamburger.js recibe un array de compnentes HTML o JSX
``` js 
import Hamburger from './components/Hamburger/Hamburger'

function App() {
  return (
    <div className="app">
      <Hamburger
        links = {[ 
          <a href='/'>1</a>,
          <a href='/'>2</a>,
          <a href='/'>3</a>
        ]}
      />
    </div>
  )
}

export default App
```