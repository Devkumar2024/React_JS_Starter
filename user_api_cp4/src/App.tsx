import { useState, useEffect } from "react";
import type { User } from "./types/type";
import { UserList } from "./components/UserList";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    async function getAPIResponse() {
      setIsLoading(true);
      setIsError(false);

      try {
        const apiResponse = await fetch(`https://dummyjson.com/users`);

        if (!apiResponse.ok) {
          setIsLoading(false);
          setIsError(true);
          return;
        }
        const data = await apiResponse.json();
        setUsers(data.users);
        setIsLoading(false);
      } catch {
        setIsLoading(false);
        setIsError(true);
      }
    }

    getAPIResponse();
  }, []);

  if(isLoading){
    return <h3>Loading...</h3>
  }

  if(isError){
    return <h3>Error, Retry again....</h3>
  }

  return (
    <div>
      <h1>Checkpoint</h1>
      <UserList users = {users} />
    </div>
  );
}

export default App;
