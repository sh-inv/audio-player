import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Record from './pages/record';
import Play from './pages/play';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<Record />} />
          <Route path='/play' element={<Play />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
