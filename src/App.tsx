import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Form from "././components/Form/Form";
import Dashboard from "././components/Dashboard/Dashboard";

function App() {
  return (
    <Router basename="/sleep-tracker-app">
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
