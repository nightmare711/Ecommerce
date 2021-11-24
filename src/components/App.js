import React, { Suspense, lazy } from 'react';
import { Header, Nav } from './components';
import { Switch, Route } from 'react-router-dom'

const HomePage = lazy(() => import('./pages/Home'))
const Detail = lazy(() => import('./pages/DetailProduct'))
const Checkout = lazy(() => import('./pages/Checkout'))
function App() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Header />
      <Nav />
      <Switch>
        {/* <Route path='/' component={HomePage} /> */}
        <Route path='/' component={Checkout}/>
      </Switch>
    </Suspense>
  );
}

export default App;
