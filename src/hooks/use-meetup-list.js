import { useEffect, useState } from "react";

export const useMeetupList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const BASE_URL = "https://react-demo-f7fe7-default-rtdb.firebaseio.com";
  const API_URL = `${BASE_URL}/meetups.json`;

  const convertToMeetupArray = (data) => {
    const MEETUP_ARRAY = [];
    for (let key in data) {
      const meetup = data[key];
      meetup.id = key;
      MEETUP_ARRAY.push(meetup);
    }
    return MEETUP_ARRAY;
  };

  const fetchMeetups = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setData(convertToMeetupArray(data)))
      .catch((error) => setError("Failed to fetch meetups.", error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => fetchMeetups(), []);

  return {
    data,
    isLoading,
    error,
  };
};
