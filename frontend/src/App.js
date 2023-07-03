import Home from "./pages/Home";
import TeacherProfile from "./pages/TeacherProfile";
import ProjectLibrary from "./pages/ProjectLibrary";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/projectlibrary" element={<ProjectLibrary />} />
        <Route path="/teacherprofile" element={<TeacherProfile />} />
      </Routes>
    </div>
  );
}

export default App;
