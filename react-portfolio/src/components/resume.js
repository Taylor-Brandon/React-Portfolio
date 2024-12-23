import React from "react";

export default function Resume() {
    const onButtonClick = () => {
        const fileUrl = process.env.PUBLIC_URL + "/resume.pdf"; 
        console.log("Attempting to download file from:", fileUrl); 

        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "Taylor_Brandon_Resume.pdf"; 
        fetch(fileUrl)
            .then(response => {
                if (response.ok) {
                    console.log("File exists!");
                    link.click();
                } else {
                    console.log("File not found!");
                }
            })
            .catch(err => {
                console.log("Error fetching file:", err);
            });
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


