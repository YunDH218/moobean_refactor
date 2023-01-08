import './App.css';
import { Route, Routes } from '../node_modules/react-router-dom/dist/index';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ReviewPage from './pages/ReviewPage';
import ReviewWritePage from './pages/ReviewWritePage';
import GenrePage from './pages/GenrePage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/genre" element={<GenrePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/writereview" element={<ReviewWritePage />} />
      <Route path=":reviewId" element={<ReviewPage />} />
    </Routes>
  );
}

export default App;
