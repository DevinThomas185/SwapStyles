import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootswatch/dist/minty/bootstrap.css";
import Navigation from "./Components/Navigation";
import TradeOut from "./Pages/TradeOut";
import Shop from "./Pages/Shop";
import ProductPage from "./Pages/ProductPage";
import EventPage from "./Pages/EventPage";
import CreateEvent from "./Pages/CreateEvent";
import EventSearch from "./Pages/EventSearch";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp.js";
import Profile from "./Pages/Profile";
import TradeIn from "./Pages/TradeIn";
import Messages from "./Pages/Messages"
import Attend from "./Pages/Attend";
import ProfilePage from "./Pages/ProfilePage";

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  
  // USE KEY ATTRIBUTE TO FORCE COMPONENT TO RE-RENDER
  return (
    <React.StrictMode>
      <Router>
        <Container>
          <Row>
            <Col>
              {/* <Title /> */}
              <center>
                <img src="/logo.png" height="100" href="/" alt="SwapStyles Logo"/>
              </center>
            </Col>
          </Row>
          <Row>
            {(loggedIn) ?
              <Navigation setLoggedIn={setLoggedIn} loggedIn={true} /> :
              <Navigation setLoggedIn={setLoggedIn} loggedIn={false} />
            }
          </Row>
          <Row>
            <Col>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/tradein" element={<Shop />} />
                <Route path="/tradein/:id" element={<TradeIn />} />
                <Route path="/tradeout" element={<TradeOut />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/event/:id" element={<EventPage />} />
                <Route path="/event/attend/:id" element={<Attend />} />
                <Route path="/createEvent" element={<CreateEvent />} />
                <Route path="/searchEvents" element={<EventSearch />} />
                <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
                <Route path="/signup" element={<SignUp setLoggedIn={setLoggedIn} />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/:id" element={<ProfilePage />} />
                <Route path="/profile/messages" element={<Messages />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
