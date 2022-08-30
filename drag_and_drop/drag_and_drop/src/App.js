import React, { useState } from 'react'
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview,FilePondPluginFileEncode);

const App =()=> {
  const [files, setFiles] = useState([])


  const file=(error,data)=>{
    console.log("data",data.file);
  }

  return (
    <div className="App">
      <FilePond
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={true}
        maxFiles={3}  
        onaddfile={file}
        name="files"
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </div>
  )
}

export default App;
