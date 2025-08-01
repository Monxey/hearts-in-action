import '../App.css';
import './Home.css';
import image_7 from "../assets/image_7.png";
import { BookOpenText, Heart, Users, GraduationCap, Utensils } from "lucide-react";
import { NavLink } from 'react-router-dom';

function Home() {
    return ( 
        <>
        <div className='content'>
            {/*Hero Section*/}
            <section className='gradient-section'>
                <div className='container'>
                    <div className='grid'>
                        <div style={{maxWidth: '40rem'}}>
                            <h1 className='home-h1' style={{textAlign: 'left', fontSize: '2.25rem'}}>Fighting Food Insecurity at{" "}
                            <span style={{color: '#f08080'}}>UMD</span>
                            </h1>
                            <p style={{fontSize: '1.5rem', textAlign: 'left', color: 'var(--gray-primary)', borderBottom: '0.1rem solid white', paddingBottom: '4rem'}}>
                            Over 27% of UMD students face food insecurity. That's 1 in 4 of our peers 
                            struggling to afford their next meal. Join Hearts in Action to break this cycle.
                            </p>
                        </div>
                        <div style={{position: 'relative'}}>
                            <img src={image_7} alt="image_7" style={{borderRadius: '0.5rem', border: '0.1rem solid white', width: '40rem'}} />
                            <div className="caption">
                                <span style={{fontSize: '1.5rem', color: '#f08080'}}><b>27%</b></span>
                                <div>of UMD students face food insecurity</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Statistics*/}
            <section className='stat-background'>
                <div className='header-layout'>
                    <h1 className='home-h1'>The Reality of Food Insecurity</h1>
                    <p className='header-description' style={{color: 'var(--gray-primary)'}}>These aren't just numbers—they represent real students in our community who need our support.</p>
                </div>
                <div className='card-layout'>
                    <div className='card' style={{backgroundColor: 'rgba(196, 0, 0, 0.2)'}}>
                        <div className='card-title'>40%</div>
                        <div className='card-desc'>Fall asleep in class or can't focus due to hunger</div>
                    </div>
                    <div className='card' style={{backgroundColor: 'rgba(170, 111, 0, 0.2)'}}>
                        <div className='card-title'>13%</div>
                        <div className='card-desc'>Have failed assignments because they didn't have enough to eat</div>
                    </div>
                    <div className='card' style={{backgroundColor: 'rgba(179, 90, 90, 0.2)'}}>
                        <div className='card-title'>25%</div>
                        <div className='card-desc'>Students struggle to afford their next meal</div>
                    </div>
                </div>
            </section>
            {/*How We Help*/}
            <section className='help-background'>
                <div className='header-layout'>
                    <h1 className='home-h1'>How We Help</h1>
                    <p className='header-description' style={{color: 'var(--gray-primary)'}}>
                        Hearts in Action provides comprehensive support to address food and material insecurity 
                        in our community through various initiatives.
                    </p>
                </div>
                <div className='card-layout'>
                    <div className='card'>
                        <div className='icon-layout'>
                            <div className='icon'>  
                                <Utensils style={{color:'white', height:'60%', width: '60%'}}/>
                            </div>
                            <div className='help-card-title'>Food Drives</div>
                        </div>
                        <div className='help-card-desc'>Regular food collection and distribution to students in need, ensuring no one goes hungry.</div>
                    </div>
                    <div className='card'>
                        <div className='icon-layout'>
                            <div className='icon'>
                                <Users style={{color:'white', height:'60%', width: '60%'}}/>
                            </div>
                            <div className='help-card-title'>Clothing Assistance</div>
                        </div>
                        <div className='help-card-desc'>Warm clothing and professional attire for students to succeed academically and professionally.</div>
                    </div>
                    <div className='card'>
                        <div className='icon-layout'>
                            <div className='icon'>
                                <GraduationCap style={{color:'white', height:'60%', width: '60%'}}/>
                            </div>
                            <div className='help-card-title'>Educational Support</div>
                        </div>
                        <div className='help-card-desc'>School supplies and resources for academic success, removing barriers to education.</div>
                    </div>
                </div>
            </section>
            {/*How You Can Help*/}
            <section className='red-background' style= {{ padding: '2rem 2rem'}}>
                <div className='header-layout'>
                    <h1 className='home-h1'>Make a Difference</h1>
                    <p className='header-description' style={{color: 'var(--gray-primary)'}}>
                        Every action counts. Whether you donate, volunteer, or spread awareness, you can help break the cycle of food insecurity.
                    </p>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', margin: '0 auto 2rem', gap: '2rem'}}>
                    <NavLink className="button donate button-transition" to='/donate'>
                            Donate
                            <Heart style={{color:'var(--brand-secondary)', height:'1.5rem', width: '1.5rem'}}/> 
                    </NavLink>
                    <a className="button volunteer button-transition" href="https://docs.google.com/forms/d/e/1FAIpQLSd6an51-ZwG-ECVu6EZjxhaqs5CFYUOHxMBwW6c4P9KbUDc1A/viewform?fbclid=PAZXh0bgNhZW0CMTEAAafYZR3yFbKsiGBYyKinROG9mZMdK5NcPPQp-XY7oI2LvQPvq0SfG4eTXohVEw_aem_2IUtKpN5uYV4VQC8uQB82w" target="_blank" rel="noopener noreferrer">
                            Volunteer
                    </a>
                    <NavLink className= 'button learn-more button-transition' to='/about'>
                        Learn More
                        <BookOpenText style={{height:'1.5rem', width: '1.5rem'}}/>
                    </NavLink>
                </div>
            </section>
        </div>
        </>
    )
}

export default Home;