import { h } from "preact";

import { resume } from "./assets";


export const App = () => {
    return (
        <main role="main" className="app-container">
            <article>
                <h1>Hey there 👋</h1>

                <p>My name is Jessie. I'm a full stack Software Engineer.</p>
                <p>I like building websites, servers, APIs, and everything in between.</p>
                <p>Most of my time is spent working in Python, Typescript, and Go.</p>

                <p>
                    <a href="mailto:me@jessie.moe">Email</a>
                    <span className="spacer"></span>
                    <a href="https://github.com/Kangaroux" target="_blank">GitHub</a>
                    <span className="spacer"></span>
                    <a href={resume} target="_blank">Resume</a>
                </p>
            </article>

            <article>
                <h1>My design philosophy</h1>

                <p>I like keeping things <strong>simple</strong>.</p>
                <p className="indent">
                    Complexity is the root of all evil. Humans aren't perfect, we make mistakes.
                    Things that are complex are hard to understand and even harder to maintain.
                    I want to know exactly what my application is doing, how it's doing it, and why it's doing it.
                </p>

                <p>I love <strong>efficiency</strong>.</p>
                <p className="indent">
                    More accurately, I love when something does its job and nothing more. There's no bloat
                    or excess stuff to interfere or slow things down. It has a clear purpose. It's
                    designed to perform a task and it executes it flawlessly every time.
                </p>

                <p>I pay close attention to <strong>details</strong>.</p>
                <p className="indent">
                    Goods and services with a 5-star rating don't happen by accident. Every detail and
                    design decision matters. I am very good at putting myself in the user's shoes and
                    understanding how something will be used.
                </p>

                <p>I believe in <strong>privacy</strong> and <strong>freedom of choice</strong>.</p>
                <p className="indent">
                    Your personal information is for your eyes only. You should not feel like you
                    are constantly being watched, or tracked, or profiled. You should not be forced
                    into using or doing something you don't like. Good intentions breed good innovations.
                </p>
            </article>

            <footer>
                &copy; {new Date().getFullYear()}
            </footer>
        </main>
    );
}