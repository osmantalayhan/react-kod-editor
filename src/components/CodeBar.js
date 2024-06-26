import { useState } from "react";
import styles from "components/CodeBar.module.css";
import CssEditor from "components/Editor/CssEditor";
import HtmlEditor from "components/Editor/HtmlEditor";
import JsEditor from "components/Editor/JsEditor";
import { Resizable } from 'react-resizable';



function CodeBar(){

    const [activeTab, setActiveTab] = useState('html');
    const [width, setWidth] = useState(600)

    const onResize = (event, {node, size, handle}) => {
        setWidth(size.width)
      };
    

    return(
        <Resizable width={width} onResize={onResize}>
            <aside className={styles.codebar} style={{width: `${width}px`}}>
                
                <nav className={styles.tab}>
                    <button onClick={() => setActiveTab('html')} className={`${styles.item} ${activeTab === 'html' && styles.activeTab || ''}`}>HTML</button>
                    <button onClick={() => setActiveTab('css')} className={`${styles.item} ${activeTab === 'css' && styles.activeTab || ''}`}>CSS</button>
                    <button onClick={() => setActiveTab('js')} className={`${styles.item} ${activeTab === 'js' && styles.activeTab || ''}`}>JS</button>
                </nav>


                {activeTab === 'html' && <HtmlEditor />}
                {activeTab === 'css' && <CssEditor />}
                {activeTab === 'js' && <JsEditor />}


            </aside>
        </Resizable>
    )
}

export default CodeBar