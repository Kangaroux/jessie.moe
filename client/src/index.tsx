import React from "react";
import { render } from "react-dom";

import { resume } from "./assets";

const App = () => {
    return  (
        <main role="main" className="app-container">
            {/* <h1>jessie.moe</h1> */}

            <article>
                <h1>Hey there 👋</h1>

                <p>My name is Jessie. I'm a full stack Software Engineer.</p>
                <p>I like building websites, servers, APIs, and everything in between.</p>
                <p>Most of my time is spent working in Python, Typescript, and Go.</p>

                <p>
                    <a href="https://github.com/Kangaroux" target="_blank">GitHub</a>
                    <span className="spacer"></span>
                    <a href={resume} target="_blank">Resume</a>
                </p>
            </article>

            <article>
                <h1>My design philosophy</h1>

                <p>I like keeping things <strong>simple</strong>.</p>
                <p>
                    Complexity is the root of all evil. Humans aren't perfect, we make mistakes.
                    Things that are complex are hard to understand and even harder to maintain.
                    I want to know exactly what my application is doing, how it's doing it, and why it's doing it.
                </p>

                <p>I love <strong>efficiency</strong>.</p>
                <p>
                    More accurately, I love when something does its job and nothing more. There's no bloat
                    or excess stuff to interfere or slow things down. It has a clear purpose. It's
                    designed to perform a task and it executes it flawlessly every time.
                </p>

                <p>I believe in <strong>privacy</strong> and <strong>freedom of choice</strong>.</p>
                <p>

                </p>

                <p>I pay close attention to <strong>details</strong>.</p>
                <p>

                </p>
            </article>
        </main>
    );
}

render(<App />, document.getElementById("root"));