import React, { useEffect, useState } from 'react';

function PTWelcome() {
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
  }, [name]);

  return (
    <div>
      <h1>Welcome, {name}!</h1>
    </div>
  );
}

export default PTWelcome;
