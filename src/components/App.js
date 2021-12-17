import React, { Suspense, lazy } from 'react';

import { Header, Nav, Footer } from './components';

import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import { CartOverlay } from './components/CartOverlay'
import 'react-toastify/dist/ReactToastify.css'

const HomePage = lazy(() => import('./pages/Home'))
const Detail = lazy(() => import('./pages/DetailProduct'))
const Blog = lazy(() => import('./pages/Blog'))
const FirstBlog = lazy(() => import('./pages/Blog/FisrtBlog'))
const SecondBlog = lazy(() => import('./pages/Blog/SecondBlog'))
const ThirdBlog = lazy(() => import('./pages/Blog/ThirdBlog'))
const Checkout = lazy(() => import('./pages/Checkout'))
const Products = lazy(() => import('./pages/Products'))

const Cart = lazy(() => import('./pages/Cart'))

function App() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Header />
      <Nav />
      <CartOverlay />
      {/* <Overlay1 /> */}
      <Switch> 
        <Route path='/blog/1' exact component={FirstBlog}/>
        <Route path='/blog/2' exact component={SecondBlog}/>
        <Route path='/blog/3' exact component={ThirdBlog}/>       
        <Route path='/products' exact component={Products} />
        <Route path={'/products/:id'} exact component={Detail} />
        <Route path={'/products/type/:type'} exact component={Products} />
        <Route path='/cart' exact component={Cart} />
        <Route path='/checkout' exact component={Checkout} />
        <Route path='/' component={HomePage} /> 
        {/* <Route path='/' exact component={Blog}/> */}
     </Switch>
     <ToastContainer
				position='bottom-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
       <Footer/>
    </Suspense>
  );
}

export default App;
