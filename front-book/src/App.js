import ReactDOM from 'react-dom';
import './App.css';
import Login from './auth/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import SearchBook from './books/SearchBook';
import BookForm from './books/BookForm';
import { createTheme, Fade, ThemeProvider } from '@mui/material';
import { ApiProvider } from './provider/ApiProvider';
import AppThemeProvider from './provider/AppThemeProvider';

export default function App() {




  return (
    <AppThemeProvider>
      <ApiProvider>
        <BrowserRouter>

          <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/books/search" element={<SearchBook />} ></Route>
            <Route path="/book/add" element={<BookForm />}></Route>

            <Route path="/" element={<Home />} />
          </Routes>

        </BrowserRouter>
      </ApiProvider>
    </AppThemeProvider>

  );
}

ReactDOM.render(<App />, document.getElementById("root"));
