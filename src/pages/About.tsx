import { Space } from 'lucide-react'
import styles from './About.module.css'

function About() {
    return ( 
    <>
    <div className={styles.content}>
             {/*The Problem*/}
            <section>
                <div className={styles['problem-background']}>
                    <h1 className={styles['h1']}>
                        The Problem
                    </h1>
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
                <div className={styles['mission-background']}>
                    <h1 className={styles['h1']}>
                        Our Mission
                    </h1>
                    <div className={styles['description']}>
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
                            provide essential nourishment. During festive periods, our holiday
                            celebrations bring joy and a sense of belonging to families who might
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
                </div>
            </section> 
            {/*Our Approach*/}
            <section>
                <div className={styles['approach-background']}>
                    <h1 className={styles['h1']}>
                        Our Approach
                    </h1>
                    <div className={styles['description']}>
                        <p>
                            Hearts in Action operates on a structured, semester-based strategy designed
                            to ensure both sustainability and broad student engagement. This methodical
                            approach allows us to maximize our impact and foster a consistent rhythm of
                            service throughout the academic year.
                        </p>
                        <ul>
                            <li className={styles['list-item']}>
                                Collaborative Planning: At the commencement of each semester, we
                                host inclusive general meetings. These gatherings serve as vital forums
                                where students are encouraged to pitch new ideas for initiatives, discuss
                                community needs, and collectively vote on which campaigns to pursue.
                                This democratic process ensures that our efforts are driven by student
                                passion and resonate with the needs identified by our members.
                            </li>
                            <li className={styles['list-item']}>
                                Focused Initiatives: To maintain efficacy and ensure thorough execution,
                                we commit to executing 2–3 highly targeted campaigns every two
                                months. This focused approach allows our teams to dedicate ample time
                                and resources to each project, ensuring they are well-planned,
                                effectively promoted, and deliver maximum impact to our beneficiaries.
                            </li>
                            <li className={styles['list-item']}>
                                Student Leadership Teams: Our volunteers are not simply participants;
                                they are actively divided into specialized sub-teams, each with distinct
                                responsibilities. These teams typically include groups dedicated to
                                promotion and outreach, fundraising efforts, logistical planning and
                                execution, and building strategic partnerships. This structure empowers
                                students with practical leadership experience and fosters a strong sense
                                of ownership and accountability
                            </li>
                            <li className={styles['list-item']}>
                                Community Engagement: A cornerstone of our success lies in our
                                unwavering commitment to collaborating with local shelters, schools,
                                food banks, and other nonprofit organizations. By working hand-inhand with established community partners, we gain invaluable insights
                                into real-time needs, ensuring that our efforts are not only meaningful
                                but also strategically impactful, avoiding duplication and maximizing
                                resource utilization. This collaborative spirit ensures our initiatives are
                                truly responsive to the community we serve.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
    </div>
    </>
    )
}

export default About;