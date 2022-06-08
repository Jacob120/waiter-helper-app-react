import Header from './components/views/Header';
import Footer from './components/views/Footer';
import NotFound from './components/pages/NotFound';
import EditTableInfo from './components/features/EditTableInfo';
import AddTableForm from './components/features/AddTableForm';
import Container from 'react-bootstrap/Container';
import { Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from './redux/tablesRedux';
import { fetchStatus } from './redux/tablesStatusRedux';
import { useSelector } from 'react-redux';
function App() {

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchData()), [dispatch] );
  useEffect(() => dispatch(fetchStatus()), [dispatch] );
  const test = useSelector(state => state.tables)

  console.log(test)


  return (
  <main>
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/tables/:tableId' element={<EditTableInfo />} />
        <Route path='/tables/add' element={<AddTableForm />} />
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
