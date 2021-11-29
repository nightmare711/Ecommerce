import React, { Suspense, lazy } from 'react';
import { Header, Nav } from './components';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const HomePage = lazy(() => import('./pages/Home'))
const Detail = lazy(() => import('./pages/DetailProduct'))
const Blog = lazy(() => import('./pages/Blog'))
const FirstBlog = lazy(() => import('./pages/Blog/FisrtBlog'))
const SecondBlog = lazy(() => import('./pages/Blog/SecondBlog'))
const ThirdBlog = lazy(() => import('./pages/Blog/ThirdBlog'))
const Checkout = lazy(() => import('./pages/Checkout'))
const Products = lazy(() => import('./pages/Products'))

const Overlay1 = lazy(() => import('./pages/Overlay/Overlay1')) 
const Overlay2 = lazy(() => import('./pages/Overlay/Overlay2')) 
const SmallCart = lazy(() => import('./pages/Overlay/CartOverlay')) 

const Cart = lazy(() => import('./pages/Cart'))

function App() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Header />
      <Nav />
      {/* <Overlay1 /> */}
      <Switch>
        {/* <Route path='/' component={HomePage} /> */}
        {/*<Route path='/' component={Detail}/>*/}
        {/* <Route path='/' component={SmallCart}/> */}
        {/* <Route path='/' component={Cart} /> */}
        <Route path='/blog/1' component={Blog}/>
        {/* <Route path='/blog/1' component={FirstBlog}/>
        <Route path='/blog/1' component={SecondBlog}/>
        <Route path='/blog/1' component={ThirdBlog}/> */}
        <Route path='/' component={Checkout}/>

        {/* <Route path='/products' exact component={Products} />
        <Route path={'/products/:id'} exact component={Detail} />
        <Route path={'/products/type/:type'} exact component={Products} />
        <Route path='/' component={HomePage} />
        <Route path='/' component={Cart} /> */}
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
    </Suspense>
  );
}

export default App;
