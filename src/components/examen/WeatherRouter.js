// filepath: /c:/Users/jaime/Desktop/clase/Interfaces/my-app/src/components/routers/routers.js
import { BrowserRouter, Routes, Route } from "react-router";
import WeatherList from "./WeatherList";
import NavigationBar from "./NavigationBar";
import WeatherDetail from "./WeatherDetail";
import { WeatherProvider } from "./WeatherContext";

function WeatherRoutes() {
  return (
    <BrowserRouter>
      <WeatherProvider>
        <Routes>
          <Route path="/" element={<NavigationBar />}>
            <Route index element={<WeatherList />} />
            <Route path="WeatherList" element={<WeatherList />} />
            <Route path="WeatherDetail" element={<WeatherDetail />} />
            <Route path="WeatherDetail/:nombreCiudad?" element={<WeatherDetail />} />
          </Route>
        </Routes>
      </WeatherProvider>
    </BrowserRouter>
  );
}
export default WeatherRoutes;
