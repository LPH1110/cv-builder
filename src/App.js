import { publicRoutes as mainRoutes, ProtectedRoute } from './routes';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <Routes>
                {mainRoutes.map((route) => {
                    const Component = route.component;

                    return route.protected ? (
                        <Route
                            key={route.id}
                            path={route.path}
                            element={
                                <ProtectedRoute>
                                    <Component />
                                </ProtectedRoute>
                            }
                        />
                    ) : (
                        <Route key={route.id} path={route.path} element={<Component />} />
                    );
                })}
            </Routes>
        </div>
    );
}

export default App;
