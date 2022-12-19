import React from 'react'
import { MenuSection, HomeSection, AboutSection, SpecialSection, MainContainer, Contact, Discount, Ingredients, IconsSection, ReviewsSection, BlogsSection, SubscribeSection, Footer } from '../../sections';
const Home = () => {
    return (
        <>
            <HomeSection />
            <MainContainer>
                <AboutSection />
                <SpecialSection />
                <MenuSection />
                <Discount />
                <Ingredients />
                <IconsSection />
                <ReviewsSection />
                <BlogsSection />
                <Contact />
                <SubscribeSection/>
                <Footer/>
            </MainContainer>
        </>
    )
}
export default Home;
