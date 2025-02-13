import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoggedLayout } from "../layouts";
import { Album, Albums, Artist, Artists, Home, Profile } from "../pages";

export const LoggedNavigation = () => {
  return (
    <BrowserRouter>
      <LoggedLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artists/:id" element={<Artist />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/albums/:id" element={<Album />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </LoggedLayout>
    </BrowserRouter>
  );
};
