import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CreateNotice from './pages/CreateNotice.jsx';
import EditNotice from './pages/EditNotice.jsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/create" element={<CreateNotice />} />
        <Route path="/edit/:id" element={<EditNotice />} />
      </Routes>
    </Router>
  );
}

export default App;
