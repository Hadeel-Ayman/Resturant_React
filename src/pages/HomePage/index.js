import React from 'react'
import { MenuSection,HomeSection, AboutSection, SpecialSection, MainContainer, Discount, Ingredients, IconsSection } from '../../sections';
const Home = () => {
    return (
        <>
            <HomeSection />
            <MainContainer>
                <AboutSection />
                <SpecialSection />
                <MenuSection/>
                <Discount/>
                <Ingredients />
                <IconsSection/>
            </MainContainer>
        </>
    )
}
export default Home;
