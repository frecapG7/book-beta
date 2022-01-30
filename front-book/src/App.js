import ReactDOM  from 'react-dom';
import './App.css';
import Login from './auth/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import SearchBook from './books/SearchBook';

export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />

        <Route path="/books/search" element={<SearchBook />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App/>, document.getElementById("root"));
