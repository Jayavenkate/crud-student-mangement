import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

export function AddTeacher() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [qualification, setQualification] = useState("");
  const [place, setPlace] = useState("");
  const navigate = useNavigate();
  const postData = async () => {
    const newData = {
      name: name,
      age: age,
      gender: gender,
      qualification: qualification,
      place: place,
    };
    // console.log(newData);
    await fetch("https://6426ccefd24d7e0de47894db.mockapi.io/teacher", {
      method: "POST",
      body: JSON.stringify(newData),
      headers: { "Content-Type": "application/json" },
    });
    navigate("/teacherlist");
  };
  return (
    <div className="add-student">
      <h1>Add Teacher Details</h1>

      <TextField
        onChange={(event) => setName(event.target.value)}
        label="Name"
        variant="outlined"
      />
      <TextField
        onChange={(event) => setAge(event.target.value)}
        label="Age"
        variant="outlined"
      />
      <TextField
        onChange={(event) => setGender(event.target.value)}
        label="Gender"
        variant="outlined"
      />
      <TextField
        onChange={(event) => setQualification(event.target.value)}
        label="Qualification"
        variant="outlined"
      />
      <TextField
        onChange={(event) => setPlace(event.target.value)}
        label="Place"
        variant="outlined"
      />

      <Button onClick={postData} variant="contained">
        Add Teacher
      </Button>
    </div>
  );
}
