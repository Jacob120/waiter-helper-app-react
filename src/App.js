import Header from './components/views/Header';
import Footer from './components/views/Footer';
import Container from 'react-bootstrap/Container';
import { Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  return (
  <main>
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer />
    </Container>
  </main>
  );
}

export default App;
