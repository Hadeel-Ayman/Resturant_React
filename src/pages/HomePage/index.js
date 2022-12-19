import React from 'react'
import { MenuSection, HomeSection, AboutSection, SpecialSection, MainContainer, Discount, Ingredients, IconsSection, ReviewsSection, BlogsSection } from '../../sections';
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
                <BlogsSection/>
            </MainContainer>
        </>
    )
}
export default Home;
