import AceEditor from 'react-ace'

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/snippets/html"
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";
import { EditorContext, useContext } from 'context';

function HtmlEditor(){

    const {html, setHtml} = useContext(EditorContext)

    return(
        <AceEditor
                placeholder="Write your HTML codes here!"
                mode="html"
                theme="monokai"
                name="editor_html"
                fontSize={16}
                value={html}
                width={'100%'}
                onChange={val => setHtml(val)}
                showPrintMargin={true}
                showGutter={false}
                highlightActiveLine={true}
                setOptions={{
                useWorker: false,
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: false,
                tabSize: 2,
            }} />

    )
}

export default HtmlEditor