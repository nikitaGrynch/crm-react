// import React from 'react';
// import { useParams } from 'react-router-dom';
// import FavoriteButton from './FavoriteButton';

// const EventDetails = ({ events }) => {
//   const { eventId } = useParams();
//   const event = events.find(event => event.id === eventId);

//   if (!event) {
//     return <div>Event not found</div>;
//   }

//   return (
//     <div>
//       <h2>{event.title}</h2>
//       <p>Category: {event.category}</p>
//       <p>Date: {event.date}</p>
//       <p>Location: {event.location}</p>
//       <p>Description: {event.description}</p>
//       <FavoriteButton eventId={event.id} />
//     </div>
//   );
// };

// export default EventDetails;
