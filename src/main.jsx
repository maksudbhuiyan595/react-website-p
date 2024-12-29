import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { Home } from './Components/Home.jsx';
import { Products } from './Components/Products.jsx';
import { Contact } from './Components/Contact.jsx';
import { SeeMore } from './Components/SeeMore.jsx';


// Fetch all products
const fetchProducts = async () => {
  const response = await fetch('https://dummyjson.com/products');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};

// Fetch a single product by ID
// const fetchProductById = async ({ params }) => {
//   const { id } = params;
//   const response = await fetch(`https://dummyjson.com/products/${id}`);
//   if (!response.ok) {
//     throw new Error(`Failed to fetch product with ID: ${productId}`);
//   }
//   return response.json();
// };

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'products',
        loader: fetchProducts,
        element: <Products />
      },
      {
        path: '/products/:id', 
        // loader: fetchProductById, 
        element: <SeeMore ></SeeMore>
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
