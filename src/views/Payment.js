import React from "react";
import ReactDom from "react-dom";
import {
  Button,
  CustomInput,
  Input,
  UncontrolledDropdown,
  DropdownToggle, 
  DropdownMenu, 
  DropdownItem, 
  UncontrolledButtonDropdown,
  Modal,
  Form,
  UncontrolledTooltip ,
  Row,
  Col,
} from "reactstrap";

// core components
import Footer from "components/Footer/Footer.js";

export default function AppPage() {

     React.useEffect(() => {
      document.body.classList.toggle("payment-page");
      // Specify how to clean up after this effect:
      return function cleanup() {
        document.body.classList.toggle("payment-page");
      };
    },[]);
    //////////////---------------------------------///////////////
  
  
    /////////////----------return component-------//////////////////
    return (
      <>
        <div className="wrapper">
          <Footer />
        </div>
      </>
    );
    /////////////-----------------//////////////////
  
  }
  