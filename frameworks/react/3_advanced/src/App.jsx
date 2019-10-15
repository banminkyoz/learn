import React, { Fragment } from 'react';
import './App.css';

// Components
import ContextExample from './components/1.context';
import ErrorBoundaryExample from './components/2.error-boundaries';
import { RefsExample, RefsExample2 } from './components/3.refs';

function App() {
  return (
    <Fragment>
      <h3>1. Context</h3>
      <ContextExample />
      <hr />

      <h3>2. Error Boundary</h3>
      <ErrorBoundaryExample />
      <hr />

      <h3>3. Refs Example</h3>
      <RefsExample />
      <RefsExample2 />
      <hr />
    </Fragment>
  );
}

export default App;
