import React from 'react';
import { NavLink } from 'react-router-dom';
import './ResourceCard.css'

type LinkProp = {
    resource: string;
    link: string;
}

type ResourseProps = {
    category: string;
    links: LinkProp[];
}

const ResourceCard: React.FC<ResourseProps> = ({category, links}) => {

    const linkItems = links.map((src, index) => (
        <NavLink style={{color: 'white'}} to={src.link} key={index}>
            {src.resource}
        </NavLink>
    ))

    return (
        <div className='resource-card'>
            <h1 style={{fontSize: '1.75rem'}}>{category}</h1>
            <ul className='resource-links'>
                {linkItems}
            </ul>
        </div>
    )
}

export default ResourceCard;