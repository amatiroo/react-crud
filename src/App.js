import './App.css';
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'
import ListUser from './components/ListUser';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';

function App() {

  
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.min.css"></link>
     <h5>React CRUD Operations</h5>
     <BrowserRouter>
     
      <nav>
        <ul>
          <li>
            <Link to="/">List Users</Link>
          </li>
          <li>
            <Link to="user/edit">Edit Users</Link>
          </li>
          <li>
            <Link to="user/create">Create Users</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route  index element={<ListUser/>}/>
        <Route path='user/:id/edit' element={<EditUser/>}/>
        <Route  path="user/create" element={<CreateUser/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
