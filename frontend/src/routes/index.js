import About from 'pages/about'
import Award from 'pages/award'
import OfficeDocument from 'pages/office/officeDocument'
import OfficeTemplate from 'pages/office/officeTemplate'
import Page404 from 'pages/Page404'
import Support from 'pages/support'
import SV5T from 'pages/sv5t'
import SurveySV5T from 'pages/sv5t/surveySv5t'
import HCM from 'pages/HCM'
import Feedback from 'pages/feedback'
import { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'

import PriviteRouter from './priviteRouter'

const Login = lazy(() => import('pages/login'))
const Home = lazy(() => import('pages/home'))
const Office = lazy(() => import('pages/office'))

// :NOTE fake component

// {
// 		path: string,
//		element: jsx,
//		isPrivite: boolean,
// }
const routes = [
    {
        path: '/office',
        element: <Office />,
    },
    {
        path: '/office/vanban',
        element: <OfficeDocument />,
    },
    {
        path: '/office/bieumau',
        element: <OfficeTemplate />,
    },
    {
        path: '/it-sv5t',
        element: <SV5T />,
    },
    {
        path: '/dang-ky-sv5t',
        element: <SurveySV5T />,
    },
    {
        path: '/award',
        element: <Award />,
    },
    {
        path: '/HCM',
        element: <HCM />,
    },
    {
        path: '/support',
        element: <Support />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/feedback',
        element: <Feedback />,
    },
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '*',
        element: <Page404 />,
    },
]

export default routes.map((route, index) =>
    route.isPrivite ? (
        <Route
            key={index}
            path={route.path}
            element={
                <PriviteRouter
                    element={
                        <Suspense key={index} fallback={<h1>loading</h1>}>
                            {route.element}
                        </Suspense>
                    }
                />
            }
        />
    ) : (
        <Route
            key={index}
            path={route.path}
            element={
                <Suspense fallback={<h1>loading</h1>}>{route.element}</Suspense>
            }
        />
    ),
)
