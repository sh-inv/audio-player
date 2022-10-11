import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Main from './pages/Main';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
