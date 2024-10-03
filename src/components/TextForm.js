// import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import React, { useEffect, useState } from 'react'; // Ensure useEffect is imported
export default function TextForm(props) 
{
    const [text, setText] = useState('');
    // const [text, setText] = useState('Enter Text Here :- '); //Text is a variable //setText is UPDATE Variable
    //  console.log( useState('Enter Text Here2 :- '));
    // text="Enter Text Here"; //wrong way to change the state
    // setText=("Enter Text Here KASHYAP"); //correct way to change the state



    // Title Case Code ...
    const handleTitlecaseClick = () => {
        const titleCasedText = text
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        setText(titleCasedText);
        props.showAlert("Text To Convert In Title Case!!!!!", "success")
    };


    //Upper Case Code ....
    const handleUppercaseClick = () => {
        // Convert text to uppercase
        // console.log("Uppercase Was clicked" + text);--this line + text is dynamic code here
        //setText("You Have clicked on handleUppercaseClicked");
        let newText = text.toUpperCase();
        setText(newText); // Update the state with the uppercase text
        props.showAlert("Converted To UpperCase!!!!!", "success")
    };



    //Lower Case Code ......
    const handleLowercaseClick = () => {
        // Convert text to lowercase
        let newText = text.toLowerCase();
        setText(newText); // Update the state with the lowercase text
        props.showAlert("Converted To LowerCase!!!!!", "success")
    };



    //Clear Text  Code....
    const handleClearTextClick = () => {
        // Clear the text by setting the state to an empty string
        setText('');
        props.showAlert("Write In TextArea Text Clear !!!!!", "success")
    };



    //Sentence Case Code.....
    const handleSentencecaseClick = () => {
        let sentences = text.split('. '); // Split text into sentences
        let newText = sentences
            .map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase()) // Capitalize each sentence
            .join('. '); // Join sentences back together
        setText(newText);
        props.showAlert("Converted To Sentence Case!!!!!", "success")
    };



    //Capitalized Case Code ...
    const handleCapitalizedcaseClick = () => {
        let newText = text
            .toLowerCase() // Convert the entire string to lowercase first
            .split(' ') // Split the string into words
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
            .join(' '); // Join the words back together into a string
        setText(newText);
        props.showAlert("Converted To Capitalized Case!!!!!", "success")
        
    };



    //aLtEeNaTiNg Case Code......
    const handleaLtEeNaTiNgcaseClick = () => {
        let newText = text
            .split('') // Split the string into an array of characters
            .map((char, index) => 
                index % 2 === 0 ? char.toUpperCase() : char.toLowerCase() // Alternate case based on index
            )
            .join(''); // Join the characters back together into a string
            setText(newText);
            props.showAlert("Converted To aLtEeNaTiNg Case!!!!!", "success")
    };

    

    //InVeRsE Case code......
    const handleInVeRsEcaseClick = () => {
        const invertedText = text.split('').map(char => 
            char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
        ).join('');
        setText(invertedText);
        props.showAlert("Converted To InVeRsE Case!!!!!", "success")
    };


       const [dataItems, setDataItems] = useState([]);


        // Function to copy dynamic text to clipboard
        const handleCopyToClipboardClick = async (text) => {
            if (!text) {
                console.error('No text provided to copy.');
                props.showAlert('No text to copy.', 'danger'); // Show danger alert if no text is provided
                return;
            }

            try {
                await navigator.clipboard.writeText(text);
                console.log('Copied to clipboard:', text);
                props.showAlert('Text copied to clipboard!', 'success'); // Show success alert on success
            } catch (err) {
                console.error('Failed to copy: ', err);
                props.showAlert('Failed to copy text to clipboard.', 'danger'); // Show danger alert on failure
            }
        };

        useEffect(() => {
            const copyButton = document.getElementById('copyButton');
            const anotherCopyButton = document.getElementById('anotherCopyButton');

            if (copyButton) {
                copyButton.addEventListener('click', () => {
                    const textToCopy = 'This is the dynamic text to copy!';
                    handleCopyToClipboardClick(textToCopy);
                });
            }

            if (anotherCopyButton) {
                anotherCopyButton.addEventListener('click', () => {
                    const someText = 'This is the text I want to copy.';
                    handleCopyToClipboardClick(someText);
                });
            }

            // Cleanup event listeners on component unmount
            return () => {
                if (copyButton) {
                    copyButton.removeEventListener('click', handleCopyToClipboardClick);
                }
                if (anotherCopyButton) {
                    anotherCopyButton.removeEventListener('click', handleCopyToClipboardClick);
                }
            };
        }, []);

        

        //Dowloded TEXT FILE Code ......
         const [textToDownload, setTextToDownload] = useState('');

        const handleTextChange = (event) => {
            setTextToDownload(event.target.value);
        };

        const handleDownloadedTextClick = () => {
            convertAndDownloadText();
        };

        const convertAndDownloadText = () => {
            if (!textToDownload) {
                alert("Please enter some text to download.");
                props.showAlert("No text found in the text area. Please add text before downloading.", "danger");
                return;
            }

            const blob = new Blob([textToDownload], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'downloaded_text.txt';
            document.body.appendChild(a);
            a.click();
            a.remove();
            
            props.showAlert("Text has been successfully downloaded as a .txt file!", "success");
            window.URL.revokeObjectURL(url);
        };

        const handleOnChange = (event) => {
            // console.log("On Changed");
            // Update the state with the current text input
            setText(event.target.value);
        };


        // Send Email code Dummy HAS not working in dynamic has Worked Pending 
        const sendEmail = () => {
            const templateParams = {
                to_name: 'projet1',              // Replace with the recipient's name
                from_name: 'inforway',          // Replace with your name
                message: text,                   // This will be the content of your message
                to_email: 'inforway412@gmail.com' // Add this line for recipient's email
        };

        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
               // alert('Email sent successfully!'); // Alert on success

                props.showAlert("TextArea In Tex Email Send !!!!!", "danger")
            })
            .catch((error) => {
                console.error('Failed to send email:', error);
                //alert('Failed to send email, please try again.'); // Alert on failure
                props.showAlert("TextArea In Tex Email Not Send Clipboard!!!!!", "success")
            });
        };

        //const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0; //Word Count Code....//word in between whitespace is counting
        //Word Count Code....//word in between whitespace not counting
        const wordCount = text.trim().length > 0 ? text.trim().split(/\s+/).length : 0; // Count words, accounting for empty input


        //Charecter Count Code.....
        const characterCount = text.length; // Count characters
        

        // Remove Extra Spaces
        const handleExtraSpaces = () => {
            // Split the text by one or more spaces and filter out empty strings
            let newText = text.split(/[ ] +/);
           // let newText = text.split(/\s+/).filter(Boolean); //same line above logic same
            // Join the filtered array with a single space
            setText(newText.join(" "));
            props.showAlert("TextArea In Text Remove Extra Spaces!!!!!", "error")
        };

           
        //Handler copy text
        const handleCopy = () => {
            // console.log("I am Copying");
            var text = document.getElementById('myBox');
            text.select();
            // text.setSelectionRange(0, 9999); // For mobile devices
            navigator.clipboard.writeText(text.value)
                .then(() => console.log("Copied successfully"))
                .catch(err => console.error("Failed to copy text", err));
               props.showAlert("TextArea In Text Copy Text!!!!!", "success") 
        };
    return (
                    <>
                         <div
                            className="container"
                            style={{
                                color: props.mode === 'dark' ? 'white' : '#042743',
                            }}
                        >
                            <h2>{props.heading}</h2>
                            <div
                                className="container mb-3"
                                style={{
                                    backgroundColor: 
                                        props.greenmode === 'green'
                                            ? 'green'
                                            : props.greenmode === 'lightgreen'
                                            ? 'lightgreen'
                                            : props.mode === 'dark'
                                            ? 'black'
                                            : 'white',
                                }}
                            >
                                <label htmlFor="myBox" className="form-label">
                                    TextArea:
                                </label>
                                <textarea
                                    placeholder="Enter text to Text..."
                                    className="form-control"
                                    value={text}
                                    style={{
                                        backgroundColor:
                                            props.greenmode === 'green'
                                                ? 'green'
                                                : props.greenmode === 'lightgreen'
                                                ? 'lightgreen'
                                                : props.mode === 'dark'
                                                ? 'grey'
                                                : 'white',
                                        color: props.mode === 'dark' ? 'white' : '#042743',
                                    }}
                                    onChange={handleOnChange}
                                    id="myBox"
                                    rows="10"
                                />
                            </div>
                            <button className="btn btn-info me-2" onClick={handleExtraSpaces}>
                                Remove Extra Spaces
                            </button>

                            <button className="btn btn-success me-2" onClick={handleCopy}>
                            Copy Text
                            </button>

                            <button className="btn btn-primary me-2" onClick={handleUppercaseClick}>
                                Convert To UpperCase
                            </button>

                            <button className="btn btn-success me-2" onClick={handleLowercaseClick}>
                                Convert To Lowercase
                            </button>

                            <button className="btn btn-dark me-2" onClick={handleClearTextClick}>
                                Clear Text
                            </button>

                            <button className="btn btn-info me-2" onClick={sendEmail}>
                                Send Email
                            </button>

                            <button className="btn btn-secondary me-2 " onClick={handleSentencecaseClick}>
                                Convert To Sentence Case
                            </button>

                            <button className="btn btn-primary me-2 " onClick={handleCapitalizedcaseClick}>
                                Convert To Capitalized Case
                            </button>

                            <button className="btn btn-success me-2 mt-2" onClick={handleaLtEeNaTiNgcaseClick}>
                                Convert To aLtEeNaTiNg Case
                            </button>
                        
                            <button className="btn btn-dark me-2 mt-2" onClick={handleTitlecaseClick}>
                                Convert To Title Case
                            </button>

                            
                            {/* <div> */}
                                {/* <h1>Text Converter</h1>
                                <textarea 
                                    value={text} 
                                    onChange={(e) => setText(e.target.value)} 
                                /> */}
                                <button className="btn btn-info me-2 mt-2" onClick={handleInVeRsEcaseClick}>
                                    Convert To InVeRsE Case
                                </button>
                                {/* <p>{text}</p> */}
                            {/* </div> */}
                                    
                                {/* <div> */}
                                    <button
                                        className="btn btn-dark me-2 mt-2"
                                        onClick={() => handleCopyToClipboardClick(text)}
                                    >
                                        Copy Clipbord
                                    </button>
                                {/* </div> */}

                                    
                            <div className="container">
                                <textarea
                                    className="form-control md-2 mt-4"
                                    rows="5"
                                    cols="50"
                                    style={{
                                        backgroundColor: 
                                            props.greenmode === 'green'
                                                ? 'green'
                                                : props.greenmode === 'lightgreen'
                                                ? 'lightgreen'
                                                : props.mode === 'dark'
                                                ? 'grey'
                                                : 'white',
                                    }}
                                    placeholder="Enter text to download..."
                                    value={textToDownload}
                                    onChange={handleTextChange}
                                />
                                <br />
                                <button className="btn btn-secondary me-2" onClick={handleDownloadedTextClick}>
                                    Download Text
                                </button>
                            </div>

                            <div
                                className="container my-3"
                                style={{
                                    backgroundColor: 
                                        props.greenmode === 'green'
                                            ? 'green'
                                            : props.greenmode === 'lightgreen'
                                            ? 'lightgreen'
                                            : props.mode === 'dark'
                                            ? 'grey'
                                            : 'white',
                                }}
                            >
                                <h2>Your Text Summary</h2>
                                <p>Word Count: {wordCount}</p>
                                <p>Character Count: {characterCount}</p>
                                <p>{(0.008 * wordCount).toFixed(3)} Minutes of Read</p>
                                <h2>Preview:</h2>
                                <p>{text.length > 0 ? text : 'Enter Something In The Textbox Above To Preview It Here...............'}</p>
                            </div>

                        </div>
                    </>
            );
}
