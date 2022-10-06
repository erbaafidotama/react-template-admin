import TextField from "@mui/material/TextField";
import { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Divider from "@mui/material/Divider";

import Table from "../../components/Table";

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
      {listPeople.data && <DataTable dataTable={listPeople} />}

      <h1>{bears} around here ...</h1>
      <button onClick={increasePopulation}>one up</button>
      <button onClick={removeAllBears}>reset</button>
    </div>
  );
};

const columns = [
  {
    name: "nama_lengkap",
    header: "Nama Lengkap",
    minWidth: 130,
    defaultFlex: 2,
  },
  {
    name: "nik",
    header: "NIK",
    minWidth: 90,
  },
  {
    name: "no_kk",
    header: "No. KK",
    minWidth: 90,
  },
];

function DataTable(props) {
  console.log("props.dataTable", props.dataTable);
  return (
    <div >
      <Table
        columnsTable={columns}
        dataTable={props.dataTable?.data}
      />
    </div>
  );
}

export default WargaIndex;
