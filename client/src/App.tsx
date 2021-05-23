import Router from "preact-router";
import { h } from "preact";

import { Home } from "./pages/Home";

export const App = () => {
    return (
        <main role="main" className="app-container">
            <Router>
                <Home path="/" />
            </Router>

            <footer>
                &copy; {new Date().getFullYear()}
            </footer>
        </main>
    );
}