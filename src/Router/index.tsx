import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { AuthGuard } from './AuthGuard';
import { Login } from '../pages/Login';
import { DashboardLayout } from '../pages/DashboardLayout';
import { PreviousOrders } from '../pages/PreviousOrders';

export function Router() {

  console.log (PreviousOrders);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<AuthGuard isPrivate />}>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<PreviousOrders />} />
            <Route path="/menu" element={<h1>Cardápio</h1>} />
            <Route path="/users" element={<h1>Usuários</h1>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
