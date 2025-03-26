import {
  Typography,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

interface SleepData {
  name: string;
  bedtime: string;
  wakeupTime: string;
}

const mockSleepData: SleepData[] = [
  { name: "Bob", bedtime: "22:00", wakeupTime: "06:30" },
  { name: "Goku", bedtime: "23:30", wakeupTime: "07:00" },
  { name: "Luffy", bedtime: "21:00", wakeupTime: "05:00" },
];

function Dashboard() {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Sleep Dashboard
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Bedtime</TableCell>
              <TableCell>Wakeup Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockSleepData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.bedtime}</TableCell>
                <TableCell>{row.wakeupTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Dashboard;
