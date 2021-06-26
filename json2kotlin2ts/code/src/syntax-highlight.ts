import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';
import kotlin from 'highlight.js/lib/languages/kotlin';
import typescript from 'highlight.js/lib/languages/typescript';
import 'highlight.js/styles/vs2015.css';
import { Language } from './types.d';

hljs.registerLanguage('json', json);
hljs.registerLanguage('kotlin', kotlin);
hljs.registerLanguage('typescript', typescript);

const highlight = (text: string, language: Language): string => hljs.highlight(language, text).value;

export default highlight;
