import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyles } from './styles/GlobalStyles';
import { AuthProvider } from './contexts/AuthContext';
import { Router } from './Router';

function App() {
  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <Router />
      </AuthProvider>
      <ToastContainer position='bottom-center' />
    </>
  );
}

export default App;
