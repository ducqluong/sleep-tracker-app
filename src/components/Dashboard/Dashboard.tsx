import React from "react";
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
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";

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

const sleepHoursData = [
  { day: "Monday", hours: 8 },
  { day: "Tuesday", hours: 7.5 },
  { day: "Wednesday", hours: 6 },
  { day: "Thursday", hours: 7 },
  { day: "Friday", hours: 8 },
  { day: "Saturday", hours: 9 },
  { day: "Sunday", hours: 7 },
];

const bedtimeData = [
  { day: "Monday", bedtime: "22:00" },
  { day: "Tuesday", bedtime: "22:30" },
  { day: "Wednesday", bedtime: "23:00" },
  { day: "Thursday", bedtime: "22:45" },
  { day: "Friday", bedtime: "23:30" },
  { day: "Saturday", bedtime: "00:00" },
  { day: "Sunday", bedtime: "22:15" },
];

// Convert bedtime to numerical value
const convertBedtimeToNumber = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  const totalHours = hours + minutes / 60;
  return totalHours < 12 ? totalHours + 24 : totalHours; // Add 24 to times after midnight
};

const bedtimeDataConverted = bedtimeData.map((entry) => ({
  ...entry,
  bedtime: convertBedtimeToNumber(entry.bedtime),
}));

function Dashboard() {
  return (
    <Box className="container">
      <Typography variant="h4" gutterBottom className="chartTitle">
        Sleep Dashboard
      </Typography>

      <TableContainer component={Paper} className="table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Name</TableCell>
              <TableCell className="tableCell">Bedtime</TableCell>
              <TableCell className="tableCell">Wakeup Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockSleepData.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="tableCell">{row.name}</TableCell>
                <TableCell className="tableCell">{row.bedtime}</TableCell>
                <TableCell className="tableCell">{row.wakeupTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box className="chartContainer">
        <Typography variant="h5" gutterBottom className="chartTitle">
          Hours of Sleep Per Day
        </Typography>
        <BarChart
          width={600}
          height={300}
          data={sleepHoursData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#444444" />
          <XAxis dataKey="day" stroke="#ffffff" />
          <YAxis stroke="#ffffff" />
          <Tooltip />
          <Legend />
          <Bar dataKey="hours" fill="#8884d8" />
        </BarChart>
      </Box>

      <Box className="chartContainer">
        <Typography variant="h5" gutterBottom className="chartTitle">
          Bedtime Over the Week
        </Typography>
        <LineChart
          width={600}
          height={300}
          data={bedtimeDataConverted}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#444444" />
          <XAxis dataKey="day" stroke="#ffffff" />
          <YAxis stroke="#ffffff" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="bedtime" stroke="#82ca9d" />
        </LineChart>
      </Box>
    </Box>
  );
}

export default Dashboard;
