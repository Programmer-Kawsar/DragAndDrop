import Layout from "../components/layouts/Layout";
import DragAndDrop from "../pages/DragAndDrop";

const PublicRouter = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <DragAndDrop />,
      },
    ],
  },
];

export default PublicRouter;
