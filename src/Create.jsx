import { useState } from "react";
import { useNavigate } from 'react-router-dom';
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
      <input
        onChange={(event) => setName(event.target.value)}
        value={name}
        type="text"
        placeholder="Name"
      />
      <input
        onChange={(event) => setAge(event.target.value)}
        value={age}
        type="text"
        placeholder="Age"
      />
      <input
        onChange={(event) => setGender(event.target.value)}
        value={gender}
        type="text"
        placeholder="Gender"
      />
      <input
        onChange={(event) => setQualification(event.target.value)}
        value={qualification}
        type="text"
        placeholder="Qualification"
      />
      <input
        onChange={(event) => setPlace(event.target.value)}
        value={place}
        type="text"
        placeholder="Place"
      />
      <button onClick={postData}>Add Student</button>
    </div>
  );
}
