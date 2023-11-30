import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './component/Header';
import { Toaster } from 'react-hot-toast';
import Payment from './pages/Payment';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <div className="App">
        <Header />
        <Toaster position="bottom-center"
          reverseOrder={false} />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/payment' element={<Payment />}></Route>
        </Routes>
      </div>
    </Container>
  );
}

export default App;
