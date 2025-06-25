import styles from './About.module.css'
import image_6 from '../assets/image_6.png'
import food_image from '../assets/food_rations_stock.jpg'
import {Users, Timer, University} from 'lucide-react'
import Student from '../assets/student.png'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/hia_logo.png'

function About() {
    return ( 
    <>
    <div className={styles.content}>
             {/*The Problem*/}
        <div>     
            <section>
                <div className={styles['first-background']}>
                    <div style={{margin: '0 30%'}}>
                        <h1 className={styles['h1']}>
                            The Problem
                        </h1>
                    </div>
                    
                    <div className={styles['description']}>
                        <p>
                            Many children and families from underserved backgrounds face daily
                            challenges due to a profound lack of access to basic resources. This includes
                            fundamental necessities such as nutritious food, appropriate clothing for
                            various seasons, essential educational supplies, and often, critical emotional
                            support systems. These systemic barriers do not merely create temporary
                            discomfort; they actively hinder personal growth, significantly limit
                            educational opportunities, and impede full participation within the
                            community. The ripple effects of these challenges can perpetuate cycles of
                            disadvantage, making it incredibly difficult for individuals and families to
                            break free.
                        </p>
                        <p>
                            Furthermore, even within the seemingly supportive environment of college
                            campuses, food insecurity is a prevalent and often overlooked issue. Students
                            frequently experience hunger, particularly during late-night study sessions or
                            in the long stretches between classes, when access to convenient and
                            affordable snacks or meals is limited. This consistent lack of accessible
                            sustenance negatively impacts student well-being, diminishes cognitive
                            function, impairs academic focus, and drains energy levels, ultimately
                            affecting their ability to thrive both academically and personally.
                        </p>
                        <p>
                            Without consistent support systems or robust community-driven initiatives,
                            cycles of poverty and disadvantage tend to continue, trapping individuals and
                            families in a difficult predicament. Our organization, Hearts in Action, aims to
                            strategically disrupt this cycle—both within the broader off-campus
                            community and directly among our own student body. By addressing these
                            critical resource gaps and fostering a culture of mutual aid, we strive to create
                            lasting positive change and build a more equitable environment for all.
                        </p>
                    </div>
                </div>
            </section> 
            {/*Our Mission*/}
            <section>
                <div className={styles['second-background']}>
                    <div style={{margin: '0 30%'}}>
                        <h1 className={styles['h1']} >
                            Our Mission
                        </h1>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'start', gap: '4rem'}}>
                        <div className={styles['description']} style={{backgroundColor: 'var(--brand-dark-alt)', borderRadius: '1rem', padding: '1rem'}}>
                            <p>
                                Hearts in Action is steadfastly committed to uplifting our community by
                                organizing dynamic, student-driven service initiatives that directly address the
                                material and emotional needs of those most at risk. Our comprehensive
                                approach encompasses a variety of impactful programs designed to provide
                                immediate relief and foster long-term stability.
                            </p>
                            <p>
                                Through carefully organized clothing drives, we ensure individuals have
                                access to dignity-preserving attire. Our food distributions combat hunger and
                                provide essential nourishment. During holiday periods, our toy donations bring joy and a sense of belonging to families who might
                                otherwise go without. Additionally, through educational supply donations, we
                                equip students with the tools they need to succeed in their academic
                                journeys, paving the way for brighter futures.
                            </p>
                            <p>
                                Beyond the tangible support we provide to underserved families, a core tenet
                                of our mission is to empower students themselves. We actively encourage
                                and enable students to take meaningful leadership roles within our
                                organization, providing them with invaluable experience in project
                                management, team collaboration, and community engagement. This
                                cultivates a vibrant culture of empathy, advocacy, and social responsibility on
                                campus, preparing the next generation of leaders to make a profound
                                difference in the world.
                            </p>
                            <p>
                                Our work is rooted in the belief that small acts of kindness, when organized
                                and amplified by collective effort, can create monumental change. We strive
                                to be a beacon of hope, inspiring both givers and receivers to believe in the
                                power of community and compassionate action.
                            </p>
                        </div>
                        <div style={{backgroundColor: 'var(--brand-dark-alt)', borderRadius: '1rem'}}>
                            <img src={image_6} style={{borderRadius: '1rem', width: '30rem', margin: '2rem'}}/>
                            <img src={food_image} style={{borderRadius: '1rem', width: '30rem', margin: '2rem'}}/>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div> 
            {/*Our Approach*/}
            <section style={{margin: '0 auto'}}>
                <div className={styles['third-background']}>
                    <div style={{margin: '0 30%'}}>
                        <h1 className={styles['h1']}>
                            Our Approach
                        </h1>
                    </div>
                    
                    <div className={styles['description']} style={{marginBottom: '4rem'}}>
                        <p>
                            Hearts in Action operates on a structured, semester-based strategy designed
                            to ensure both sustainability and broad student engagement. This methodical
                            approach allows us to maximize our impact and foster a consistent rhythm of
                            service throughout the academic year.
                        </p>
                        <div className={styles['approach-grid']}>
                            <div className={`${styles['list-item']} ${styles['approach-card']}`}>
                                <div className={styles['approach-header']}>
                                    Collaborative Planning
                                    <Users/>
                                </div>
                                <div>
                                    At the commencement of each semester, we
                                    host inclusive general meetings. These gatherings serve as vital forums
                                    where students are encouraged to pitch new ideas for initiatives, discuss
                                    community needs, and collectively vote on which campaigns to pursue.
                                    This democratic process ensures that our efforts are driven by student
                                    passion and resonate with the needs identified by our members.
                                </div>
                            </div>
                            <div className={`${styles['list-item']} ${styles['approach-card']}`}>
                                <div className={styles['approach-header']}>
                                    Focused Initiatives
                                    <Timer/>
                                </div>
                                To maintain efficacy and ensure thorough execution,
                                we commit to executing 2–3 highly targeted campaigns every two
                                months. This focused approach allows our teams to dedicate ample time
                                and resources to each project, ensuring they are well-planned,
                                effectively promoted, and deliver maximum impact to our beneficiaries.
                            </div>
                        </div>
                        <div className={styles['approach-grid']}>
                            <div className={`${styles['list-item']} ${styles['approach-card']}`}>
                                <div className={styles['approach-header']}>
                                    Student Leadership
                                    <img src={Student} style={{width: '5%'}}/>
                                </div>
                                Our volunteers are not simply participants;
                                they are actively divided into specialized sub-teams, each with distinct
                                responsibilities. These teams typically include groups dedicated to
                                promotion and outreach, fundraising efforts, logistical planning and
                                execution, and building strategic partnerships. This structure empowers
                                students with practical leadership experience and fosters a strong sense
                                of ownership and accountability
                            </div>
                            <div className={`${styles['list-item']} ${styles['approach-card']}`}>
                                <div className={styles['approach-header']}>
                                    Community Engagement
                                    <University/>
                                </div>
                                A cornerstone of our success lies in our
                                unwavering commitment to collaborating with local shelters, schools,
                                food banks, and other nonprofit organizations. By working hand-inhand with established community partners, we gain invaluable insights
                                into real-time needs, ensuring that our efforts are not only meaningful
                                but also strategically impactful, avoiding duplication and maximizing
                                resource utilization. This collaborative spirit ensures our initiatives are
                                truly responsive to the community we serve.
                            </div>
                        </div>
                    </div>

                    <div style={{margin: '0 30%'}}>
                        <h1 className={styles['h1']}>
                            Who We Are
                        </h1>
                    </div>
                    <NavLink to='/team' className={`donate button-transition ${styles['team-button']}`}>
                        <div>Meet the Team</div>
                        <img src={Logo} style={{width: '4rem'}}/>
                    </NavLink>
                </div>
                
            </section>
    </div>
    </>
    )
}

export default About;