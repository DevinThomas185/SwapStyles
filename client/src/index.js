import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootswatch/dist/quartz/bootstrap.css";
import Title from "./Components/Title";
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Container>
        <Row>
          <Col>
            <Title />
          </Col>
        </Row>
        <Row>
          <Navigation />
        </Row>
        <Row>
          <Col>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/tradein" element={<Shop />} />
              <Route path="/tradeout" element={<TradeOut />} />
              <Route path="/product/:id" element={<ProductPage product="h" />} />
              <Route path="/event/:id" element={<EventPage />} />
              <Route path="/createEvent/" element={<CreateEvent />} />
              <Route path="/searchEvents/" element={<EventSearch />} />
              <Route path="/login/" element={<Login />} />
              <Route path="/signup/" element={<SignUp />} />
              <Route path="/profile/" element={<Profile />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  </React.StrictMode>
);
