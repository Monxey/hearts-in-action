import React from 'react';
import './TeamMember.css'

type TeamMemberProps = {
  name: string;
  role: string;
  bio: string;
  photoUrl: string;
};

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio, photoUrl }) => {
  return (
    <div className="team-member">
      <img src={photoUrl} alt={name} className="member-photo" />
      <div className="member-info">
        <h3 style={{margin: '0'}} className="member-name">{name}</h3>
        <p style={{margin: '0'}} className="member-role">{role}</p>
        <p style={{margin: '0'}} className="member-bio">{bio}</p>
      </div>
    </div>
  );
};

export default TeamMember;