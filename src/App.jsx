import "./App.css";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import AuthPage from "./components/AuthPage/AuthPage";
import LogInCard from "./components/AuthPage/LogInCard";
import SignUpCard from "./components/AuthPage/SignUpCard";
import ProtectedRoute from "./guards/ProtectedRoute";
import AuthProvider from "./contexts/AuthContext/AuthProvider";

function App() {
    return (
        <>
            <AuthProvider>
                <HashRouter basename="/react-auth-lab">
                    <Routes>
                        {/*  protected route */}
                        {/* <Route path="/" element={<Home />} /> */}
                        <Route
                            path="/"
                            element={
                                <ProtectedRoute>
                                    <Home />
                                </ProtectedRoute>
                            }
                        />
                        {/* nested routes */}
                        <Route path="/auth" element={<AuthPage />}>
                            <Route
                                path=""
                                element={<Navigate to="login" replace />}
                            />
                            <Route path="login" element={<LogInCard />} />
                            <Route path="signup" element={<SignUpCard />} />
                        </Route>
                    </Routes>
                </HashRouter>
            </AuthProvider>
        </>
    );
}

export default App;
