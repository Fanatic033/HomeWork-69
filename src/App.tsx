import './App.css';
import Header from './Components/Header/Header.tsx';
import {Route, Routes} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage.tsx';
import ShowPage from './Pages/ShowPage/ShowPage.tsx';

const App = () => {

  return (
    <>
      <Header/>
      <Routes>
        <Route path={'/'} element={<HomePage/>}/>
        <Route path={'/shows/:id'} element={<ShowPage/>}/>
      </Routes>
    </>
  );
};

export default App;
