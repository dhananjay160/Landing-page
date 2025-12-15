import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";


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