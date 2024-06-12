import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactUsContainer from "./Containers/ContactUsContainer/ContactusContainer.tsx";
import TaskContainer from "./Containers/TaskContainer/TaskContainer.tsx";
import HomeContainer from "./Containers/HomeContainer/HomeContainer.tsx";

const App: React.FC = () => {
  return (
    <Router>
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/contact-us" element={<ContactUsContainer />} />
        <Route path="/task" element={<TaskContainer />} />
      </Routes>
    </Router>
  );
};

export default App;
