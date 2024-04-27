import React, { useState } from "react";
import Webcam from "react-webcam";
import styles from "components/Header.module.css";
import { BsCameraVideo, BsCameraVideoOff, BsRecordCircle } from "react-icons/bs";
import { FaRegStopCircle } from "react-icons/fa";
import Draggable from 'react-draggable'; // The default
import { useReactMediaRecorder } from "react-media-recorder";



function Header(){

    const [talkingHead, setTalkingHead] = useState(false)

    const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true, screen: true});

    return(
        <>
            <header className={styles.header}>

                {mediaBlobUrl && status === 'stopped' && (
                    <a href={mediaBlobUrl} download={"video.mp4"} className={`${styles.button} ${styles.downloadButton}`}>
                        Download Video
                    </a>
                )}

              

                {(status === 'idle' || status === 'stopped') && (
                    <button onClick={startRecording} className={styles.button}>
                        <BsRecordCircle fill="#2dfb2d" size={24} />
                    </button>
                )}
                {status === 'recording' && (
                    <button onClick={stopRecording} className={styles.button}>
                        <FaRegStopCircle fill="#f34040" size={24} />
                    </button>
                )}

                <button onClick={() => setTalkingHead(!talkingHead)} className={styles.button}>
                    {talkingHead && <BsCameraVideoOff fill="#ddd" size={24} /> || <BsCameraVideo fill="#ddd" size={24} />}
                </button>
            </header>
            {talkingHead && <Draggable><Webcam className={styles.camera} audio={false} width={280} height={280} videoConstraints ={{
                        width: 300,
                        height: 300,
                        facingMode: "user"
                    }}/>
                </Draggable>
            }
        </>
    )
}

export default Header