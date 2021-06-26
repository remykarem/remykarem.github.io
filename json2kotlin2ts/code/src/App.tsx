import React, { useRef, useState } from 'react';
import './App.css';
import ContentEditable from 'react-contenteditable'
import { translate } from './translation';
import { Language } from './types.d';
import highlight from './syntax-highlight';
import { Container, Row, Col } from 'react-bootstrap';


const App = () => {

  const jsonRef = React.createRef<any>() // any because the library has a possibly badly written type
  const jsonHtml = useRef('');
  const kotlinRef = React.createRef<any>() // any because the library has a possibly badly written type
  const kotlinHtml = useRef('');
  const typescriptHtml = useRef('');
  const [, setJsonError] = useState('');

  const handleOnKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      alert("congrats!")
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
      <Container>
        <br></br>
        <h3>JSON to Kotlin to TypeScript</h3>
        <br></br>
        <Row>
          <Col>
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
          <Col>
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
          <Col>
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
          <li>Convert JSON to data classes</li>
          <li>Convert Kotlin types to TypeScript types</li>
          <li>Automatic singularise the keys of items that are arrays</li>
          <li>Automatic conversion to lower camel case with JSONProperty annotation (Kotlin)</li>
        </ul>
        <p>To-do</p>
        <ul>
          <li>Select from samples</li>
          <li>Show JSON error message</li>
          <li>Paste without rich text formatting</li>
          <li>Re-render <code>useRef</code> without using <code>setState</code></li>
        </ul>
        By Raimi
      </footer>
    </div>
  );
}

export default App;
