import React,  { useState, useRef } from 'react';
import "../Dropzone/dropzone.css";

const DropZone = () => {
    
    

    const dragOver = (e) => {
        e.preventDefault();
    }
    
    const dragEnter = (e) => {
        e.preventDefault();
    }
    
    const dragLeave = (e) => {
        e.preventDefault();
    }
    
    const fileDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (files.length) {
            handleFiles(files);
        }
    }

    const handleFiles = (files) => {
        for(let i = 0; i < files.length; i++) {
            if (validateFile(files[i])) {
                setSelectedFiles(prevArray => [...prevArray, files[i]]);
            } else {
                files[i]['invalid'] = true;
                setSelectedFiles(prevArray => [...prevArray, files[i]]);
                setErrorMessage('File type not permitted');
                setUnsupportedFiles(prevArray => [...prevArray, files[i]]);
            }
        }
    }

    const validateFile = (file) => {
        const validTypes = ['*'];
        if (validTypes.indexOf(file.type) === 1) {
            return false;
        }
        return true;
    }

    const fileSize = (size) => {
        if (size === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(size) / Math.log(k));
        return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    const fileType = (fileName) => {
        return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) || fileName;
    }

    const removeFile = (name) => {
        // find the index of the item
        // remove the item from array
    
        const validFileIndex = validFiles.findIndex(e => e.name === name);
        validFiles.splice(validFileIndex, 1);
        // update validFiles array
        setValidFiles([...validFiles]);
        const selectedFileIndex = selectedFiles.findIndex(e => e.name === name);
        selectedFiles.splice(selectedFileIndex, 1);
        // update selectedFiles array
        setSelectedFiles([...selectedFiles]);

        const unsupportedFileIndex = unsupportedFiles.findIndex(e => e.name === name);
        if (unsupportedFileIndex !== -1) {
            unsupportedFiles.splice(unsupportedFileIndex, 1);
            // update unsupportedFiles array
            setUnsupportedFiles([...unsupportedFiles]);
        }
    }
   
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [validFiles, setValidFiles] = useState([]);
    const [unsupportedFiles, setUnsupportedFiles] = useState([]);

    const fileInputClicked = () => {
        fileInputRef.current.click();
    }
    const filesSelected = () => {
        if (fileInputRef.current.files.length) {
            handleFiles(fileInputRef.current.files);
        }
    }
    const fileInputRef = useRef();

    return (
        <>
        <div className="containerdrop">
                <div style={{display: "flex"}}>
                    {/* <Button color="success" className="file-upload-btn" >Upload Files</Button>  */}
                    {unsupportedFiles.length ? <p style={{color: "red", fontWeight:"normal", marginTop: "8px", marginLeft: "40px"}}>Please remove all unsupported files.</p> : ''}
                </div>
            <div className="drop-container" 
                onDragOver={dragOver}
                onDragEnter={dragEnter}
                onDragLeave={dragLeave}
                onDrop={fileDrop}
                onClick={fileInputClicked}>
                <div className="drop-message">
                    <div className="upload-icon"></div>
                    Drag & Drop files here or click to upload
                </div>  
                <input
                    ref={fileInputRef}
                    className="file-input"
                    type="file"
                    multiple
                    onChange={filesSelected}
                />
            </div>

            <div className="file-display-container">
                {
                   selectedFiles.map((data, i) => 
                        <div className="file-status-bar" key={i}>
                            <div>
                                    <div className="file-type-logo"></div>
                                    <div className="file-type">{fileType(data.name)}</div>
                                    <span className={`file-name ${data.invalid ? 'file-error' : ''}`}>{data.name}</span>
                                    <span className="file-size">({fileSize(data.size)})</span> {data.invalid && <span className='file-error-message'>({errorMessage})</span>}
                            </div>
                            <div className="file-remove" onClick={() => removeFile(data.name)}><i className="ni ni-fat-remove"></i></div>
                        </div>
                    )
                }
            </div>
        </div>
        
        </>
    )
}
export default DropZone;