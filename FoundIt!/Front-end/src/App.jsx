import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CreateNotice from './pages/CreateNotice.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/create" element={<CreateNotice />} />
      </Routes>
    </Router>
  );
}

export default App;
