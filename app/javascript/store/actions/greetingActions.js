import { setGreeting } from "../reducers/greetingReducer";
export const fetchRandomGreeting = () => {
    return async (dispatch) => {
      try {
        const response = await fetch('/api/random_greeting');
        const data = await response.json();
        dispatch(setGreeting(data.greeting));
      } catch (error) {
        console.error('Error fetching greeting:', error);
      }
    };
  };