import React from "react";

export default function Resume() {
    const onButtonClick = () => {
       
        const fileUrl = "/resume.pdf"; 
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "Taylor_Brandon_Resume.pdf"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="resume-area">
            <h1 id="resume-header">Download Resume</h1>
            <button onClick={onButtonClick} className="btn">
                <i id="down-btn" className="bi bi-file-earmark-arrow-down"></i>
            </button>
        </div>
    );
}



