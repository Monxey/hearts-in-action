import '../App.css'
import './Home.css'
import image_7 from "../assets/image_7.png"
import { Heart, Users, GraduationCap, Utensils } from "lucide-react";

function Home() {
    return ( 
        <>
        {/*Hero Section*/}
        <section className='gradient-section'>
            <div className='grid'>
                <div style={{maxWidth: '600px'}}>
                    <h1 style={{textAlign: 'left', fontSize: '36px'}}>Fighting Food Insecurity at{" "}
                    <span style={{color: '#f08080'}}>UMD</span>
                    </h1>
                    <p style={{fontSize: '24px', textAlign: 'left', color: 'var(--gray-primary)', borderBottom: '0.1rem solid white', paddingBottom: '4rem'}}>
                    Over 27% of UMD students face food insecurity. That's 1 in 4 of our peers 
                    struggling to afford their next meal. Join Hearts in Action to break this cycle.
                    </p>
                </div>
                <div style={{position: 'relative'}}>
                    <img src={image_7} alt="image_7" style={{borderRadius: '0.5rem', border: '0.1rem solid white'}} />
                    <div className="caption">
                        <span style={{fontSize: '1.5rem', color: '#f08080'}}><b>27%</b></span>
                        <div>of UMD students face food insecurity</div>
                    </div>
                </div>
            </div>
        </section>
        {/*Statistics*/}
        <section className='stat-background'>
            <div className='header-layout'>
                <h1>The Reality of Food Insecurity</h1>
                <p className='header-description' style={{color: 'var(--gray-primary)'}}>These aren't just numbers—they represent real students in our community who need our support.</p>
            </div>
            <div className='card-layout'>
                <div className='card' style={{backgroundColor: 'rgba(196, 0, 0, 0.1)'}}>
                    <div className='card-title'>40%</div>
                    <div className='card-desc'>Fall asleep in class or can't focus due to hunger</div>
                </div>
                <div className='card' style={{backgroundColor: 'rgba(170, 111, 0, 0.1)'}}>
                    <div className='card-title'>13%</div>
                    <div className='card-desc'>Have failed assignments because they didn't have enough to eat</div>
                </div>
                <div className='card' style={{backgroundColor: 'rgba(179, 90, 90, 0.1)'}}>
                    <div className='card-title'>25%</div>
                    <div className='card-desc'>Students struggle to afford their next meal</div>
                </div>
            </div>
        </section>
        {/*How We Help*/}
        <section className='help-background'>
            <div className='header-layout'>
                <h1>How We Help</h1>
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
        </>
    )
}

export default Home;