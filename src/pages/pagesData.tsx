import ExamPage from "./main/ExamPage";
import HomePage from "./main/HomePage/Index";

const pagesData = [
  

      {
        path: "",
        title: "Home Page",
        element: <HomePage />,
      },
      {
        path: "/exam",
        title: "exam",
        element: <ExamPage />,
      },
     
  
];

export default pagesData;
