import './globals.css'

import HeroComp from '@/components/home/HeroComp'
import AboutComp from '@/components/home/AboutComp'
import AfterEventComp from '@/components/home/AfterEventComp'
import ContactComp from '@/components/home/ContactComp'
import LogoComp from '@/components/home/LogoComp'
import NewsletterComp from '@/components/home/NewsletterComp'
import CategoryComp from '@/components/home/CategoryComp'


export default function HomePages() {
    return(
        <>
        <br />
        <br />
        <br />
        <HeroComp></HeroComp>
        <AboutComp></AboutComp>
        <CategoryComp></CategoryComp>
        <AfterEventComp></AfterEventComp>
        <ContactComp></ContactComp>
        <LogoComp/>
        <NewsletterComp></NewsletterComp>
        </>
    )
}


