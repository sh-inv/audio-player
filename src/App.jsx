import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import GlobalStyle from './GlobalStyle';
import PlayScreen from './pages/playScreen';
import RecordScreen from './pages/RecordScreen';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Nav />
        <Routes>
          <Route path='/play' element={<PlayScreen />} />
          <Route path='/record' element={<RecordScreen />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
