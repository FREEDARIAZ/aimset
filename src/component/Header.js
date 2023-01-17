import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
// import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownS from "./DropdownS";
import { MDBBtn } from "mdb-react-ui-kit";

const Header = () => {
  return (
    <>
      <div>
        {" "}
        <Row>
          <Col className="" sm="12" md="6" lg="6">
            <div className="logo">
              <img src="images/logo5.png " className="w-100 h-100" />
            </div>
            <div className="heading d-flex flex-column justify-content-cente align-items-center w-100 pt-5 pb-5 px-5 py-5 ">
              <h1 className="pt-5">AMINDSET</h1>
              <h1>QUALITY CARE ONE PERSON AT A TIME</h1>
              <div className="pt-5 pb-5">
                <Button color="info" className="px-3 py-3 text-white mt-5">
                  Find a Provider
                </Button>
              </div>
            </div>
          </Col>
          <Col className=" p-0" sm="12" md="6" lg="6">
            <div
              className="background"
              style={{ backgroundImage: `url("images/hero2.jpg")` }}
            >
              <div className="d-flex justify-content-end px-5 pt-5">
                <Button
                  className="mx-2 px-3 py-3  text-white rounded-pill"
                  color="info"
                >
                  <b>SIGIN</b>
                </Button>
                <Button
                  className="mx-2 p-3 text-white rounded-pill"
                  color="info"
                >
                  <b>Creat Account</b>
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="">
          <div className="d-flex justify-content-around align-items-center p-5 flex-wrap">
            <div className="mb-2">
              {" "}
              <DropdownS />
            </div>
            <div className="mb-2">
              {" "}
              <DropdownS />
            </div>
            <div className="mb-2">
              {" "}
              <DropdownS />
            </div>
            <div className="mb-2">
              {" "}
              <DropdownS />
            </div>
            <div className="mb-2">
              {" "}
              <DropdownS />
            </div>
            <div className="mb-2">
              {" "}
              <Button color="info" className=" text-white ">
                <b>SEARCH</b>
              </Button>
            </div>
          </div>
        </Row>
      </div>
    </>
  );
};

export default Header;
