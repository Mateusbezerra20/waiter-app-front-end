import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyles } from './styles/GlobalStyles';
import { Router } from './Router';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router />
      <ToastContainer position='bottom-center' />
    </>
  );
}

export default App;
