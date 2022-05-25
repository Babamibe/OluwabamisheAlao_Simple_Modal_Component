
import React from 'react';
import ReactDOM from 'react-dom/client';
import Modal from './lib';

const App = () => {
  const [isVisible, setIsVisible] = React.useState(false)
  return (
    <>
      <button onClick={() => setIsVisible(true)}>Open Modal</button>
      <Modal 
      isVisible={isVisible} 
      setIsVisible={setIsVisible}
      >
        <p>Employee saved!</p>
      </Modal>
    </>
    
  )
  
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

