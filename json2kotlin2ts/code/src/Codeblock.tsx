import React, { useState } from 'react';
import './App.css';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable'
import { Language } from './types.d';
import highlight from './syntax-highlight';

const toTitle = (language: Language): string => {
    switch (language) {
        case Language.JSON: return "JSON";
        case Language.Kotlin: return "Kotlin";
        case Language.TypeScript: return "TypeScript";
    };
}

interface CodeblockProps {
    code: string,
    onInput?: (code: string) => void,
    language: Language,
    editable: boolean,
};

const Codeblock: React.FC<CodeblockProps> = ({ code, onInput, language, editable }) => {

    const ref = React.createRef<any>(); // any because the lib defined the type poorly
    const [caretPos, setCaretPos] = useState(0);
    // const [caretParentNode, setCaretParentNode] = useState<ParentNode | null>(null);
    const [caretParentNodeIdx, setCaretParentNodeIdx] = useState<number | null>(null);

    const handleOnChange = (evt: ContentEditableEvent) => {
        if (ref) {
            // setCaret();
            let htmlDivElRef = ref.current.el as React.MutableRefObject<HTMLDivElement>;
            let newClearText = htmlDivElRef.current.textContent ?? "";
            onInput?.(newClearText);
        }
    };

    const handleOnKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (event) => {
        if (event.key === "Tab") {
            event.preventDefault();
            alert("Congrats! You found a feature that is currently being worked on! Press space 4 times instead.");
        }
    };

    // Problematic
    // eslint-disable-next-line
    const setCaret = () => {

        let el = document.getElementsByClassName("App-code")[0];
        let range = document.createRange();
        let sel = window.getSelection();

        if (sel && sel.rangeCount) {
            let oldRange = sel.getRangeAt(0);
            let node = oldRange.commonAncestorContainer.parentNode;

            console.log(node)

            if (node === el) {
                // idk why it comes here)
                // range.setStart(caretNode!, caretPos);


                // if (node.childNodes[caretParentNodeIdx!].firstChild!.textContent!.length <= caretPos) {
                console.log(node.childNodes[caretParentNodeIdx!].firstChild!.textContent?.length);
                console.log(caretPos)

                range.setStart(node.childNodes[caretParentNodeIdx!].firstChild!, caretPos);
                // range.setStart(node.childNodes[8].firstChild, caretPos);
                // range.setStart((caretParentNode! as any).firstChild, caretPos);

                range.collapse(true)
                sel.removeAllRanges()
                sel.addRange(range)
                // }
            } else if (node !== null) {

                alert(node.childNodes.length)

                // true branch
                let caretPos = oldRange.endOffset;
                range.setStart(node.firstChild!, caretPos);
                setCaretPos(caretPos);
                // setCaretParentNode(node);

                range.collapse(true)
                sel.removeAllRanges()
                sel.addRange(range)

                var i = 0;
                while (((node as any) = node.previousSibling) != null)
                    i++;
                setCaretParentNodeIdx(i);
                alert(i)

            } else {
                alert('dfvd')
            }
        }
    }

    return <>
        <p>{toTitle(language)}</p>
        <ContentEditable
            className="App-code"
            ref={ref}
            html={highlight(code, language)}
            onChange={handleOnChange}
            onKeyDown={handleOnKeyDown}
            disabled={!editable}
        />
    </>;
}

export default Codeblock;
