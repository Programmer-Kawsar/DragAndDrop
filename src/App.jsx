import { RouterProvider } from "react-router-dom";
import router from "./router/Router";
import "grapesjs/dist/css/grapes.min.css";

import "./App.css";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
