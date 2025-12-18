import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentList from "./components/StudentList";
import EditStudent from "./components/EditStudent";
import AddStudent from "./components/AddStudent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/edit/:rollno" element={<EditStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
