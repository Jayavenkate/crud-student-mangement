
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export function TeacherList() {
  const [data, setdata] = useState([]);
  const navigate = useNavigate();

  const deleteData = async (id) => {
    await fetch(`https://6426ccefd24d7e0de47894db.mockapi.io/teacher/${id}`, {
      method: "DELETE",
    });
    getData();
  };
  const getData = () => {
    fetch("https://6426ccefd24d7e0de47894db.mockapi.io/teacher", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setdata(data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="teacherlist">
      <h1 className="heading">Teachers List</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Qualification</TableCell>
              <TableCell>Place</TableCell>             
              <TableCell>Delete</TableCell>
              <TableCell>Edit</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((data,index) => (
              <TableRow key={index}>
                <TableCell> {data.name}</TableCell>
                <TableCell>{data.age}</TableCell>
                <TableCell>{data.gender}</TableCell>
                <TableCell>{data.qualification}</TableCell>
                <TableCell>{data.place}</TableCell>
                <TableCell>
                  <Button onClick={() => deleteData(data.id)} color="error"><DeleteIcon /></Button>
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() =>
                      navigate(`/addteacher/editteacher/${data.id}`)
                    }
                  >
                  <EditIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
