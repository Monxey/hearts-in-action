import './EventNewsletter.css'
import { Calendar, ChevronRight } from 'lucide-react';
import { useState } from 'react';

import GoodNeighborDay0 from '../assets/Events/GoodNeighborDay/image_0.jpeg';

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
        date: 'November 26, 2025',
        summary: 'Making a difference in our community by cooking with love',
        description: 'Awesome sauce',
        images: [GoodNeighborDay0]
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
                    <div className='grid'>
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
                        <div></div>
                    )
                }
                
            </div>
        </div>
    </>
    )
}

export default EventNewsletter;