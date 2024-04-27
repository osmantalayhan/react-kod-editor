import AceEditor from 'react-ace'

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/snippets/javascript"
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";
import { EditorContext, useContext } from 'context';

function JsEditor(){

    const {js, setJs} = useContext(EditorContext)


    return(
        <AceEditor
                placeholder="Write your JavaScript codes here!"
                mode="javascript"
                theme="monokai"
                name="editor_js"
                fontSize={16}
                value={js}
                width={'100%'}
                onChange={val => setJs(val)}
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

export default JsEditor