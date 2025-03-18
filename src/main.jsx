import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools"
import { Toaster } from "sonner";
const querydata = new QueryClient()
import { AuthProvider } from './Contexts/AuthContext.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { CartProvider } from '@/Contexts/Cart.context';
import { WishlistProvider } from './Contexts/wishlist.jsx';





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={querydata}>
        <WishlistProvider>
          <CartProvider>
            <AuthProvider>
              <App />
              <Toaster />
            </AuthProvider>
          </CartProvider>
        </WishlistProvider>
        <ReactQueryDevtools/>
      </QueryClientProvider>
    </HelmetProvider>
  </StrictMode>
)
