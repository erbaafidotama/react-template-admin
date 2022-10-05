import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useLoginStore } from "./store";

const LoginIndex = () => {
  const { register, handleSubmit } = useForm();
  const postLogin = useLoginStore((state) => state.postLogin);
  const onSubmit = (data) => postLogin(data);
  return (
    <div>
      <form>
        <Stack direction="row" spacing={2}>
          <TextField {...register("username")} label="Username" />

          {/* include validation with required or other standard HTML validation rules */}
          <TextField {...register("password")} label="Password" />

          <Button variant="contained" onClick={handleSubmit(onSubmit)}>
            Submit
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default LoginIndex;
