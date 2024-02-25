import './App.css';
import Main from './views/Index';
import Add from './views/Add';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App container">
      <h1 >Project Manager</h1>

      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/projects/new" element={<Add />} />
        </Routes>
     </Router>
    </div>
  );
}

export default App;