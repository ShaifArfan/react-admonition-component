import React from 'react'
import Admonition from './components/Admonition'
import {FiAlertCircle, FiAlertTriangle} from 'react-icons/fi'
import styled from 'styled-components'

const AppStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  .custom{
    background: royalblue;
    color: white;
  }
`;

function App() {
  return (
    <div className="container">
      <AppStyles>
        <Admonition className={'custom'} type="info" icon={<FiAlertCircle />} title="this is info alert">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus natus ad ab culpa ea accusantium, eius, sunt voluptate eos iste sed minima. Architecto, tenetur. Voluptatum perspiciatis officia molestias ut consequatur.</p>
        </Admonition>
        <Admonition  type='warning' title="This is warning " icon={<FiAlertTriangle></FiAlertTriangle>}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, consequatur.</p>
        </Admonition>
        <Admonition type='error' title="This is Error " icon={<FiAlertTriangle></FiAlertTriangle>}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, consequatur.</p>
        </Admonition>
      </AppStyles>
    </div>
  )
}

export default App
