import { useAuthenticated } from '@nhost/react';
import Login from './Login'; 
import ChatApp from './ChatApp'; 

const App = () => {
  const isAuthenticated = useAuthenticated();

  if (isAuthenticated) {
    
    return <ChatApp />;
  }

  return <Login />;
};

export default App;