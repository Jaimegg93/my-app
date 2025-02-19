// filepath: /c:/Users/jaime/Desktop/clase/Interfaces/my-app/src/components/routers/routers.js
import { BrowserRouter, Routes, Route } from "react-router";
import NewList from "./NewList";
import NavigationBar from "./NavigationBar";
import NewsDetail from "./NewsDetail";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<NewList />} />
          <Route path="NewList" element={<NewList />} />
          <Route path="NewsDetail/:newid" element={<NewsDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Routers;
