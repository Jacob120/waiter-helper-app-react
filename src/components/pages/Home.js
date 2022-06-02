import TableInfo from '../features/TableInfo';
import { useSelector } from 'react-redux';
import { getAllTables } from '../../redux/tablesRedux';

const Home = () => {

  const tables = useSelector(getAllTables);
  console.log(tables)
  return (
    <div>
      <h1 className="my-5">All tables</h1>
      {tables.map((table, index) => (
        <TableInfo 
          key={index} 
          number={table.id}
          status={table.status}
          />          
      ))}
    </div>
  )
}

export default Home