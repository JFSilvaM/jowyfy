import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { Auth } from "./pages";
import { LoggedNavigation } from "./routes";

const App = () => {
  const [user, setUser] = useState(undefined);
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => setUser(user));

  if (user === undefined) return null;

  return user ? <LoggedNavigation /> : <Auth />;
};

export default App;
