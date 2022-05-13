import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserList from './routes/UserList';
import UserDetails from './routes/UserDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="user_details" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
