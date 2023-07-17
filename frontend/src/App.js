import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectLibrary from "./pages/ProjectLibrary";
import StudentProfileViewer from "./pages/StudentProfileViewer";
import TeacherProfileViewer from "./pages/TeacherProfileViewer";
import ProjectEx from "./pages/Project";
// import ProfileViewer from "./pages/ProfileViewer";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/projectlibrary" element={<ProjectLibrary />} />
        <Route path="/projects" element={<ProjectEx />} />

        <Route path="/student/:id/*" element={<StudentProfileViewer />} />
        <Route path="/teacher/:id/*" element={<TeacherProfileViewer />} />

        {/* <Route path="/student/">
          <Route path=":id/*" element={<StudentProfileViewer />} />
        </Route> */}
      </Routes>
    </div >
  );
}

export default App;
