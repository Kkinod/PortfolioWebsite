import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Preloader from './components/pages/Preloader/Preloader';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Preloader />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
