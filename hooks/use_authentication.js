import { useState } from 'react';

export function useAuthentication() {
  const [user, setUser] = useState({
    firstname: 'Jonas',
    lastname: 'Wouters',
    country: 'Belgium',
    city: 'Vosselaar'    
  });
  return {
    user
  };
}