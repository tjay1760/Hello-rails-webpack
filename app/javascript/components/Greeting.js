import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRandomGreeting } from '../store/actions/greetingActions'
export const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting.content);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    dispatch(fetchRandomGreeting());
    setIsLoading(false);
}, [dispatch]);

if (isLoading) {
return <p>Loading...</p>;
}
  return (
    <>
    <div>My random greeting</div>
    <p>{greeting}</p>
    </>
    
  )
}
