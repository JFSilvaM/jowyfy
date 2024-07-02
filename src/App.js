import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { PlayerProvider } from "./context";
import { Auth } from "./pages";
import { LoggedNavigation } from "./routes";

const App = () => {
  const [user, setUser] = useState(undefined);
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => setUser(user));

  if (user === undefined) return null;

  return user ? (
    <PlayerProvider>
      <LoggedNavigation />
    </PlayerProvider>
  ) : (
    <Auth />
  );
};

export default App;
