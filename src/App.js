import { Fragment } from 'react';
import { publicRoutes as mainRoutes, ProtectedRoute } from './routes';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <Routes>
                {mainRoutes.map((route) => {
                    const Component = route.component;
                    const Layout = route.layout || Fragment;

                    return route.protected ? (
                        <Route
                            key={route.id}
                            path={route.path}
                            element={
                                <ProtectedRoute>
                                    <Layout>
                                        <Component />
                                    </Layout>
                                </ProtectedRoute>
                            }
                        />
                    ) : (
                        <Route
                            key={route.id}
                            path={route.path}
                            element={
                                <Layout>
                                    <Component />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </div>
    );
}

export default App;
