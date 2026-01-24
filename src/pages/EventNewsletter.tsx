import './EventNewsletter.css'
import { Calendar, ChevronRight } from 'lucide-react';
import { useState } from 'react';

import GoodNeighborDay0 from '../assets/Events/GoodNeighborDay/thumbnail.jpeg';
import GoodNeighborDay1 from '../assets/Events/GoodNeighborDay/image4.jpeg'
import GoodNeighborDay2 from '../assets/Events/GoodNeighborDay/image5.jpeg'
import GoodNeighborDay3 from '/home/iplowman/hearts-in-action/src/assets/Events/GoodNeighborDay/IMG_0045.jpg'
import GoodNeighborDay4 from '/home/iplowman/hearts-in-action/src/assets/Events/GoodNeighborDay/IMG_0052.jpg'
import GoodNeighborDay5 from '/home/iplowman/hearts-in-action/src/assets/Events/GoodNeighborDay/IMG_0053.jpg'
import GoodNeighborDay6 from '/home/iplowman/hearts-in-action/src/assets/Events/GoodNeighborDay/IMG_0056.jpg'

import TurkeyDay0 from '/home/iplowman/hearts-in-action/src/assets/Events/TurkeyGiveAway/thumbnail.jpeg'
import TurkeyDay1 from '/home/iplowman/hearts-in-action/src/assets/Events/TurkeyGiveAway/IMG_0526.jpg'
import TurkeyDay2 from '/home/iplowman/hearts-in-action/src/assets/Events/TurkeyGiveAway/IMG_0536.jpg'
import TurkeyDay3 from '/home/iplowman/hearts-in-action/src/assets/Events/TurkeyGiveAway/IMG_1307.jpg'
import TurkeyDay4 from '/home/iplowman/hearts-in-action/src/assets/Events/TurkeyGiveAway/IMG_1333.jpg'
import TurkeyDay5 from '/home/iplowman/hearts-in-action/src/assets/Events/TurkeyGiveAway/IMG_1336.jpg'
import TurkeyDay6 from '/home/iplowman/hearts-in-action/src/assets/Events/TurkeyGiveAway/IMG_1338.jpg'
import TurkeyDay7 from '/home/iplowman/hearts-in-action/src/assets/Events/TurkeyGiveAway/IMG_1340.jpg'
import TurkeyDay8 from '/home/iplowman/hearts-in-action/src/assets/Events/TurkeyGiveAway/IMG_7212.jpg'

import GiftDay0 from '/home/iplowman/hearts-in-action/src/assets/Events/GiftGiveAway/thumbnail.jpg'
import GiftDay1 from '/home/iplowman/hearts-in-action/src/assets/Events/GiftGiveAway/IMG_1952.jpg'
import GiftDay2 from '/home/iplowman/hearts-in-action/src/assets/Events/GiftGiveAway/IMG_1965.jpg'
import GiftDay3 from '/home/iplowman/hearts-in-action/src/assets/Events/GiftGiveAway/IMG_6534.jpg'
import GiftDay4 from '/home/iplowman/hearts-in-action/src/assets/Events/GiftGiveAway/IMG_7602.jpg'
import GiftDay5 from '/home/iplowman/hearts-in-action/src/assets/Events/GiftGiveAway/IMG_7608.jpg'

interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  images: string[];
  summary: string;
}

const events: Event[] = [
    {
        id: '1',
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
        title: 'Christmas Toy Giveaway',
        date: 'December 17, 2025',
        summary: 'Spreading cheer by wrapping and giving away toys to kids in need!',
        description: '',
        images: [GiftDay0, GiftDay1, GiftDay2, GiftDay3, GiftDay4, GiftDay5]
    }
]

function EventNewsletter() {

    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

    return ( 
    <>
        <div className="event-background">
            <div className="body">
                <h1>Event Newsletter</h1>
                <h2>Stay updated about our latest events and activities!</h2>
                
                {
                    !selectedEvent ?
                    (
                    <div className='event-grid'>
                    { events.map((event) => (
                        <div className="event-card" onClick={() => setSelectedEvent(event)}>
                            <div>
                                <img className='event-image' src={event.images[0]} alt={event.title}/>
                            </div>
                            <div className="event-calendar">
                                    <Calendar/>
                                    {event.date}
                            </div>
                            <h2 className="">{event.title}</h2>
                            <p className="">{event.summary}</p>
                            <button className="event-button">
                                Read More
                                <ChevronRight/>
                            </button>
                        </div>
                    ))}
                    </div>
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
                            <h2 className="">{selectedEvent.title}</h2>
                            <div className='event-description'>{selectedEvent.description}</div>
                            <div className='grid'>
                                {selectedEvent.images.map((image, index) => (
                                    index != 0 && 
                                    <div>
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