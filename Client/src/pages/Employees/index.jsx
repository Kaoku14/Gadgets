import React, { useState, useEffect } from 'react';

function Employees() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/company/")
      .then(response => response.json())
      .then(data =>{ setData(data); setLoading(false);})
      .catch(error => console.error(error));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Data from Django database</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name} - {item.address} - {item.email} - {item.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default Employees;