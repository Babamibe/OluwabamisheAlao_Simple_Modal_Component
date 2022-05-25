# React modal component

A simple modal component that you can open and close on click.

## How to download
use [npm](https://npmjs.com/package/@babamibe/modal-component-library)

Run: 
`npm install @babamibe/modal-component-library`

## How to use

Example of use:

```js
import React from 'react';
import Modal from 'modal-component-library';

const Component = () => {
  const [isVisible, setIsVisible] = React.useState(false)
  return (
    <>
      <button onClick={() => setIsVisible(true)}>Open Modal</button>
      <Modal 
      isVisible={isVisible} 
      setIsVisible={setIsVisible}
      >
        <p>Enter modal children here</p>
      </Modal>
    </>
    
  )
  
};

export default Component;
```

Both props:
- `isVisible` and `setIsVisible` are required in order to know the current state and to update it.