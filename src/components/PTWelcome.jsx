import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PTWelcome() {
  const { id } = useParams();
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchName = async () => {
      try {
        const response = await fetch(`/api/users/${id}`);
        const data = await response.json();
        setName(data.name);
        console.log(data.name)
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchName();
  }, [id]);

  return (
    <div>
      <h1>Welcome, {name}!</h1>
    </div>
  );
}

export default PTWelcome;
