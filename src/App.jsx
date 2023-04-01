// https://64231d3577e7062b3e2b6783.mockapi.io/crud2
import "./App.css";

import { Create } from "./Create";
import { Read } from "./Read";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Update } from "./Update";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { AddTeacher } from "./AddTeacher";
import { TeacherList } from "./TeacherList";
import { EditTeacher } from "./EditTeacher";
export default function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            STUDENT & TEACHER MANAGEMENT
          </Typography>

          <Button onClick={() => navigate("/")} color="inherit">
            Home
          </Button>
        </Toolbar>
      </AppBar>
      <div></div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/create/update/:id" element={<Update />} />

          <Route path="/addteacher" element={<AddTeacher />} />
          <Route path="/teacherlist" element={<TeacherList />} />
          <Route path="/addteacher/editteacher/:id" element={<EditTeacher />} />
        </Routes>
      </div>
    </div>
  );
}

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h1>Click below the button 👇</h1>
      <Button onClick={() => navigate("/create")} variant="contained">Student</Button>
      <Button onClick={() => navigate("/addteacher")} variant="contained">Teacher</Button>
    </div>
  );
}
