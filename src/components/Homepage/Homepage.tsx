import { Typography, Box, Button, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom"; 

function Homepage() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Typography variant="h2" gutterBottom>
        Welcome to Sleep Tracker
      </Typography>

      <Stack spacing={3} direction="column" alignItems="center">
        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to="/form"
          size="large"
        >
          Input Sleep Data
        </Button>

        <Button
          variant="contained"
          color="secondary"
          component={RouterLink}
          to="/dashboard"
          size="large"
        >
          View Sleep Dashboard
        </Button>
      </Stack>
    </Box>
  );
}

export default Homepage;
