import Home from '../papes/Home';
import About from '../papes/About';
import Dashboard from '../papes/Dashboard';

const router = [
  {
    path: '/',
    name: '首页',
    component: <Home />,
  },
  {
    path: '/About',
    name: '操作页面',
    component: <About />,
  },
  {
    path: '/Dashboard',
    name: '选择页面',
    component: <Dashboard />,
  }
];

export default router;