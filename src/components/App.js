import React, { Suspense, lazy } from 'react';
import { Header, Nav, Footer } from './components';
import { Switch, Route } from 'react-router-dom'

const HomePage = lazy(() => import('./pages/Home'))
const Detail = lazy(() => import('./pages/DetailProduct'))
function App() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Header />
      <Nav />
      <Switch>
        <Route path='/' component={HomePage} />
        {/*<Route path='/' component={Detail}/>*/}
      </Switch>
      <Footer/>
    </Suspense>
  );
}

export default App;
