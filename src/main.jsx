import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@fontsource/poppins"; // Defaults to weight 400
import { CartProvider } from './context/CartContext.jsx';
import 'animate.css';



createRoot(document.getElementById('root')).render(
<CartProvider>
    <App />
 </CartProvider>


)
