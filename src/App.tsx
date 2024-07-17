import './App.css';
import Header from './Components/Header/Header.tsx';
import {Route, Routes} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage.tsx';

const App = () => {

  return (
    <>
      <Header/>
      <Routes>
        <Route path={'/'} element={<HomePage/>}/>
      </Routes>
    </>
  );
};

export default App;
