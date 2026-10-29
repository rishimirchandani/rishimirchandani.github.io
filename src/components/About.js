import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
    render() {
        return (
            <div className="Section About">
                <div className="about-content">
                    <div className="about-text">
                        <p> After amassing six gold medals in major national and international competitions, Indian-American pianist Rishi Mirchandani <Link to="/media#ravel">debuted</Link> as soloist with the Grammy award-winning Pittsburgh Symphony Orchestra at the age of 18. He made his first of four appearances at Carnegie Hall in New York at age 12, and he has performed to critical acclaim in the Czech Republic, England, France, Germany, Italy, Portugal, Spain, and the United States. </p>
            
                        <p>His debut album featuring the complete solo piano etudes of Claude Debussy and Karen Tanaka will be released on the Sono Luminus label on 2 April 2027 and will be distributed on all major platforms by Naxos.</p>
                    
                        <p>Mirchandani holds a bachelor's degree in mathematics, <i>summa cum laude</i>, from Yale University. He was one of twelve students (top 1%) in his year admitted to the Phi Beta Kappa honour society as a third-year student. While pursuing his mathematics degree, he also studied piano with Elizabeth Parisot and founded the <a href="http://yalepiano.org/"  target="_blank" rel="noopener noreferrer">Yale Undergraduate Piano Collective</a>.</p>
                    
                        <p>He subsequently moved to New York to focus on music professionally, completing postgraduate studies on scholarship at the Manhattan School of Music and the Mannes School of Music with high honours. He studied with Jeffrey Cohen, Solomon Mikowsky, and Thomas Sauer. Mirchandani quickly became a New York audience favourite, receiving invitations to appear at Carnegie Hall, the Bohemian National Hall, the German Consulate of the U.N., the Union Club, Klavierhaus NYC, and more. He won the coveted Steinway Award for artistic excellence and service to Mannes.</p>
                                        
                        <p>Now based in London, Mirchandani completed an Artist Diploma at the Royal College of Music in 2025. He was sponsored by the institution as an RCM Scholar and studied with Dmitri Alexeev, Ian Jones, and Andrew Zolinsky. As chair of the jury for his diploma recital, Prof. Vanessa Latarche remarked, “There were some moments of magic… Having such a large audience to this recital made it feel like a really special occasion, which it was.”</p>
                    
                        <p>He has received additional guidance in masterclasses taught by Boris Berman, Richard Goode, <Link to="/media#langlang">Lang Lang</Link>, Robert McDonald, and Eldar Nebolsin. Mirchandani's recording of Nancy Galbraith's <Link to="/media#preludes">Three Preludes for Piano</Link> was featured on the acclaimed Centaur Records album <i>Strange Travels</i>, which garnered a spot on the "Want List" in <i>Fanfare Magazine</i>.</p>
                    
                        <p>A native of Pittsburgh, Mirchandani attended the Carnegie Mellon University Preparatory School of Music throughout his childhood and teenage years, working extensively with Luz Manríquez. Now a committed teacher himself, Mirchandani is part of the piano faculty at England's renowned <a href="https://www.charterhouse.org.uk/">Charterhouse School</a>. He previously served as a Teaching Artist for <a href="https://www.midoriandfriends.org/">Midori & Friends</a> and a Teaching Fellow at the Mannes School of Music. He has also returned to the Carnegie Mellon University Preparatory School of Music to give masterclasses as guest artist. His students have routinely earned high honours in exams and competitions, including invitations to perform at Carnegie Hall.</p>
            
                        <p>In recent seasons, Mirchandani has given solo performances at the Royal Albert Hall's Elgar Room, Carnegie Hall's Weill Recital Hall, and the University Church at Oxford. His <Link to="/concerts">schedule</Link> this season includes a lecture-recital on mathematics and music, a London recital celebrating the release of his debut album, and a debut appearance with soprano Maria Kożewnikow at the "Music of Thousands" Mahler Jihlava Festival in the Czech Republic. </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
