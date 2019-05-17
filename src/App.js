import React from 'react';
import './App.css';
import Parent from './components/parent';
import Child from './components/child';
import InlineStyles from './components/inline-styles';
import InlineStylesComputedPropertyNames from './components/inline-styles-computed-property-names';
import CSSModules from './components/css-module';
import StyledComponents from './components/styled-components';

// TODO styled-component
// TODO MUI theme
// TODO create 2 MUI themes at root
function App() {
  return (
    <Parent className='card'>
      <div className='card'>
        <Child isChild />
      </div>
      <div className='card'>
        <InlineStyles withBorder />
      </div>
      <div className='card' >
        <InlineStylesComputedPropertyNames />
      </div>
      <div className='card'>
        <InlineStylesComputedPropertyNames lightGrey />
      </div>
      <div className='card'>
        <CSSModules />
      </div>
      <div className='card'>
        <StyledComponents isRed />
      </div>
    </Parent>
  );
}

export default App;
