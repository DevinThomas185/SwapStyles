import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootswatch/dist/quartz/bootstrap.css";
import Shop from "./Components/Shop";
import Title from "./Components/Title";
import TradeOut from "./Pages/TradeOut";
import ProductPage from "./Pages/ProductPage";
import Navigation from "./Components/Navigation";

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
              <Route path="/" element={<Shop />} />
              <Route path="/tradeout" element={<TradeOut />} />
              <Route path="/product/:id" element={<ProductPage product="h"/>} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  </React.StrictMode>
);