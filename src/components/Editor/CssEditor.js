import AceEditor from 'react-ace'
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/snippets/css"
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";
import { useContext, EditorContext } from 'context';

function CssEditor(){

    const {css, setCss} = useContext(EditorContext)

    return(
        <AceEditor
                placeholder="Write your CSS codes here!"
                mode="css"
                theme="monokai"
                name="editor_css"
                fontSize={16}
                value={css}
                onChange={val => setCss(val)}
                showPrintMargin={true}
                width={'100%'}
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

export default CssEditor