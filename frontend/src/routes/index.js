import Page404 from 'pages/Page404'
import { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'

import PriviteRouter from './priviteRouter'

const Login = lazy(() => import('pages/login'))
const Home = lazy(() => import('pages/home'))
const Office = lazy(() => import('pages/office'))

const About = () => {
    return <h1>About</h1>
}
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
        path: '/about',
        element: <About />,
        isPrivite: true,
    },
    {
        path: '/login',
        element: <Login />,
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
