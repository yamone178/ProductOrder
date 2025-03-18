import { createBrowserRouter, RouterProvider } from "react-router";
import OrderPage from "../pages/Order/OrderPage";
import Cart from "../pages/Order/Cart";
import CheckOut from "../pages/Order/CheckOut";
import OrderSuccessPage from "../pages/Order/OrderSuccessPage";



const Router = () => {
    const config = createBrowserRouter(
      [
        {
            path: "/",
            element: <OrderPage />,
          },
          {
            path: "/cart",
            element: <Cart />,
          },
          {
            path: "/checkout",
            element: <CheckOut />,
          },
          {
            path: "/order-success",
            element: <OrderSuccessPage />,
          },

      ],
    
    );

    return <RouterProvider router={config} />
};

export default Router;