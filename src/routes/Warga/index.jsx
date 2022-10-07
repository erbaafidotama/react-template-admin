import TextField from "@mui/material/TextField";
import { useEffect, useCallback, useState } from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import Table from "../../components/Table";
import ButtonList from "../../components/ButtonList";

import { useWargaStore } from "./store";
import { useLoginStore } from "../Login/store";

const WargaIndex = () => {
  const posts = useWargaStore((state) => state.posts);
  const fetchPost = useWargaStore((state) => state.fetchPost);

  const [openModalTambah, setOpenModalTambah] = useState(false);

  useEffect(() => {
    console.log("SINIII");
    fetchPost();
  }, []);

  const doOpenModalTambah = () => {
    setOpenModalTambah(!openModalTambah);
  };

  const buttonList = [
    {
      typeButton: "add",
      onClick: doOpenModalTambah,
      label: "Add People",
    },
    {
      typeButton: "edit",
      onClick: doOpenModalTambah,
      label: "Edit People",
    },
    {
      typeButton: "delete",
      onClick: doOpenModalTambah,
      label: "Delete People",
    },
  ];

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <div>Master</div>
        <Typography color="text.primary">Warga</Typography>
      </Breadcrumbs>
      <Divider />
      <br />
      <ButtonList buttonList={buttonList} />
      <br />

      {posts.data && <DataTable dataTable={posts} />}

      <Dialog
        open={openModalTambah}
        // keepMounted
        onClose={doOpenModalTambah}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Tambah Data Warga</DialogTitle>
        <Divider />
        <DialogContent>
          <Stack direction="row" spacing={2}>
            <TextField
              id="outlined-basic"
              label="Nama Lengkap"
              variant="outlined"
            />
            <TextField id="outlined-basic" label="NIK" variant="outlined" />
          </Stack>
          <Stack direction="row" spacing={2}>
            <TextField id="outlined-basic" label="Warga" variant="outlined" />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={doOpenModalTambah}>Close</Button>
          <Button onClick={doOpenModalTambah}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const columns = [
  {
    name: "id",
    header: "No.",
    maxWidth: 70,
  },
  {
    name: "title",
    header: "Title",
    defaultFlex: 1,
  },
  {
    name: "body",
    header: "Body",
    defaultFlex: 1,
  },
];

function DataTable(props) {
  const [selected, setSelected] = useState(null);
  const onSelectionChange = useCallback(({ selected, e }) => {
    console.log("e", e);
    setSelected(selected);
  }, []);
  console.log("selected", selected);
  return (
    <div>
      <Table
        columnsTable={columns}
        dataTable={props.dataTable?.data}
        onRowClick={onSelectionChange}
      />
    </div>
  );
}

export default WargaIndex;
