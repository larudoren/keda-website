import React, { useState } from 'react';
import { Button } from '../ButtonElement';
import {  
    HeroContainer, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowFoward, 
    ArrowRight,  
    HeroBg
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <HeroBg>

            </HeroBg>
            <HeroContent>
                <HeroH1>The most agile ERP on the planet</HeroH1>
                <HeroP>
                    ERPNext is the world's best free and open source ERP
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="/" onMouseEnter={onHover} onMouseLeave={onHover}
                    primary="true" dark="true"
                    >
                        Get started {hover ? <ArrowFoward /> : <ArrowRight />}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
