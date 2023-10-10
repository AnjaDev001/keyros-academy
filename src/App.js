import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicRoute from './page/public/PublicRoute';
import AdminRouter from './page/admin/AdminRouter';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/*' element={<PublicRoute/>}/>
          <Route path='/admin/*' element={<AdminRouter/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
