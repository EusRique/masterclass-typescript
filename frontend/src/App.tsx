import React, { useEffect, useState } from 'react';
import api from './service/api'
import User from './components/User'

interface IUser {
  name: String;
  email: String;
}

function App() {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    api.get<IUser[]>('/users').then(response => {
      setUsers(response.data);
    })
  }, []);

  return (
    <div className="App">
      { users.map(user => <User user={user} />) }
    </div>
  );
}

export default App;
