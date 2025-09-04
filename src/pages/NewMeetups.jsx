import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetup/NewMeetupForm";

const NewMeetupsPage = () => {
  const navigate = useNavigate();

  const addMeetupHandler = (meetupData) => {
    fetch("https://react-demo-f7fe7-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        console.log("Meetup added!");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error adding meetup:", error);
      });
  };

  return (
    <section>
      <h1>Add New Meetups</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupsPage;
