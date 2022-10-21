import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1>
                <span style={{ color: "red" }}>Hello World</span>
            </h1>
            <p>
                <img
                    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fdecider.com%2F2022%2F06%2F02%2Frevisiting-breaking-bad-after-better-call-saul%2F&psig=AOvVaw1Ns-JdR2_jHAJf4oZ7H80q&ust=1666382983885000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOC0wMjO7_oCFQAAAAAdAAAAABAD"
                    alt="it's all good, man"
                />
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload and also Kevin B COS420 and Hello World
            </p>
            <ol>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
            </ol>
            <Button
                aria-label="Log Hello World"
                onClick={() => console.log("Hello World!")}
            >
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>I am a column</Col>
                    <Col>Cool me too!</Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
