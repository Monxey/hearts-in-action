import './EventNewsletter.css'
import { Calendar, ChevronRight, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

import GoodNeighborDay0 from '../assets/Events/GoodNeighborDay/thumbnail.jpeg';
import GoodNeighborDay1 from '../assets/Events/GoodNeighborDay/image4.jpeg'
import GoodNeighborDay2 from '../assets/Events/GoodNeighborDay/image5.jpeg'
import GoodNeighborDay3 from '../assets/Events/GoodNeighborDay/IMG_0045.jpg'
import GoodNeighborDay4 from '../assets/Events/GoodNeighborDay/IMG_0052.jpg'
import GoodNeighborDay5 from '../assets/Events/GoodNeighborDay/IMG_0053.jpg'
import GoodNeighborDay6 from '../assets/Events/GoodNeighborDay/IMG_0056.jpg'

import TurkeyDay0 from '../assets/Events/TurkeyGiveAway/thumbnail.jpeg'
import TurkeyDay1 from '../assets/Events/TurkeyGiveAway/IMG_0526.jpg'
import TurkeyDay2 from '../assets/Events/TurkeyGiveAway/IMG_0536.jpg'
import TurkeyDay3 from '../assets/Events/TurkeyGiveAway/IMG_1307.jpg'
import TurkeyDay4 from '../assets/Events/TurkeyGiveAway/IMG_1333.jpg'
import TurkeyDay5 from '../assets/Events/TurkeyGiveAway/IMG_1336.jpg'
import TurkeyDay6 from '../assets/Events/TurkeyGiveAway/IMG_1338.jpg'
import TurkeyDay7 from '../assets/Events/TurkeyGiveAway/IMG_1340.jpg'
import TurkeyDay8 from '../assets/Events/TurkeyGiveAway/IMG_7212.jpg'

import GiftDay0 from '../assets/Events/GiftGiveAway/thumbnail.jpg'
import GiftDay1 from '../assets/Events/GiftGiveAway/IMG_1952.jpg'
import GiftDay2 from '../assets/Events/GiftGiveAway/IMG_1965.jpg'
import GiftDay3 from '../assets/Events/GiftGiveAway/IMG_6534.jpg'
import GiftDay4 from '../assets/Events/GiftGiveAway/IMG_7602.jpg'
import GiftDay5 from '../assets/Events/GiftGiveAway/IMG_7608.jpg'

import PetRes0 from '../assets/Events/PetResouceEvent/thumbnail.jpeg'
import PetRes1 from '../assets/Events/PetResouceEvent/IMG_1463.jpeg'
import PetRes2 from '../assets/Events/PetResouceEvent/IMG_1466.jpeg'
import PetRes3 from '../assets/Events/PetResouceEvent/IMG_1468.jpeg'
import PetRes4 from '../assets/Events/PetResouceEvent/IMG_3374.jpeg'
import PetRes5 from '../assets/Events/PetResouceEvent/IMG_6852.jpeg'
import PetRes6 from '../assets/Events/PetResouceEvent/IMG_6857.jpeg'
import PetRes7 from '../assets/Events/PetResouceEvent/IMG_6865.jpeg'

interface Event {
  id: string;
  type: 'past' | 'upcoming';
  title: string;
  date: string;
  time?: string;
  location?: string;
  description: string;
  images: string[];
  summary: string;
}

const events: Event[] = [
    {
        id: '1',
        type: 'past',
        title: 'Good Neighbor Day',
        date: 'October 25, 2025',
        summary: 'Making a difference in our community by cooking with love!',
        description: 'The hardworking members and volunteers of ' +
        'Hearts in Action cooked and delivered 500 meals for the elderly.',
        images: [GoodNeighborDay0, GoodNeighborDay1, GoodNeighborDay2, GoodNeighborDay3,
            GoodNeighborDay4, GoodNeighborDay5, GoodNeighborDay6
        ]
    },
    {
        id: '2',
        type: 'past',
        title: 'Turkey Thanksgiving Giveaway',
        date: 'November 26, 2025',
        summary: 'Giving thanks to our community (and turkey)!',
        description: 'Hearts in Action joins the Center for Community Engagement @ UMD along with ' +
        'Senator Alonzo Washington to help prepare 500 meals including turkey, eggs, mashed potatoes and more! These were given away '
        + 'to those in need during the holiday season!',
        images: [TurkeyDay0, TurkeyDay1, TurkeyDay2, TurkeyDay3, TurkeyDay4, TurkeyDay5, TurkeyDay6,
            TurkeyDay7, TurkeyDay8
        ]
    },
    {
        id: '3',
        type: 'past',
        title: 'Christmas Toy Giveaway',
        date: 'December 17, 2025',
        summary: 'Spreading cheer by wrapping and giving away toys to kids in need!',
        description: 'HIA donated 150 toys to less fortunate children',
        images: [GiftDay0, GiftDay1, GiftDay2, GiftDay3, GiftDay4, GiftDay5]
    },
    {
        id: '4',
        type: 'past',
        title: 'Pet Resource Giveaway',
        date: 'March 7, 2026',
        summary: 'Giving to our furry friends!',
        description: 'Another collab with Senator Alonzo Washington. Our members helped set up stations and give away free goodies to pet owners including\
        dog toys, food, and even pajamas!',
        images: [PetRes0, PetRes1, PetRes2, PetRes3, PetRes4, PetRes5, PetRes6, PetRes7]
    }
]

const upcomingEvents: Event[] = [
    {
        id: 'u1',
        type: 'upcoming',
        title: 'Final Season Special',
        date: 'May 2, 2026',
        time: 'TBD',
        location: 'Mckeldin Mall, UMD',
        summary: 'Join us for a large wellness event during finals!',
        description: 'This event will include a thrift station, free redbull and snacks, free blood pressure screenings, \
        flowers, and other resources to help get you through your final exams!',
        images: []
    }
]

function EventNewsletter() {

    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

    return ( 
    <>
        <div className="main-background">
            <div className="event-body">
                <div className='animated'>
                    <h1>Event Newsletter</h1>
                </div>
                <h2>Stay updated about our latest events and activities!</h2>
                
                {
                    !selectedEvent ?
                    (
                    <>
                        <div className='event-section-header'>
                            <h3>Upcoming Events</h3>
                        </div>
                        {upcomingEvents.length === 0 ? (
                            <p className='event-empty'>No upcoming events at this time. Check back soon!</p>
                        ) : (
                            <div className='event-grid'>
                                {upcomingEvents.map((event) => (
                                    <div className="event-card event-card-upcoming" key={event.id}>
                                        <div className="event-calendar">
                                            <Calendar/>
                                            {event.date}
                                        </div>
                                        {event.time && (
                                            <div className="event-meta">
                                                <Clock size={16}/>
                                                {event.time}
                                            </div>
                                        )}
                                        {event.location && (
                                            <div className="event-meta">
                                                <MapPin size={16}/>
                                                {event.location}
                                            </div>
                                        )}
                                        <h2>{event.title}</h2>
                                        <p>{event.summary}</p>
                                        <p className='event-description'>{event.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className='event-section-header'>
                            <h3>Past Events</h3>
                        </div>
                        <div className='event-grid'>
                            {events.map((event) => (
                                <div className="event-card" key={event.id} onClick={() => setSelectedEvent(event)}>
                                    <div>
                                        <img className='event-image' src={event.images[0]} alt={event.title}/>
                                    </div>
                                    <div className="event-calendar">
                                        <Calendar/>
                                        {event.date}
                                    </div>
                                    <h2>{event.title}</h2>
                                    <p>{event.summary}</p>
                                    <button className="event-button">
                                        Read More
                                        <ChevronRight/>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </>
                    ) :
                    (
                        <div className='event-showcase-card'>
                            <button className='event-button' onClick={() => setSelectedEvent(null)}>
                                ← Back to all events
                            </button>
                            <div className="event-calendar">
                                <Calendar/>
                                {selectedEvent.date}
                            </div>
                            <h2>{selectedEvent.title}</h2>
                            <div className='event-description'>{selectedEvent.description}</div>
                            <div className='grid'>
                                {selectedEvent.images.map((image, index) => (
                                    index != 0 &&
                                    <div key={index}>
                                        <img className='event-showcase-image' src={image} alt={`image${index}`}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                }
                
            </div>
        </div>
    </>
    )
}

export default EventNewsletter;