import Router from "preact-router";
import { h } from "preact";

import { Home } from "./pages/Home";
import { Design } from "./pages/Design";

export const App = () => {
    return (
        <main role="main" className="app-container">
            <Router>
                <Home path="/" />
                <Design path="/design" />
            </Router>

            <footer>
                &copy; {new Date().getFullYear()}
            </footer>
        </main>
    );
}