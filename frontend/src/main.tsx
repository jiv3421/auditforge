import './index.css';
import './i18n';

import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

import AuthProvider from './components/AuthProvider';
import { ErrorPage } from './error-page';
import { checktoken } from './hooks/useAuth';
import { Audits, Data, Login, Root, Settings, Vulnerabilities } from './routes';
import { Add, AuditRoot, Edit, General, Network } from './routes/audits';
import {
  Clients,
  Collaborators,
  Companies,
  CustomData,
  ImportExport,
  Templates,
} from './routes/data';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/audits" />,
      },
      {
        path: '/audits',
        element: <Audits />,
      },
      {
        path: '/audits/:auditId',
        element: <AuditRoot />,
        children: [
          {
            path: 'general',
            element: <General />,
          },
          {
            path: 'network',
            element: <Network />,
          },
          {
            path: 'findings/add',
            element: <Add />,
          },
          {
            path: 'findings/:findingId',
            element: <Edit />,
          },
        ],
      },
      {
        path: '/vulnerabilities',
        element: <Vulnerabilities />,
      },
      {
        path: '/data',
        element: <Data />,
        children: [
          {
            index: true,
            element: <Navigate to="/data/collaborators" />,
          },
          {
            path: '/data/collaborators',
            element: <Collaborators />,
          },
          {
            path: '/data/companies',
            element: <Companies />,
          },
          {
            path: '/data/clients',
            element: <Clients />,
          },
          {
            path: '/data/templates',
            element: <Templates />,
          },
          {
            path: '/data/customData',
            element: <CustomData />,
          },
          {
            path: '/data/importExport',
            element: <ImportExport />,
          },
        ],
      },
      {
        path: '/settings',
        element: <Settings />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

checktoken()
  .then(result => {
    ReactDOM.createRoot(
      document.getElementById('root') ?? document.body,
    ).render(
      <React.StrictMode>
        <AuthProvider isSignedIn={result}>
          <RouterProvider router={router} />
        </AuthProvider>
      </React.StrictMode>,
    );
  })
  .catch(console.error);
