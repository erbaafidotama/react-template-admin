import TextField from "@mui/material/TextField";
import { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Divider from "@mui/material/Divider";

import { useWargaStore } from "./store";
import { useLoginStore } from "../Login/store";

const WargaIndex = () => {
  const bears = useWargaStore((state) => state.bears);
  const increasePopulation = useWargaStore((state) => state.increasePopulation);
  const removeAllBears = useWargaStore((state) => state.removeAllBears);
  const fetchPeople = useWargaStore((state) => state.fetchPeople);
  const listPeople = useWargaStore((state) => state.people);
  const jwtToken = useLoginStore((state) => state.token);

  useEffect(() => {
    fetchPeople(jwtToken);
  }, []);

  console.log("listPeople", listPeople);
  console.log("jwtToken", jwtToken);
  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <div>Master</div>
        <Typography color="text.primary">Warga</Typography>
      </Breadcrumbs>
      <Divider />
      <br />
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      <DataTable />
      <h1>{bears} around here ...</h1>
      <button onClick={increasePopulation}>one up</button>
      <button onClick={removeAllBears}>reset</button>
    </div>
  );
};

import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default WargaIndex;
