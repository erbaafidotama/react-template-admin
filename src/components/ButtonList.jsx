import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const ButtonList = (props) => {
  const { buttonList } = props;

  let createButtonList = [];
  buttonList.forEach((element, id) => {
    if (element.typeButton === "add") {
      createButtonList.push(
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={element.onClick}
          key={id}
        >
          {element.label}
        </Button>
      );
    }
    if (element.typeButton === "edit") {
      createButtonList.push(
        <Button
          variant="contained"
          startIcon={<EditIcon />}
          onClick={element.onClick}
          key={id}
        >
          {element.label}
        </Button>
      );
    }
    if (element.typeButton === "delete") {
      createButtonList.push(
        <Button
          variant="contained"
          startIcon={<DeleteIcon />}
          onClick={element.onClick}
          key={id}
        >
          {element.label}
        </Button>
      );
    }
  });

  return (
    <>
      <br />
      <Stack direction="row" spacing={1}>
        {createButtonList}
      </Stack>
    </>
  );
};

export default ButtonList;
