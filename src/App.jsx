import Hero from "./Components/Hero";
import About from "./Components/About";
import Features from "./Components/Features";
import ContactCTA from "./Components/ContactCTA";
import Footer from "./Components/Footer";


export default function App() {
return (
<div className="font-sans">
<Hero />
<About/>
<Features />
<ContactCTA />
<Footer />
</div>
);
}