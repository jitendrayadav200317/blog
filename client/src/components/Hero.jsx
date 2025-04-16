import react from "react";
import img from '../assets/hero.png'
const Hero = ()=>{
    return (
        <section class="hero">
        <div class="hero-content">
            <h1>CREATE <span>A BLOG</span></h1>
            <p>Share your story with the world. Create a beautiful, personalized blog that fits your brand.</p>
            <a href="#" class="explore-link">Explore now</a>
        </div>
        <div class="hero-image">
            {/* <img src="blog-character.png" alt="Blogger Illustration"> */}
        </div>
    </section>
    )
}
export default Hero;