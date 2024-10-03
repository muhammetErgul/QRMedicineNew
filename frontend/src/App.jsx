import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddEditSurvey from './pages/AddEditSurvey';
import UserDashboard from './pages/UserDashboard';
import UserSurveyList from './components/UserSurveyList';
import Tanitim from './components/Tanitim';
import Layout from './pages/Layout';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import OrdersPage from './pages/OrdersPage';
import LoginPage from './pages/Login';
import HelpDesk from './components/HelpDesk';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/add-survey" element={<AddEditSurvey />} />
          <Route path="/edit-survey/:id" element={<AddEditSurvey />} />
          <Route path="/" element={<UserDashboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/anketler" element={<UserSurveyList />} />
          {/* Yeni route ekliyoruz */}
          <Route path="/anketler/:type" element={<UserSurveyList />} />
          <Route path="/tanitim" element={<Tanitim />} />
          <Route path='/helpdesk' element={<HelpDesk />} />
          <Route path="/order" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<OrdersPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;