"use client";
import React, { useEffect } from "react";
import Link from "next/link"

const ContactComp = () =>{
    useEffect(() => {
        const scriptURL =
        "https://script.google.com/macros/s/AKfycbzdgUOy_s6zjJQTgqXQ7GX3H1_w6TvWq1hsBZgH0mSREWt3qXCKA34-qo74-jfDVbHE/exec";

        const form = document.forms.namedItem("home-contact");

        if (form) {
        const handleSubmit = async (e: Event) => {
            e.preventDefault();
            try {
            await fetch(scriptURL, {
                method: "POST",
                body: new FormData(form),
            });
            alert("Message sent successfully!");
            form.reset();
            } catch (error) {
            console.error("Error:", error);
            alert("Failed to send Message.");
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
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <h1>Contact Us</h1>
                <div className="content">
                    <div className="left-side">
                        <div className="address details">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="text-one">Address</div>
                            <div className="text-one"><Link href="https://goo.gl/maps/9x18coXGCmSscKec6" target="_blank">Jl. Kemang, Pasir Putih, Kecamatan. Sawangan, Kota Depok, Jawa Barat 16519</Link></div>
                            <div className="text-two"></div>
                        </div>
                        <div className="phone details">
                            <i className="fas fa-phone-alt"></i>
                            <div className="text-one">Phone</div>
                            <div className="text-one"><Link href="https://wa.me/+6283870026877" target="_blank">+6283870026877</Link></div>
                            <div className="text-two"></div>
                        </div>
                        <div className="email details">
                            <i className="fas fa-envelope"></i>
                            <div className="text-one">Email</div>
                            <div className="text-one"><Link href="mailto:iysa.olympiad@gmail.com" target="_blank"> iysa.olympiad@gmail.com</Link></div>
                            <div className="text-two"></div>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="topic-text">Send us a message</div>
                        {/* <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. it's my pleasure to help you.</p> */}
                        <form action="" method="POST" name="home-contact">
                            <input type="hidden" name="Event" value="WSO" readOnly />
                            <div className="input-box">
                                <input type="text" name="Name" placeholder="Enter your name"/>
                            </div>
                            <div className="input-box">
                                <input type="email" name="Email" placeholder="Enter your email"/>
                            </div>
                            <div className="input-box message-box">
                                <textarea placeholder="Enter your message" name="Message"></textarea>
                            </div>
                            <div className="button">
                                <input type="submit" value={"Send"}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>       
    )
}

export default ContactComp