import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import GlobalStyle from './GlobalStyle';
import Play from './pages/play';
import Record from './pages/record';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Nav />
        <Routes>
          <Route path='/play' element={<Play />} />
          <Route path='/record' element={<Record />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
