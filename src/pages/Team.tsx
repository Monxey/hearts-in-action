import styles from './Team.module.css';
import './Home.css';
import TeamMember from '../components/TeamMember';
import Dennis from '../assets/people/Dennis.png';
import Kian from '../assets/people/Kian.png';
import Diego from '../assets/people/Diego.png';
import Tiana from '../assets/people/Tiana.png';
import Grady from '../assets/people/Grady.png';
import Isaac from '../assets/people/Isaac.png';

function Team() {
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
		<div className='content'>
			<div className={styles.background}>
				<h1 style={{fontSize: '2.5rem'}}>Meet the Team</h1>
				<div className={styles['team-overview']}>
					Our organization is guided by a dedicated and passionate leadership team, each member bringing unique skills and a shared commitment to our mission. Their collective efforts ensure the strategic direction, operational efficiency, and continued growth of Hearts in Action. 
				</div>
				<section className={styles['team-members']}>
					{members.map((member, idx) => (
        	<TeamMember key={idx} name={member.name} role={member.role} bio={member.bio} photoUrl={member.photoUrl}/>
      		))}
				</section>
	  	</div>
		</div>
	</>
	)
}

export default Team;