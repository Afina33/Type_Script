import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyles from "styles/GlobalStyles";

import ContactUs from "components/ContactUs/ContactUs";
import Home from "pages/EmployeeApp/Home/Home";
import LogIn from "pages/EmployeeApp/LogIn/LogIn";
import About from "pages/EmployeeApp/About/About";

import Lesson_06 from "lessons/Lesson_06/Lesson_06";
import HomeWork06 from "homeworks/Home_work06/HomeWork06";
import Lesson_07 from "lessons/Lesson_07/Lesson_07";
import Homework_07 from "homeworks/HomeWork_07/Homework_07";
import Lesson_08 from "lessons/Lesson_08/Lesson_08";
import Homework_08 from "homeworks/Home_work_08/Homework_08";
import Lesson_09 from "lessons/Lesson_09/Lesson_09";
import Homework_09 from "homeworks/Home_work_09/Homework_09";
import Lesson_10 from "lessons/Lesson_10/Lesson_10";
import Playgraund from "./Cs/Cs_06/Playgraund";
import Homework_10 from "homeworks/Home_work_10/Homework_10";
import { Lesson_11 } from "lessons/Lesson_11/Lesson_11";
import Lesson_12 from "lessons/Lesson_12/Lesson_12";
import Homework_12 from "homeworks/Home_work_12/Homework_12";
import Layout from "components/Layout/Layout";
import Volkswagen from "pages/Clients/Volkswagen/Volkswagen";
import Bmw from "pages/Clients/BMW/Bmw";
import MercedesBenz from "pages/Clients/MercedesBenz/MercedesBenz";
import Clients from "pages/Clients/Clients";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="*" element="Page not Found" />
          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/bmw" element={<Bmw />} />
          <Route path="/clients/volkswagen" element={<Volkswagen />} />
          <Route path="/clients/mercedesBenz" element={<MercedesBenz />} />
        </Routes>
      </Layout>
      {/* <Lesson_06/> */}
      {/* <HomeWork06/> */}
      {/* <Lesson_07/> */}
      {/* <Homework_07/> */}
      {/* <Lesson_08 /> */}
      {/* <Homework_08/> */}
      {/* <Lesson_09/> */}
      {/* <Homework_09/> */}
      {/* <Lesson_10/> */}
      {/* <Lesson_11/> */}
      {/* <Lesson_12/> */}
      {/* <Playgraund/> */}
      {/* <Homework_10/> */}
      {/* <Homework_12/> */}
    </BrowserRouter>
  );
}

export default App;
