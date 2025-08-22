const NewsletterComp = () =>{
    return(
        <>
        <section className="newsletter-section">
            <div className="newsletter_wrapper">
                <h2 className="newsletter-h2">SUBSCRIBE TO OUR NEWSLETTER</h2>
                <p className="newsletter-p">Subscribe to our newsletter to receive our latest news<br/> and exclusive deals. </p>
                <form className="newsletter-form" action="https://formspree.io/f/xoqgjrok" method="POST">
                    <input type="text" placeholder="Email for Newsletter" className="newsletter-input"/>
                    <button>Subscribe</button>
                </form>
            </div>
        </section>
        </>
    )
}

export default NewsletterComp