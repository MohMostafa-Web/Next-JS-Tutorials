import { useState } from "react";
import { useRouter } from "next/router";

function EventsList({ eventsData }) {
  const [events, setEvents] = useState(eventsData);

  const router = useRouter();

  /* Create function to filter data by category by fetching filtered data in Client-side */
  const fetchSportsEvents = async (cate) => {
    const response = await fetch(
      `http://localhost:4000/events?category=${cate}`
    );
    const data = await response.json();
    setEvents(data);

    // router.push(`/events?category=${cate}`);
    router.push(`/events?category=${cate}`, undefined, { shallow: true });
  };

  return (
    <>
      <button onClick={() => fetchSportsEvents("sports")}>Sports Events</button>
      <button onClick={() => fetchSportsEvents("technology")}>Technology Events</button>
      <h2>List of Events</h2>
      {events.map((event) => (
        <div key={event.id}>
          <h3>
            {event.id}. {event.title} {event.date} | {event.category}
          </h3>
          <p>{event.description}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export default EventsList;

/* Fetching data in Server-side Render using "getServerSideProps()" */
export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;

  /* Check if there is queryString for category to update SSR When reloading the page */
  const queryString = category ? `category=${category}`: "";

  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();

  return {
    props: {
      eventsData: data,
    },
  };
}
