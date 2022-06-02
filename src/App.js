import Header from './components/views/Header';
import Footer from './components/views/Footer';
import NotFound from './components/pages/NotFound';
import TableEdit from './components/pages/TableEdit';
import Container from 'react-bootstrap/Container';
import { Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from './redux/tablesRedux';
import { fetchStatus } from './redux/tablesStatusRedux';

function App() {

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchData()), [dispatch] )
  useEffect(() => dispatch(fetchStatus()), [dispatch] )

  return (
  <main>
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/edit/:id' element={<TableEdit />} />
        <Route
              path="*"
              element={<NotFound />}
            />
      </Routes>
      <Footer />
    </Container>
  </main>
  );
}

export default App;
