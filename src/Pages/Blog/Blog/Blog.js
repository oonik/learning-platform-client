import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>what is cors?</Accordion.Header>
                <Accordion.Body>
                    As you've possibly already come across by now, CORS is an acronym for Cross-Origin Resource Sharing, but what does that actually mean? What is CORS? Well, if we go by the Wikipedia definition, "[CORS] is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served," then you'd be forgiven if you were more confused than before you'd read that sentence.

                    Before we get into defining CORS, it's best to know what came before, as it still defines the default behavior and is probably why you're reading this now. This precursor to CORS was called the "Same-Origin" policy. In short, it dictates that when your browser loads a script (like a button handler, or some async widget) from a particular (sub)domain that the script can only make requests to the (sub)domain that it originated from.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Why are you using firebase?</Accordion.Header>
                <Accordion.Body>
                    Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>What other options do you have to implement authentication?</Accordion.Header>
                <Accordion.Body>
                Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>How does the private route work?</Accordion.Header>
                <Accordion.Body>
                The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>What is Node?</Accordion.Header>
                <Accordion.Body>
                Learn about Node.js, a JavaScript runtime for building server-side or desktop applications.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
                <Accordion.Header>How does Node work?</Accordion.Header>
                <Accordion.Body>
                Node.js simply enters the event loop after executing the input script. Node.js exits the event loop when there are no more callbacks to perform. This behavior is like browser JavaScript — the event loop is hidden from the user. HTTP is a first-class citizen in Node.js, designed with streaming and low latency in mind.

                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Blog;