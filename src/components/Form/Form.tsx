import { Button, Typography, Stack, Box } from "@mui/material";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import BasicInfo from "./BasicInfo";
import SleepGoals from "./SleepGoals";

interface FormData {
  name: string;
  age: number;
  gender: string;
  height: string;
  weight: string;
  sleep_habits: string;
  bedtime: string;
  wakeup_time: string;
  avg_sleep: number;
  sleep_environment: string;
  sleep_aids: string;
  sleep_goals: {
    duration?: boolean;
    quality?: boolean;
    wakeups?: boolean;
    rest?: boolean;
  };
}

function Form() {
  const methods = useForm<FormData>();
  const { handleSubmit, reset } = methods;

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        width: "500px",
        maxWidth: "90%",
        height: "auto",
        margin: "auto",
        padding: "20px",
      }}
    >
      <Typography variant="h2" gutterBottom>
        Input Form
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <BasicInfo />
            <SleepGoals />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Stack>
        </form>
      </FormProvider>
    </Box>
  );
}

export default Form;
