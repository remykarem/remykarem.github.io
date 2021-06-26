import React, { useRef, useState } from 'react';
import './App.css';
import ContentEditable from 'react-contenteditable'
import { translate } from './translation';
import { Language } from './types.d';
import highlight from './syntax-highlight';
import { Container, Row, Col } from 'react-bootstrap';
import { SAMPLE_JSON, SAMPLE_KOTLIN, SAMPLE_TS } from './samples'


const App = () => {

  const jsonRef = React.createRef<any>() // any because the library has a possibly badly written type
  const jsonHtml = useRef(SAMPLE_JSON);
  const kotlinRef = React.createRef<any>() // any because the library has a possibly badly written type
  const kotlinHtml = useRef(SAMPLE_KOTLIN);
  const typescriptHtml = useRef(SAMPLE_TS);
  const [, setJsonError] = useState('');

  const handleOnKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      alert("Congrats! You found a feature that is currently being worked on!")
    }
  }

  const getClearText = (ref: React.MutableRefObject<ContentEditable>): string | undefined => {
    if (ref) {
      let htmlDivEl = ref.current.el as React.MutableRefObject<HTMLDivElement>;
      return htmlDivEl.current.textContent ?? "";
    }
  }

  const handleJsonChange = () => {
    // JSON
    let js = getClearText(jsonRef)!;
    jsonHtml.current = highlight(js, Language.JSON);

    // Kotlin
    let kt = translate(Language.Kotlin, Language.JSON, js)!;
    kotlinHtml.current = highlight(kt.text, Language.Kotlin);
    if (kt.error) {
      typescriptHtml.current = '';
      setJsonError(`<span class="error-message">${kt.error}</span>`); // this will help to rerender
      return;
    } else {
      let js = getClearText(jsonRef)!;
      let jsFormatted = JSON.stringify(JSON.parse(js), null, 2);
      jsonHtml.current = highlight(jsFormatted, Language.JSON);
      setJsonError(''); // this will help to rerender
    }

    // TypeScript
    let ts = translate(Language.TypeScript, Language.Kotlin, kt.text)!;
    typescriptHtml.current = highlight(ts.text, Language.TypeScript);
  };

  const handleKotlinChange = () => {
    // JSON
    jsonHtml.current = '';

    // Kotlin
    let kt = getClearText(kotlinRef)!;
    kotlinHtml.current = highlight(kt, Language.Kotlin);

    // TypeScript
    let ts = translate(Language.TypeScript, Language.Kotlin, kt)!;
    typescriptHtml.current = highlight(ts.text, Language.TypeScript);

    setJsonError(''); // this will help to rerender
  };

  return (
    <div className="App">
      <Container style={{ maxWidth: '1880px' }}>
        <br></br>
        <h3>JSON to Kotlin to TypeScript</h3>
        <p style={{color: 'rgb(144,144,144)', fontSize: 16}}>Convert JSON to Kotlin data classes, then to TypeScript object types</p>
        <br></br>
        <Row>
          <Col style={{ minWidth: '520px', marginTop: 24 }}>
            <p>JSON</p>
            <ContentEditable
              className="App-code"
              ref={jsonRef}
              html={jsonHtml.current}
              onChange={handleJsonChange}
              onKeyDown={handleOnKeyDown}
              disabled={false}
            />
          </Col>
          <Col style={{ minWidth: '480px', marginTop: 24 }}>
            <p>Kotlin</p>
            <ContentEditable
              className="App-code"
              ref={kotlinRef}
              html={kotlinHtml.current}
              onChange={handleKotlinChange}
              onKeyDown={handleOnKeyDown}
              disabled={false}
            />
          </Col>
          <Col style={{ minWidth: '520px', marginTop: 24 }}>
            <p>TypeScript</p>
            <ContentEditable
              className="App-code"
              html={typescriptHtml.current}
              onChange={() => { }}
              disabled={true}
            />
          </Col>
        </Row>
      </Container>
      <br></br>
      <hr></hr>
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
        <p>To-do</p>
        <ul>
          <li>Make Kotlin component reactive</li>
          <li>Select from samples</li>
          <li>Show JSON error message</li>
          <li>Paste without rich text formatting</li>
          <li>Re-render <code>useRef</code> without using <code>setState</code></li>
        </ul>
        <p>Built with React and React Bootstrap. Parser adapted from <a href="https://mholt.github.io/json-to-go/">JSON-to-Go</a>. Syntax highlighting theme by <a href="https://github.com/highlightjs/highlight.js/blob/main/src/styles/base16/tomorrow-night.css">Tomorrow Night</a>.</p>
        <p style={{color: 'rgb(144,144,144)', fontSize: 12}}>By Raimi</p>
      </footer>
    </div>
  );
}

export default App;
