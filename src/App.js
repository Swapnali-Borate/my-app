import { Routes, Route, } from 'react-router-dom';
import './App.css';
import Mainfile from './Component/Mainfile';
import Mealinfo from './Component/Mealinfo';
import NewsApp from './Component/NewsApp'
import MyApp from './Component/MyApp';
import Game from './Component/Game';
import Calculator from './Component/Calculator';
import CreateStudent from './Component/CreateStudent';
import StudentTable from './Component/StudentTable';
import EditStudent from './Component/EditStudent';
import ViewDetails from './Component/ViewDetails';
import Pagination from './Component/Pagination';
import Login from './Component/Login';


function App() {
  return (
    <div>

      {/* @@@@@@@ FOOD RECIPE APP  COM are Mainfile, Mealinfo and Mealcards */}
      {/* <Routes>
        <Route path='/' element={ <Mainfile /> } />
        <Route path='/:mealid' element={ <Mealinfo /> }/>
      </Routes> */}

      {/* @@@@@@  NEWSAPP Project com are NewsApp & Cards */}
      <NewsApp />

      {/* @@@@@ This is MyApp project */}
      {/* <MyApp /> */}

      {/* <Game /> */}

      {/* <Calculator /> */}


        {/* This is CRUD OPERATION project */}
      {/* <Routes>
        <Route path='/' element={<StudentTable />}></Route>
        <Route path='/student/create' element={<CreateStudent />}></Route>
        <Route path='/student/edit/:studentid' element={<EditStudent />}></Route>
        <Route path='/student/view/:studentid' element={<ViewDetails />}></Route>
      </Routes> */}


        {/* <Pagination /> */}
        {/* <Login /> */}
    </div>
  );
}

export default App;
