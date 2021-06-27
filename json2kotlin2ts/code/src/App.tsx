import React, { useState } from 'react';
import './App.css';
import { translateJson2Kotlin, translateKotlin2Ts } from './translation';
import { Language } from './types.d';
import { Container, Row, Col } from 'react-bootstrap';
import Codeblock from './Codeblock';
import { SAMPLE_JSON } from './samples';


const Header = () => <>
  <br></br>
  <h3>JSON to Kotlin to TypeScript</h3>
  <p style={{ color: 'rgb(144,144,144)', fontSize: 16 }}>Convert JSON data to Kotlin data classes, then to TypeScript object types</p>
  <br></br>
</>;

const CodeSection = () => {
  const [jsonError, setJsonError] = useState<string>('');
  const [jsonInput, setJsonInput] = useState<string>(SAMPLE_JSON);
  const [kotlinInput, setKotlinInput] = useState<string | null>(null);

  const onJsonChange = (input: string) => {
    try {
      let parsedJson = JSON.parse(input);
      let stringifiedInput = JSON.stringify(parsedJson, null, 2);
      setJsonError('');
      setJsonInput(stringifiedInput);
      setKotlinInput(null);

    } catch (err) {
      setJsonError(`😰 ${(err as SyntaxError).message}`);
      setJsonInput(input);
    }
  };

  const onKotlinChange = (input: string) => {
    setKotlinInput(input);
    setJsonInput('');
  };

  return <>
    <Row>
      <Col style={{ minWidth: '520px', marginTop: 24 }}>
        <Codeblock
          code={jsonInput}
          onInput={onJsonChange}
          language={Language.JSON}
          editable={true}
        />
        <br></br>
        <code>{jsonError}</code>
      </Col>
      <Col style={{ minWidth: '480px', marginTop: 24 }}>
        <Codeblock
          code={kotlinInput ?? translateJson2Kotlin(jsonInput)}
          onInput={onKotlinChange}
          language={Language.Kotlin}
          editable={true}
        />
      </Col>
      <Col style={{ minWidth: '520px', marginTop: 24 }}>
        <Codeblock
          code={kotlinInput ?
            translateKotlin2Ts(kotlinInput) : translateKotlin2Ts(translateJson2Kotlin(jsonInput))
          }
          language={Language.TypeScript}
          editable={false}
        />
      </Col>
    </Row>
    <br></br>
    <hr></hr>
  </>;
};

const Footer = () => (
  <footer className="footer">
    <br></br>
    <p>Features</p>
    <ul>
      <li>Convert JSON to Kotlin data classes</li>
      <li>Convert Kotlin data classes to TypeScript object types as type aliases</li>
      <li>Singularise the keys of items which are arrays</li>
      <li>Convert keys to lowerCamelCase with <a href="https://fasterxml.github.io/jackson-annotations/javadoc/2.8/com/fasterxml/jackson/annotation/JsonProperty.html">JsonProperty annotation</a> (for Kotlin)</li>
    </ul>
    <p>Non-features</p>
    <ul>
      <li>Nullable types</li>
    </ul>
    <p>To-do (see mood)</p>
    <ul>
      <li>Maintain caret position (DOM &#128549;)</li>
      <li>Cmd Z (DOM &#128549;)</li>
      <li>Tab behaviour (DOM &#128549;)</li>
    </ul>
    <p>Built with React and React Bootstrap. Parser adapted from <a href="https://mholt.github.io/json-to-go/">JSON-to-Go</a>. Syntax highlighting theme by <a href="https://github.com/highlightjs/highlight.js/blob/main/src/styles/base16/tomorrow-night.css">Tomorrow Night</a>.</p>
    <p style={{ color: 'rgb(144,144,144)', fontSize: 12 }}>By Raimi</p>
  </footer>
);

const App = () => (
  <div className="App">
    <Container style={{ maxWidth: '1880px' }}>
      <Header />
      <CodeSection />
      <Footer />
    </Container >
  </div >
);

export default App;
