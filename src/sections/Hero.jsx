// Import React for JSX
import React from 'react'
import { words } from '../constants/index.js'
import Button from '../components/Button.jsx'
import HeroExperience from '../components/HeroModels/HeroExperience.jsx'



// Hero component - Main landing section with animated text and background
const Hero = () => {
    return (
        // Main hero section with relative positioning and overflow hidden
        <section id="hero" className="relative overflow-hidden">
            {/* Background image positioned absolutely */}
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="Background" />
            </div>
            {/* Main layout container for hero content */}
            <div className="hero-layout">
                {/* LEFT : hero content */}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    {/* Container for text content with vertical gap */}
                    <div className='flex flex-col gap-7'>
                        {/* Main hero text with sliding animation */}
                        <div className="hero-text">
                            {/* First line with sliding words */}
                            <h1>Shaping 
                                {/* Sliding animation container - this animates to cycle through the words array, showing each word with its icon sequentially */}
                                <span className="slide">
                                    {/* Wrapper for the animated words */}
                                    <span className="wrapper">
                                        {/* Map over words array to create animated spans */}
                                        {words.map((word) => (
                                            <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                                {/* Icon for each word */}
                                                <img src={word.imgPath} alt={word.text} className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50" />
                                                {/* Word text */}
                                                {word.text}
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            {/* Static text lines */}
                            <h1>Into Reality</h1>
                            <h1>That Deliver Results</h1>
                        </div>
                        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none md:max-w-2xl leading-relaxed">Hi, I'm Sahan Pramuditha - a passionate full-stack developer with 15+ years of experience. I specialize in crafting innovative web solutions that drive results. Let's turn your ideas into reality!</p>
                        <Button className="md:w-80 md:h-16 w-60 h-12" id= "button" text ="See My Work"/>
                    </div>
                </header>
                {/* RIGHT : 3d Model */}
                <figure className="">
                    <div className="hero-3d-layout" >
                        <HeroExperience />
                    </div>
                </figure>
            </div>
        </section>
    );
}

// Export the Hero component as default
export default Hero;