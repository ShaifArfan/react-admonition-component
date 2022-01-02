import React from 'react'
import Admonition from './components/Admonition'
import {AiFillInfoCircle} from 'react-icons/ai'
import GlobalStyles from './components/GlobalStyles'

function App() {
  return (
    <div>
      <GlobalStyles />
      <div className="container">
      This is main app
      <Admonition type="info" icon={<AiFillInfoCircle />} title="this is info alert">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus natus ad ab culpa ea accusantium, eius, sunt voluptate eos iste sed minima. Architecto, tenetur. Voluptatum perspiciatis officia molestias ut consequatur.</p>
      </Admonition>
      </div>
    </div>
  )
}

export default App
