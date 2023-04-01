import { useState } from "react";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import TextField from "@mui/material/TextField";

export function Create() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [qualification, setQualification] = useState("");
  const [place, setPlace] = useState("");
  const navigate = useNavigate();
const postData = async()=>{
const newData={
  name:name,
  age:age,
  gender:gender,
  qualification:qualification,
  place:place,
}
// console.log(newData);
await fetch("https://64231d3577e7062b3e2b6783.mockapi.io/crud2",{
  method:"POST",
  body:JSON.stringify(newData),
  headers:{"Content-Type":"application/json",},
})
navigate("/read");
}
  return (
    <div className="add-student">
      <h1>Add Students Details</h1>
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
      <Button onClick={postData} variant="contained">Add Student</Button>
    </div>
  );
}
