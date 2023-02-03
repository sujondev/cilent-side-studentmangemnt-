import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import AddStudent from './page/AddStudent/AddStudent';
import MangeStudent from './page/MangeStudent/MangeStudent';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <AddStudent></AddStudent>
        },
        {
          path: '/manageStudent',
          element: <MangeStudent></MangeStudent>
        },
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
