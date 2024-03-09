// FAQ.js
import React, { useState } from 'react';

function FAQ({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="faq-item">
            <div onClick={toggleOpen} className="question">
                <h3>{question}</h3>
            </div>
            {isOpen && <p className="answer">{answer}</p>}
        </div>
    );
}

export default FAQ;
