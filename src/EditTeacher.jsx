import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";


export function EditTeacher() {
  const [data, SetData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://6426ccefd24d7e0de47894db.mockapi.io/teacher/${id}`)
      .then((res) => res.json())
      .then((data) => SetData(data));
  }, [id]);

  return data ? <UpdateForm data={data} /> : <h1>loading...</h1>;
}

function UpdateForm({ data }) {
  const [name, setName] = useState(data.name);
  const [age, setAge] = useState(data.age);
  const [gender, setGender] = useState(data.gender);
  const [qualification, setQualification] = useState(data.qualification);
  const [place, setPlace] = useState(data.place);
  const navigate = useNavigate();
  const updateData = () => {
    const newData = {
      name: name,
      age: age,
      gender: gender,
      qualification: qualification,
      place: place,
    };
    // console.log(newData);
    fetch(`https://6426ccefd24d7e0de47894db.mockapi.io/teacher/${data.id}`, {
      method: "PUT",
      body: JSON.stringify(newData),
      headers: { "Content-Type": "application/json" },
    });
    navigate("/teacherlist");
  };
  return (
    <div className="add-student">
      <h1>Edit Teachers List</h1>
      <TextField
        onChange={(event) => setName(event.target.value)}
        value={name}
        label="Name"
        variant="outlined"
      />
      <TextField
        onChange={(event) => setAge(event.target.value)}
        value={age}
        label="Age"
        variant="outlined"
      />
      <TextField
        onChange={(event) => setGender(event.target.value)}
        value={gender}
        label="Gender"
        variant="outlined"
      />
      <TextField
        onChange={(event) => setQualification(event.target.value)}
        value={qualification}
        label="Qualification"
        variant="outlined"
      />
      <TextField
        onChange={(event) => setPlace(event.target.value)}
        value={place}
        label="Place"
        variant="outlined"
      />
      <Button onClick={updateData} type="submit" variant="contained">
        Edit Teacher
      </Button>
    </div>
  );
}
