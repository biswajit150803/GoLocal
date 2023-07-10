import React from 'react';
import "./FAQ.css";
import { Accordion } from 'react-bootstrap';

const FAQC = () => {
  return (
    <div className="faq-container">
      <div className="faq">
        <p>Frequently Asked Questions</p>
      </div>
      <div className="faq-tab-container">
        <div className="faq-left">
        <Accordion>
              <Accordion.Item eventKey="0" className="acc">
                <Accordion.Header>How do I connect with the hawkers?</Accordion.Header>
                <Accordion.Body>You can access your orders and the details of the hawkers including the phone number in “My Orders” section.</Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1" className="acc">
                <Accordion.Header>How will I pay the hawker?</Accordion.Header>
                <Accordion.Body>You can pay in-person or choose any online payment mode according to the hawker’s preference.Also if you request  a visit you have to pay through metamask.</Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2" className="acc">
                <Accordion.Header>How will I know when the hawker will arrive at my location?</Accordion.Header>
                <Accordion.Body>You will get the live location of the hawker all the time. You can also contact the hawker directly with their phone number.</Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3" className="acc">
                <Accordion.Header>What are smart contracts?</Accordion.Header>
                <Accordion.Body>A  smart contract is an agreement between two people or entities in the form of computer code programmed to execute automatically.</Accordion.Body>
              </Accordion.Item>

        </Accordion>
        </div>
        <div className="faq-right">
              <Accordion>
              <Accordion.Item eventKey="4" className="acc">
                <Accordion.Header>How will I find the hawker selling the item I need?</Accordion.Header>
                <Accordion.Body>You can search the item you require in the searchbar and a list of the hawkers selling that particular item will be displayed.</Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="5" className="acc">
                <Accordion.Header>Having problem with the customer portal?</Accordion.Header>
                <Accordion.Body>You can reach out to us by filling the contact Us form</Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="6" className="acc">
                <Accordion.Header>What is partial payment?</Accordion.Header>
                <Accordion.Body>The partial payment option allows customers to pay a portion of the total cost upfront and schedule a visit from the hawker to their location. The remaining amount can be paid directly to the hawker during the visit.</Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="7" className="acc">
                <Accordion.Header>How to make transaction using metamask?</Accordion.Header>
                <Accordion.Body>First install metamask and then connect to our required network and you can make the required payment.</Accordion.Body>
              </Accordion.Item>

              </Accordion>
        </div>
      </div>
    </div>
  )
}

export default FAQC;