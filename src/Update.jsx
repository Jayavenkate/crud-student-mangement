
import { useState ,useEffect} from "react";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from 'react-router-dom';
export function Update(){
  const[data,SetData]=useState(null);
  const{id} = useParams();
  useEffect(()=>{
    fetch(`https://64231d3577e7062b3e2b6783.mockapi.io/crud2/${id}`)
  .then((res)=>res.json())
  .then((data)=>SetData(data));
  },[id]);
  
  return data ?   <UpdateForm data={data}/>:<h1>loading...</h1>
    }

    function UpdateForm({data}) {
  const [name, setName] = useState(data.name);
  const [age, setAge] = useState(data.age);
  const [gender, setGender] = useState(data.gender);
  const [qualification, setQualification] = useState(data.qualification);
  const [place, setPlace] = useState(data.place);
  const navigate = useNavigate();
const updateData = ()=>{
const newData={
  name:name,
  age:age,
  gender:gender,
  qualification:qualification,
  place:place,
}
// console.log(newData);
fetch(`https://64231d3577e7062b3e2b6783.mockapi.io/crud2/${data.id}`,{
  method:"PUT",
  body:JSON.stringify(newData),
  headers:{"Content-Type":"application/json",},
})
navigate("/read");
}
  return (
    <div className="add-student">
      <h1>Edit Students Details</h1>
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
      <Button onClick={updateData} type="submit">Edit Student</Button>
    </div>
  );
}
