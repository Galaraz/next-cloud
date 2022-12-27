import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from '../context';
import Header from '../components/Header';
import Footer from '../components/Footer'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
    <Component {...pageProps} />
    </AuthProvider>
  )
  
  
}
