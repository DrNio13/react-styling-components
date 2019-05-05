import React from 'react';
import './App.css';
import Parent from './components/parent';
import Child from './components/child';
import InlineStyles from './components/inline-styles';
import InlineStylesComputedPropertyNames from './components/inline-styles-computed-property-names';
import CSSModules from './components/css-module';

function App() {
  return (
    <Parent>
      <Child isChild></Child>
      <InlineStyles withBorder />
      <InlineStylesComputedPropertyNames />
      <InlineStylesComputedPropertyNames lightGrey />
      <CSSModules />
    </Parent>
  );
}

export default App;
