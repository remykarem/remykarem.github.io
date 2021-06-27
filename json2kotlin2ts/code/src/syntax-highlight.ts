import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';
import kotlin from 'highlight.js/lib/languages/kotlin';
import typescript from 'highlight.js/lib/languages/typescript';
import { Language } from './types.d';
import 'highlight.js/styles/base16/tomorrow-night.css';
// import 'highlight.js/styles/vs2015.css';

// don't use these
// import 'highlight.js/styles/base16/seti-ui.css';
// import 'highlight.js/styles/an-old-hope.css';
// import 'highlight.js/styles/stackoverflow-dark.css';
// import 'highlight.js/styles/atom-one-dark.css';
// import 'highlight.js/styles/lioshi.css';
// import 'highlight.js/styles/github-dark-dimmed.css';

hljs.registerLanguage(Language.JSON, json);
hljs.registerLanguage(Language.Kotlin, kotlin);
hljs.registerLanguage(Language.TypeScript, typescript);

const highlight = (text: string, language: Language): string => {
    return hljs.highlight(text, { language: language }).value;
};

export default highlight;
