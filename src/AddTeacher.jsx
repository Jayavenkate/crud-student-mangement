
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export function  AddTeacher() {
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
await fetch("https://6426ccefd24d7e0de47894db.mockapi.io/teacher",{
  method:"POST",
  body:JSON.stringify(newData),
  headers:{"Content-Type":"application/json",},
})
navigate("/teacherlist");
}
  return (
    <div className="add-student">
      <h1>Add Teacher Details</h1>
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
      <button onClick={postData}>Add Teacher</button>
    </div>
  );
}