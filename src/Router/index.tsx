import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { AuthGuard } from './AuthGuard';
import { Login } from '../pages/Login';
import { DashboardLayout } from '../pages/DashboardLayout';
import { PreviousOrders } from '../pages/PreviousOrders';
import { Menu } from '../pages/Menu';
import { Users } from '../pages/Users';
import { Profile } from '../pages/Profile';

export function Router() {
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
            <Route path="/menu" element={<Menu />} />
            <Route path="/users" element={<Users />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
