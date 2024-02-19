import React, { useState } from 'react';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      alert('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      // const response = await axios.post('YOUR_BACKEND_ENDPOINT', formData, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data'
      //   }
      // });
      // console.log('File uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="App">
      <h1>File Uploader</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default App;
