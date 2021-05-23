import { h } from "preact";
import { GoHome } from "../GoHome";

export const Consulting = () => {
    return (
        <div>
            <GoHome />

            <article>
                <h1>Consulting</h1>

                <p>I offer consulting at a flat rate of $100/hr.</p>

                <p>
                    In addition to developing a product, I can also:

                    <ul>
                        <li>
                            Help design and build a system architecture that can
                            meet the needs of today as well as tomorrow.
                        </li>
                        <li>
                            Assist in the hiring process by testing a candidate's
                            technical background and knowledge.
                        </li>
                        <li>
                            Improve developer efficiency by setting up pipelines for
                            building, testing, and deploying code.
                        </li>
                        <li>
                            Setup and manage your infrastructure, including hosting
                            your website, database(s), etc.
                        </li>
                    </ul>
                </p>

                <p>
                    I have several years experience building systems from
                    the ground up. I have a solid understanding of system
                    design, continuous integration/delivery (CI/CD), and
                    experience to know what works and what doesn't. You can
                    read more about my design philosophy <a href="/design">here</a>.
                </p>

                <p>
                    Please send me an <a href="mailto:me@jessie.moe">email</a> if
                    you would like to discuss.
                </p>
            </article>
        </div>
    );
};