import { Typography, Box, Button, ButtonGroup } from "@mui/material";
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
import { useState } from "react";

// Sample Data (expand this as needed)
const sleepHoursDataWeek = [
  { day: "Monday", hours: 8 },
  { day: "Tuesday", hours: 7.5 },
  { day: "Wednesday", hours: 6 },
  { day: "Thursday", hours: 7 },
  { day: "Friday", hours: 8 },
  { day: "Saturday", hours: 9 },
  { day: "Sunday", hours: 7 },
];

const bedtimeDataWeek = [
  { day: "Monday", bedtime: "22:00" },
  { day: "Tuesday", bedtime: "22:30" },
  { day: "Wednesday", bedtime: "23:00" },
  { day: "Thursday", bedtime: "22:45" },
  { day: "Friday", bedtime: "23:30" },
  { day: "Saturday", bedtime: "00:00" },
  { day: "Sunday", bedtime: "22:15" },
];

const sleepHoursDataMonth = [
  { day: "Week 1", hours: 7.5 },
  { day: "Week 2", hours: 8 },
  { day: "Week 3", hours: 6.5 },
  { day: "Week 4", hours: 7 },
];

const bedtimeDataMonth = [
  { day: "Week 1", bedtime: "22:15" },
  { day: "Week 2", bedtime: "22:45" },
  { day: "Week 3", bedtime: "23:15" },
  { day: "Week 4", bedtime: "22:30" },
];

const sleepHoursDataDay = [{ day: "Today", hours: 7 }];

const bedtimeDataDay = [{ day: "Today", bedtime: "22:30" }];

// Convert bedtime to numerical value
const convertBedtimeToNumber = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  const totalHours = hours + minutes / 60;
  return totalHours < 12 ? totalHours + 24 : totalHours; // Add 24 to times after midnight
};

function Dashboard() {
  const [timePeriod, setTimePeriod] = useState("week"); // 'day', 'week', 'month'

  const sleepHoursData =
    timePeriod === "day"
      ? sleepHoursDataDay
      : timePeriod === "week"
      ? sleepHoursDataWeek
      : sleepHoursDataMonth;

  const bedtimeData =
    timePeriod === "day"
      ? bedtimeDataDay
      : timePeriod === "week"
      ? bedtimeDataWeek
      : bedtimeDataMonth;

  const bedtimeDataConverted = bedtimeData.map((entry) => ({
    ...entry,
    bedtime: convertBedtimeToNumber(entry.bedtime),
  }));

  const xAxisDataKey = timePeriod === "week" ? "day" : "day";
  
  return (
    <Box className="container">
      <Typography variant="h4" gutterBottom className="chartTitle">
        Sleep Dashboard
      </Typography>

      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button onClick={() => setTimePeriod("day")}>Day</Button>
        <Button onClick={() => setTimePeriod("week")}>Week</Button>
        <Button onClick={() => setTimePeriod("month")}>Month</Button>
      </ButtonGroup>

      <Box className="chartContainer">
        <Typography variant="h5" gutterBottom className="chartTitle">
          Hours of Sleep Per{" "}
          {timePeriod.charAt(0).toUpperCase() + timePeriod.slice(1)}
        </Typography>
        <BarChart
          width={700}
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
          <XAxis dataKey={xAxisDataKey} stroke="#ffffff" />
          <YAxis stroke="#ffffff" />
          <Tooltip />
          <Legend />
          <Bar dataKey="hours" fill="#8884d8" />
        </BarChart>
      </Box>

      <Box className="chartContainer">
        <Typography variant="h5" gutterBottom className="chartTitle">
          Bedtime Over the{" "}
          {timePeriod.charAt(0).toUpperCase() + timePeriod.slice(1)}
        </Typography>
        <LineChart
          width={700}
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
          <XAxis dataKey={xAxisDataKey} stroke="#ffffff" />
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
