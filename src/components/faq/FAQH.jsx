import React from 'react';
import "./FAQ.css";
import { Accordion } from 'react-bootstrap';

const FAQH = () => {
  return (
    <div className="faq-container">
      <div className="faq">
        <p>Frequently Asked Questions</p>
      </div>
      <div className="faq-tab-container">
        <div className="faq-left">
        <Accordion>
              <Accordion.Item eventKey="0" className="acc">
                <Accordion.Header>1.How to select any vernacular language other than English?</Accordion.Header>
                <Accordion.Body>Now, you can select your preferred language from the “Select language” tab in the business portal according to your preference. .</Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1" className="acc">
                <Accordion.Header>2.How to set my business timing?</Accordion.Header>
                <Accordion.Body>-	You can toggle the start business button in the business portal to start and stop your business timings.</Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2" className="acc">
                <Accordion.Header>3.Having problem with the business portal?</Accordion.Header>
                <Accordion.Body>You can contact us from the “Contact US” link in the footer section.</Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3" className="acc">
                <Accordion.Header>4.How can I connect with my customer?</Accordion.Header>
                <Accordion.Body>Whenever a nearby customer set their order, the order details along with the customer phone number will be displayed in the orders section.</Accordion.Body>
              </Accordion.Item>

        </Accordion>
        </div>
        <div className="faq-right">
              <Accordion>
              <Accordion.Item eventKey="4" className="acc">
                <Accordion.Header>5.What are smart contracts?</Accordion.Header>
                <Accordion.Body>A smart contract is an agreement between two people or entities in the form of computer code programmed to execute automatically.</Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="5" className="acc">
                <Accordion.Header>6.How to login and setup my business?</Accordion.Header>
                <Accordion.Body>You can check the tutorial video on the business portal where we have a run through of the whole process of setting up your business profile. </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="6" className="acc">
                <Accordion.Header>7.How does this platform help me get customers?</Accordion.Header>
                <Accordion.Body>So the customers can see your location and the items you are selling and can request a visit as per their need.</Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="7" className="acc">
                <Accordion.Header>8.How to check all my orders?</Accordion.Header>
                <Accordion.Body>You can check your current order and your past orders through the respective tabs in the navbar.</Accordion.Body>
              </Accordion.Item>

              </Accordion>
        </div>
      </div>
    </div>
  )
}

export default FAQH;