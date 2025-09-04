"use client";
import React, { useEffect } from "react";

const NewsletterComp = () =>{
    useEffect(() => {
        const scriptURL =
        "https://script.google.com/macros/s/AKfycbwfw1dAhzyY6p6crVCCuoEXzb_E7hBOi8cYuIBu_-JZzz2a25h-tCvT6Xd3dUH9Mx2fQA/exec";

        const form = document.forms.namedItem("home-newsletter");

        if (form) {
        const handleSubmit = async (e: Event) => {
            e.preventDefault();
            try {
            await fetch(scriptURL, {
                method: "POST",
                body: new FormData(form),
            });
            alert("Data sent successfully!");
            form.reset();
            } catch (error) {
            console.error("Error:", error);
            alert("Failed to send data.");
            }
        };

        form.addEventListener("submit", handleSubmit);

        // cleanup listener
        return () => {
            form.removeEventListener("submit", handleSubmit);
        };
        }
    }, []);
    return(
        <>
        <section className="newsletter-section">
            <div className="newsletter_wrapper">
                <h2 className="newsletter-h2">SUBSCRIBE TO OUR NEWSLETTER</h2>
                <p className="newsletter-p">Subscribe to our newsletter to receive our latest news<br/> and exclusive deals. </p>
                <form className="newsletter-form" action="" method="POST" name="home-newsletter">
                    <input type="text" placeholder="Email for Newsletter" className="newsletter-input" name="Email"/>
                    <button>Subscribe</button>
                </form>
            </div>
        </section>
        </>
    )
}

export default NewsletterComp