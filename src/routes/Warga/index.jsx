import TextField from "@mui/material/TextField";
import { useEffect, useCallback, useState } from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';

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
      <ButtonList buttonList={buttonList} />

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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}> */}
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
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
    setSelected(selected);
  }, []);

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
