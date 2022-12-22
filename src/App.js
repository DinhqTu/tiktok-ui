import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import { publicRoutes } from '~/routes';
import DefaultLayout from '~/Layout';
function App() {
    return (
        <div className="App">
            <Router>
                <header className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            // let Layout = DefaultLayout;
                            // if (route.layout) {
                            //     Layout = route.layout;
                            // } else if (route.layout === null) {
                            //     Layout = Fragment;
                            // }

                            const Layout =
                                route.layout === null
                                    ? Fragment
                                    : route.layout || DefaultLayout;
                            const Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </header>
            </Router>
        </div>
    );
}

export default App;
