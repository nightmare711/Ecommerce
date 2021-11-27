import React, { Suspense, lazy } from 'react';
import { Header, Nav } from './components';
import { Switch, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/Home'))
const Detail = lazy(() => import('./pages/DetailProduct'))
const Checkout = lazy(() => import('./pages/Checkout'))

const Overlay1 = lazy(() => import('./pages/Overlay/Overlay1')) 
const Overlay2 = lazy(() => import('./pages/Overlay/Overlay2')) 

const Cart = lazy(() => import('./pages/Cart'))

function App() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Header />
      <Nav />
      <Switch>
        {/* <Route path='/' component={HomePage} /> */}
        <Route path='/' component={Checkout}/>


        <Route path='/' component={HomePage} />
        {/*<Route path='/' component={Detail}/>
        {/* <Route path='/' component={Overlay1}></Route> */}
        {/* <Route path='/' component={Overlay2}></Route> */}

        {/* <Route path='/' component={HomePage} /> */}
        {/*<Route path='/' component={Detail}/>*/}
        <Route path='/' component={Cart} />
     </Switch>
    </Suspense>
  );
}

export default App;
