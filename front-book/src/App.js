import ReactDOM from 'react-dom';
import './App.css';
import Login from './auth/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import SearchBook from './books/SearchBook';
import BookForm from './books/BookForm';
import { createTheme, ThemeProvider } from '@mui/material';

export default function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#df9f00",
      },
      secondary: {
        main: ""
      }
    }
  });


  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route path="/books/search" element={<SearchBook />} ></Route>
          <Route path="/book/add" element={<BookForm />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  );
}

ReactDOM.render(<App />, document.getElementById("root"));
