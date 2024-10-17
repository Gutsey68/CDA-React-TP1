import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Accueil from './pages/Accueil';
import Contact from './pages/Contact';
import Equipe from './pages/Equipe';
import PageErreur from './pages/PageErreur';
import Service from './pages/Service';
import './styles/global.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <PageErreur />,
        children: [
            {
                path: '',
                element: <Accueil />
            },
            {
                path: 'equipe',
                element: <Equipe />
            },
            {
                path: 'service',
                element: <Service />
            },
            {
                path: 'contact',
                element: <Contact />
            }
        ]
    }
]);

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
