import { useEffect } from "react";
import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

const App = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  if (loading) return <div>cargando...</div>;
  if (error) return <div>{error}</div>;
  return (
    <>
      <h1>hola</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
