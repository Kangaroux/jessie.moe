import { h } from "preact";

import { resume } from "../assets";


export const Home = () => {
    return (
        <div>
            <article>
                <h1>Hey there 👋</h1>

                <p>My name is Jessie. I'm a full stack Software Engineer.</p>
                <p>I like building websites, servers, APIs, and everything in between.</p>
                <p>Most of my time is spent working in Python, Typescript, and Go.</p>
            </article>

            <article>
                <h2>Some links</h2>

                <ul>
                    <li><a href="/design">My Design Philosophy</a></li>
                </ul>

                <h2>Some more links</h2>

                <ul>
                    <li><a href="mailto:me@jessie.moe">Email</a></li>
                    <li><a href="https://github.com/Kangaroux" target="_blank">GitHub</a></li>
                    <li><a href={resume} target="_blank">Resume</a></li>
                </ul>
            </article>
        </div>
    );
}