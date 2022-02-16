import { lazy, Suspense } from 'react'
import { Link, Route } from 'react-router-dom'

import PriviteRouter from './priviteRouter'

// :NOTE fake component
const Home = () => {
    return (
        <h1>
            Home <Link to="/about">to</Link>
        </h1>
    )
}

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
        path: '/',
        element: <Home />,
    },
    {
        path: '/about',
        element: <About />,
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
