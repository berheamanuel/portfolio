// export default function Resume() {
import React from 'react';
// import resume from '../assets/resume.pdf';

export default function Resume() {
  const handleDownload = () => {
    // Logic to handle file download
    // For example, you can use the 'download' attribute of an anchor tag
    const fileUrl = '../assets/resume.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <div>
      <h1>Resume</h1>
      <p>
        {/* Add a button or link to trigger the file download */}
        <button onClick={handleDownload}>Download Resume</button>
      </p>
    </div>
  );
}
    
   
