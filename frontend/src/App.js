import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ReduxContext from "./pages/ReduxContext";
import Register from "./pages/Register";
import { Toaster } from 'react-hot-toast';
import Notes from "./pages/Notes";
import EditNote from "./pages/EditNote";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Toaster />
        <Navbar />
        <Routes>
          <Route key="home" path="/" element={<Home />} />
          <Route key="notes" path="/notes" element={<Notes />} />
          <Route key="editNote" path="/note/:noteId/:edit" element={<EditNote />} />
          <Route key="reduxContext" path="/redux-context" element={<ReduxContext />} />
          <Route key="login" path="/login" element={<Login />} />
          <Route key="register" path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
