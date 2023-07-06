import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TeacherProfile from "./pages/TeacherProfile";
import ProjectLibrary from "./pages/ProjectLibrary";
import StudentProfileViewer from "./pages/StudentProfileViewer";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/projectlibrary" element={<ProjectLibrary />} />

        <Route path="/student/">
          <Route path=":id/*" element={<StudentProfileViewer />} />
        </Route>

        <Route path="/teacher/teacherprofile" element={<TeacherProfile />} />
      </Routes>
    </div >
  );
}

export default App;
