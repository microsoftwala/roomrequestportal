// import '@/styles/globals.css'
// import '@/src/styles/globals.css'
import './globals.css'
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }) {
    return (
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    );
  }

export default MyApp

// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

// function App({ children }) {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       {children}
//     </LocalizationProvider>
//   );
// }