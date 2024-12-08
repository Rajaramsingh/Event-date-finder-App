import React, { useState, useEffect } from 'react';

const App = () => {
  const [event, setEvent] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    if (event) {
      const eventDate = getEventDate(event);
      setDate(eventDate);
    }
  }, [event]);

  const getEventDate = (eventName) => {
    const currentYear = new Date().getFullYear();
    let eventDate = '';

    if (eventName.toLowerCase() === 'christmas') {
      eventDate = new Date(currentYear, 11, 25).toDateString();
    } else if (eventName.toLowerCase() === 'diwali') {
// Calculation for Diwali is more complex since it depends on the Hindu lunar calendar
      eventDate = getDiwaliDate(currentYear);
    }

    return eventDate;
  };

  const getDiwaliDate = (year) => {
                                                                // Placeholder function to get Diwali date
                                                    // In real implementation, you would need a proper algorithm or API to get the exact date
    const diwaliDates = {
      2023: 'November 12, 2023',
      2024: 'November 1, 2024',
      2025: 'October 21, 2025',
    };

    return diwaliDates[year] || 'Date not available';
  };
  const onClickHandler = (e)=>{           
    setDate()
  } 

  return (
    <div>
      <h1>Event Date Finder</h1>
      <input
        type="text"
        value={event}
        onChange={(e) => setEvent(e.target.value)}
        placeholder="Enter event name (e.g., Christmas, Diwali)"
       
      />
      <button onClick={onClickHandler}> find Event</button>
      <p>{event && date ? `The date of ${event} is: ${date}` : 'Enter an event name to find the date'}</p>
    </div>
  );
};

export default App;
