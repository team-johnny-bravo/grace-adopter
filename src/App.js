import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { Nav, Home } from "./components";
import Home from './components/Home.jsx'
import SinglePetPage from "./components/SinglePetPage.jsx";
// import { getCampuses } from "./store/reducers/campusReducer";
// import { getStudents } from "./store/reducers/studentReducer";
import { Routes, Route, Link } from "react-router-dom";

function App() {
 

  return (
    <>
      {/* <Nav /> */}
      <Routes>
        <Route index element={<SinglePetPage />} />
        {/* <Route path="campuses" element={<Campuses />} />
        <Route path="students" element={<Students />} />
        <Route path="campuses/:campusId" element={<CampusPage />} />
        <Route path="students/:studentId" element={<StudentPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
