import styles from './About.module.css'
import { Users, Timer, University } from 'lucide-react'
import Student from '../assets/student.png'
import './Home.css';
import TeamMember from '../components/TeamMember';
import Dennis from '../assets/people/Dennis.png';
import Kian from '../assets/people/Kian.png';
import Diego from '../assets/people/Diego.png';
import Tiana from '../assets/people/Tiana.png';
import Grady from '../assets/people/Grady.png';
import Isaac from '../assets/people/Isaac.png';
import image0 from '../assets/volunteers_in_action/image0.jpeg'
import image3 from '../assets/volunteers_in_action/image3.jpeg'
import image5 from '../assets/volunteers_in_action/image5.jpeg'

function About() {
	const members = [
		{
      name: 'Dennis Tudor',
      role: 'President and Head of Logistics',
      bio: 'Dennis is responsible for the overarching operational planning and strategic direction of all Hearts in Action initiatives. He meticulously oversees resource allocation, streamlines processes, and ensures the smooth and efficient execution of every project, from initial concept to final delivery. His leadership is pivotal in ensuring our efforts reach those in need effectively and sustainably.',
      photoUrl: Dennis,
    },
    {
      name: 'Kian Mercado',
      role: 'President and Head of Recruitment',
      bio: 'Kian focuses on expanding and nurturing our volunteer base. He is instrumental in developing and implementing recruitment strategies, fostering a welcoming and inclusive environment for all members, and ensuring that our organization attracts and retains passionate and dedicated students. Kian\'s efforts are key to building and maintaining strong, engaged teams.',
      photoUrl: Kian,
    },
		{
      name: 'Diego Varisco',
      role: 'Event Coordinator',
      bio: 'Diego takes the lead in planning and executing all Hearts in Action events. From large-scale kick-off gatherings and donation drives to intimate holiday celebrations, he ensures that every event is engaging, well-organized, and achieves its intended impact, fostering a positive experience for both volunteers and beneficiaries.',
      photoUrl: Diego,
    },
    {
      name: 'Tiana Trinh',
      role: 'Secretary',
      bio: 'Tiana is essential for maintaining the organizational flow and record-keeping. She is responsible for documenting official meeting minutes, managing internal and external communications, handling correspondence, and ensuring that all organizational records are accurate and accessible. Her attention to detail supports effective coordination across the team.',
      photoUrl: Tiana,
    },
		{
      name: 'Grady Cronkite',
      role: 'Treasurer',
      bio: 'Grady manages all financial aspects of Hearts in Action. His responsibilities include meticulous fundraising efforts, comprehensive budgeting, and diligent tracking of all expenses and revenues. Grady ensures the organization\'s fiscal responsibility and transparency, maximizing our impact by effectively managing our financial resources.',
      photoUrl: Grady,
    },
    {
      name: 'Isaac Plowman',
      role: 'Website & Digital Tools',
      bio: 'Isaac is responsible for managing and enhancing Hearts in Action\'s online presence. He oversees the development and maintenance of our website, implements digital marketing strategies, and leverages various digital tools to promote our initiatives, engage with our community, and expand our outreach efforts, ensuring our message reaches a wider audience.',
      photoUrl: Isaac,
    },
	];

	return (
		<>
		<div className={styles['body-columns']}>
			<div className={styles['main-column-left']}>
				<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '0' }}>
					<img src={image0} className={styles['image-dim']} />
					<img src={image3} className={styles['image-dim']} />
					<img src={image5} className={styles['image-dim']} />
				</div>
			</div>

			<div>
				<div className={styles.content}>
					{/*The Problem*/}
					<div className={styles['first-background']}>
						<div className={styles['description']}>
							<h1 className={styles['h1']}>
								The Problem
							</h1>
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
					{/*Our Mission*/}
					<div className={styles['second-background']}>
						<div className={styles['border']} style={{margin: '0 auto 4rem'}}/>
						<div className={styles['description']}>
							<h1 className={styles['h1']} >
								Our Mission
							</h1>
							<p>
								Hearts in Action is committed to uplifting our community by
								organizing student-driven service initiatives that directly address the
								material and emotional needs of our community. Our approach 
								involves a variety of impactful programs designed to provide
								aid and assist those in need.
							</p>
							<p>
								Our main beliefs revolve around acts of kindness. Each event we execute 
								is done to ensure we connect and help every indiviudal that may be struggling. 
								Using this way of thinking, when providing service, we hope
								to send a message to our community, inspiring others to contribute.
							</p>
						</div>
						<div className={styles['border']} style={{margin: '4rem auto 0'}}/>
					</div>
					{/*Our Approach*/}
					<div className={styles['third-background']}>
						<div className={styles['description']} style={{ marginBottom: '4rem' }}>
							<h1 className={styles['h1']}>
								Our Approach
							</h1>
							<p>
								Hearts in Action operates on a semster based schedule designed
								to ensure sustainability and student engagement. We maintain our
								impact via the following traits:
							</p>
							<div className={styles['approach-grid']}>
								<div className={`${styles['list-item']} ${styles['approach-card']}`}>
									<div className={styles['approach-header']}>
										Collaborative Planning
										<Users />
									</div>
									<div>
										At the start of each semester, we
										host general body meetings, welcome to all students. During these gatherings
										we collaborate and brainstorm new ideas for initiatives and ways of providing service 
										to our community whether its clothing drives, gift donations, or meal preparation.
									</div>
								</div>
								<div className={`${styles['list-item']} ${styles['approach-card']}`}>
									<div className={styles['approach-header']}>
										Focused Initiatives
										<Timer />
									</div>
									To maintain our efficacy and community service,
									we strive to execute 2–3 campaigns every semester.
									This focused approach allows our teams to dedicate time
									and resources to each project, ensuring they are well-planned,
									effectively promoted, and provide the desired change to our community.
								</div>
							</div>
							<div className={styles['approach-grid']}>
								<div className={`${styles['list-item']} ${styles['approach-card']}`}>
									<div className={styles['approach-header']}>
										Student Leadership
										<img src={Student} style={{ width: '5%' }} />
									</div>
									Our volunteers are divided into specialized sub-teams, each with distinct
									responsibilities. These teams typically include groups dedicated to
									promotion and outreach, fundraising efforts, and logistics. These 
									responsibilities empower students to gain leadership experience and 
									develop a higher sense of accountability.
								</div>
								<div className={`${styles['list-item']} ${styles['approach-card']}`}>
									<div className={styles['approach-header']}>
										Community Engagement
										<University />
									</div>
									Our success lies in our commitment to collaborating with local shelters, schools,
									food banks, and other nonprofit organizations. By working with established community partners,
									we gain invaluable insight and resources to further develop our organization. 
									Our collaborative methods ensure our initiatives positively impact the community we serve.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className={styles['body-team']}>
			<div className='content'>
				<div className={styles.background}>
					<h1 style={{fontSize: '2.5rem'}}>Meet the Team</h1>
					<div className={styles['team-overview']}>
						Our organization is guided by a dedicated and passionate leadership team, 
						each member bringing unique skills and a shared commitment to our mission.
					</div>
					<section className={styles['team-members']}>
						{members.map((member, idx) => (
				<TeamMember key={idx} name={member.name} role={member.role} bio={member.bio} photoUrl={member.photoUrl}/>
				))}
					</section>
				</div>
			</div>
		</div>
		</>
	)
}

export default About;