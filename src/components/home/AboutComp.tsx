import Link from "next/link"

const AboutComp = () =>{
    return(
    <>
    <section className="about-section">
        <div className="about-content">
            <img src="/assets/logo/WSO Bordered.png" alt="" />
            <div className="about-text">
                <h1>WSO</h1>
                <h5>World Science Olympiad</h5>
                <p>Mastery of knowledge with high integrity values is one of the main
conditions for the progress of a nation. The development of the
International Achievement Center has made various efforts to
develop the talents and interests of elementary and high school
students and the equivalent. These efforts are carried out through
various international competitions. It is hoped that this WSO can lead
students to master science. This competition is also an important
part of achieving talent and maximizing the potential of talented and
characterful students from all over the world. </p>
                <Link href="/about">Read More</Link>
            </div>
        </div>
    </section>
    </>
    )
}

export default AboutComp