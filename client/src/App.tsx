import Router from "preact-router";
import { h } from "preact";

import { Consulting } from "./pages/Consulting";
import { Design } from "./pages/Design";
import { Home } from "./pages/Home";


export const App = () => {
    return (
        <main role="main" className="app-container">
            <Router>
                <Home path="/" />
                <Consulting path="/consulting" />
                <Design path="/design" />
            </Router>

            <footer>
                &copy; {new Date().getFullYear()}
            </footer>
        </main>
    );
}