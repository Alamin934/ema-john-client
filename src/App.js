import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Shop from './components/Shop/Shop';
import AuthProvider from './components/context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Shipping from './components/Shipping/Shipping';
import Orders from './components/Orders/Orders';



function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/orderReview' element={<OrderReview />} />

          <Route path='/inventory' element={
            <PrivateRoute>
              <Inventory></Inventory>
            </PrivateRoute>
          } />
          <Route path='/shipping' element={
            <PrivateRoute>
              <Shipping></Shipping>
            </PrivateRoute>
          } />
          <Route path='/placeOrder' element={
            <PrivateRoute>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
          } />
          <Route path='/orders' element={
            <PrivateRoute>
              <Orders></Orders>
            </PrivateRoute>
          } />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
