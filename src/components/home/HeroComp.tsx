import Link from "next/link"

const HeroComp = () =>{
    return(
        <>
        <section className="hero-section">
            <div className="hero-container">  
                <img src="/assets/logo/WSO Bordered.png" alt="" />
                <div className="hero-text">
                    <h1>World Science Olympiad</h1>
                    {/* <p>Registration is now open for the World Science Olympiad! Join this prestigious event and gain an unforgettable experience!</p> */}
                    <br />
                    <Link href="#">Registration</Link>
                </div>
            </div>
        </section>
        </>
    )
}

export default HeroComp