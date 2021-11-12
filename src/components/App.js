import React, { Suspense, lazy } from 'react';
import { Header, Nav } from './components';
import { Switch, Route } from 'react-router-dom'

const HomePage = lazy(() => import('./pages/Home'))
function App() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Header />
      <Nav />
      <Switch>
        <Route path='/' component={HomePage} />
      </Switch>
    </Suspense>
  );
}

export default App;
