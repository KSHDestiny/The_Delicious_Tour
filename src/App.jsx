import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
