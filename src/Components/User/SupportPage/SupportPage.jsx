// App.js
import React from 'react';
import '../SupportPage/SupportPage.css';
import FAQ from '../SupportPage/FAQ';

function SupportPage() {
    const faqs = [
        { id: 1, question: "How do I place an order?", answer: "To place an order, simply browse our products, add the desired items to your cart, and proceed to checkout." },
        { id: 2, question: "What payment methods do you accept?", answer: "We accept all major credit and debit cards, as well as PayPal." },
        { id: 3, question: "How can I track my order?", answer: "Once your order has been shipped, you will receive a tracking number via email. You can use this tracking number to monitor the status of your delivery." }
    ];

    return (
        <div className="support-page">
            <h1>Support</h1>
            <div className="faq-section">
                <h2>FAQs</h2>
                {faqs.map(faq => (
                    <FAQ key={faq.id} question={faq.question} answer={faq.answer} />
                ))}
            </div>
            <div className="contact-section">
                <h2>Contact Us</h2>
                <p>If you have any further questions or concerns, feel free to contact us using the form below:</p>
                <form className="contact-form">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default SupportPage;
