import MeetupList from "../components/meetup/MeetupList";
import { useMeetupList } from "../hooks/use-meetup-list";

const AllMeetupsPage = () => {
  const { data, error, isLoading } = useMeetupList();

  return (
    <section>
      <h1>All Meetups Page</h1>
      {isLoading && <p>🔃 Loading...</p>}
      {error && <p>🌋 {error}</p>}
      {!isLoading && !error && <MeetupList meetups={data} />}
    </section>
  );
};

export default AllMeetupsPage;
