import styles from './About.module.css'
import { Users, Timer, University, GraduationCapIcon } from 'lucide-react'
import './Home.css';
import TeamMember from '../components/TeamMember';
import Dennis from '../assets/people/Dennis.png';
import Kian from '../assets/people/Kian.png';
import Diego from '../assets/people/Diego.png';
import Tiana from '../assets/people/Tiana.png';
import Grady from '../assets/people/Grady.png';
import Isaac from '../assets/people/Isaac.png';
import image0 from '../assets/About/image0.jpeg'
import image1 from '../assets/About/image1.jpeg'

function About() {
	const members = [
		{
      name: 'Dennis Tudor',
      role: 'President and Head of Logistics',
      bio: 'Responsible for the overarching operational planning and strategic direction of all Hearts in Action initiatives.',
      photoUrl: Dennis,
    },
    {
      name: 'Kian Mercado',
      role: 'President and Head of Recruitment',
      bio: 'Focuses on expanding and nurturing our volunteer base.',
      photoUrl: Kian,
    },
		{
      name: 'Diego Varisco',
      role: 'Event Coordinator',
      bio: 'Takes the lead in planning and executing all Hearts in Action events.',
      photoUrl: Diego,
    },
    {
      name: 'Tiana Trinh',
      role: 'Secretary',
      bio: 'Essential for maintaining the organizational flow and record-keeping.',
      photoUrl: Tiana,
    },
		{
      name: 'Grady Cronkite',
      role: 'Treasurer',
      bio: 'Manages all financial aspects of Hearts in Action.',
      photoUrl: Grady,
    },
    {
      name: 'Isaac Plowman',
      role: 'Website & Digital Tools',
      bio: 'Responsible for managing and enhancing Hearts in Action\'s online presence.',
      photoUrl: Isaac,
    },
	];

	return (
		<>
		<div className={styles['main-about-background']}>
			<div className={styles.content}>
				<div className={styles['slogan-background']}>
					<div className={styles.slogan}>
						<h1>Hearts in Action</h1>
						<p>Turning <span>Care</span> into Change</p>
					</div>
				</div>
				{/*The Problem*/}
				<div className={styles['about-background']}>
					<div className={styles['about-description']}>
						<img src={image0} className={styles['image-dim']} />
						<div>
							<h1 className={styles['h1']}>
							About Us
							</h1>
							<p>
								Without strong support systems, many individuals and families remain trapped in cycles of poverty. Hearts in Action works to break that cycle by filling resource gaps both in the surrounding community and on campus. Through community-driven support and mutual aid, we aim to create lasting change and a more equitable future for all.
							</p>
						</div>
					</div>
				</div>
			
				{/*Our Mission*/}
				<div className={styles['mission-background']}>
					<div className={styles['about-description']}>
						<div>
							<h1 className={styles['h1']} >
							Our Mission
							</h1>
							<p>
								Committed to uplifting our community by organizing student-driven service initiatives, we aim to directly address the material and emotional needs of our community. We believe in acts of kindness and sending a message to our community, so others are inspired to contribute.
							</p>
						</div>
						<img src={image1} className={styles['image-dim']} />
					</div>
				</div>
			</div>
			{/*Our Approach*/}
			<div className={styles['approach-background']}>
				<div className={styles['approach-description']} style={{ marginBottom: '4rem' }}>
					<h1 className={styles['h1']}>
						Our Approach
					</h1>
					<p>
						Hearts in Action operates on a semester based schedule designed
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
								host general body meetings, welcome to all students. 
							</div>
						</div>
						<div className={`${styles['list-item']} ${styles['approach-card']}`}>
							<div className={styles['approach-header']}>
								Focused Initiatives
								<Timer />
							</div>
							To maintain our efficacy and community service,
							we strive to execute 2–3 campaigns every semester.
						</div>
					</div>
					<div className={styles['approach-grid']}>
						<div className={`${styles['list-item']} ${styles['approach-card']}`}>
							<div className={styles['approach-header']}>
								Student Leadership
								<GraduationCapIcon/>
							</div>
							Our volunteers are divided into specialized sub-teams, each with distinct
							responsibilities. These teams typically include groups dedicated to
							promotion and outreach, fundraising efforts, and logistics.
						</div>
						<div className={`${styles['list-item']} ${styles['approach-card']}`}>
							<div className={styles['approach-header']}>
								Community Engagement
								<University />
							</div>
							Our success lies in our commitment to collaborating with local shelters, schools,
							food banks, and other nonprofit organizations.
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className={styles['body-team']}>
			<div className='content'>
				<div className={styles.background}>
					<h1 style={{fontSize: '2.5rem'}}>Meet the Team</h1>
					<div className={styles['team-content']}>
						<div className={styles['team-members']}>
							{members.map((member, idx) => (
					<TeamMember key={idx} name={member.name} role={member.role} bio={member.bio} photoUrl={member.photoUrl}/>
					))}
						</div>
					</div>
				</div>
			</div>
		</div>
		</>
	)
}

export default About;