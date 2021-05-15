import React from "react";
import { render } from "react-dom";

import { resume } from "./assets";

const App = () => {
    return  (
        <main role="main" className="app-container">
            {/* <h1>jessie.moe</h1> */}

            <article className="about-me">
                <h1>Hey there.</h1>
                <p>My name is Jessie. I'm a full stack Software Engineer.</p>
                <p>I like building websites, servers, APIs, and everything in between.</p>
                <p>Most of my time is spent working in Python, Typescript, and Go.</p>
                <p>
                    <a href="https://github.com/Kangaroux" target="_blank">GitHub</a>
                    <span className="spacer"></span>
                    <a href={resume} target="_blank">Resume</a>
                </p>
            </article>
        </main>
    );
}

render(<App />, document.getElementById("root"));