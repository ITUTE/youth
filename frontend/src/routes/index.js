import { lazy, Suspense } from 'react'
import { Link, Route } from 'react-router-dom'

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

const routes = [
    {
        path: '/',
        element: (
            <Suspense fallback={<h1>Loading</h1>}>
                <Home />
            </Suspense>
        ),
    },
    {
        path: '/about',
        element: <About />,
    },
]
export default routes.map((route, index) => (
    <Route key={index} path={route.path} element={route.element} />
))
