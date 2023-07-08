import React, { useEffect } from 'react';
import './App.css';
import { ExampleSection } from './ExampleSection';
import { NotesSection } from './NotesSection';
import transliterate from './transliteration';
import { alfatehah } from './surahs';

const App = () => {
  const [text, setText] = React.useState('');
  const [index, setIndex] = React.useState(0);
  const [arabicText, setArabicText] = React.useState('');
  const [correct,] = React.useState(transliterate(alfatehah));

  useEffect(() => {
    setArabicText(transliterate(text));
  }, []);

  const onInput: React.FormEventHandler<HTMLTextAreaElement> = (e: React.FormEvent<HTMLTextAreaElement>) => {
    let romanText = e.currentTarget.value;
    setText(romanText);
    let arabicTexto = transliterate(romanText);
    setArabicText(arabicTexto);
    
    if (correct.startsWith(arabicText.trimEnd())) {
      setIndex(arabicText.length);
    } else if (correct.startsWith("")) {
      setIndex(0);
    }
  };

  return (
    <div className="App">
      <header className="App-header">

        <div className="fixedDiv">
          <h1>Revise</h1>

          <p>Roman</p>
          <textarea
            rows={8}
            cols={40}
            id="romanText"
            className="romanText"
            autoCapitalize={"off"}
            onInput={onInput}
            style={{ fontSize: '20px', borderRadius: '8px', padding: '16px', lineHeight: '1.6em', color: '#282c34' }}
          >{text}
          </textarea>
          <br></br>
          <br></br>
          {/* <input type="submit" value="Clear" className="romanTextClear"></input> */}

          <p>Arabic</p>
          <div style={{ whiteSpace: 'pre-wrap', textAlign: 'right', fontSize: '28px', lineHeight: '1.6em' }}>{
            <>
              <span style={{ color: 'rgb(97, 161, 97)' }}>{correct.substring(0, index)}</span>
              <span style={{ color: 'rgb(63, 67, 77)' }}>{correct.substring(index)}</span>
            </>
          }</div>

          {/* <div style={{ whiteSpace: 'pre-wrap', borderRadius: '8px', padding: '16px',textAlign: 'right', lineHeight: '1.6em', border: '1px solid black' }}>{arabicText}</div> */}
        </div>

      </header>

      <NotesSection />

      <ExampleSection />

    </div>
  );
}

export default App;
