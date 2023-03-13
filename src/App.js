import { Fragment } from 'react';
import { publicRoutes as mainRoutes, ProtectedRoute } from './routes';
import { Routes, Route } from 'react-router-dom';
import { ScrollToTop } from '~/components';

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
                                        <ScrollToTop>
                                            <Component />
                                        </ScrollToTop>
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
                                    <ScrollToTop>
                                        <Component />
                                    </ScrollToTop>
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
