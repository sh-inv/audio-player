import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import GlobalStyle from './GlobalStyle';
import Main from './pages/Main';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Nav />
        <Routes>
          <Route path='/*' element={<Main />}>
            <Route path='record' element={<Main />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
