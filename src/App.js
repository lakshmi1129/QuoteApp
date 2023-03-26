import './App.css';
import Quote from './Components/Quote';
import Header from './Components/Header';
import {Route, Routes} from 'react-router-dom';
import Bookmark from './Components/Bookmark';



function App() {
  return (
    <div className="App">
      <header className="App-header">
   <Header/>
   <Routes>
      <Route path='/' element={<Quote/>} />
      <Route path='/bookmark' element={<Bookmark/>} />

      </Routes>

      </header>
    </div>
  );
}

export default App;
