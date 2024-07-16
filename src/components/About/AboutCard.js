import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> 01001110 01101001 01100011 01101011 00100000 01001011 </span>
            from <span className="purple"> X6M3+FV.</span>
            <br />
            I am currently employed in Cognitera SA as a software engineer.
            <br />
            I am an ongoing student (BSc) in Computer Science and Networking at Hellenic Open University.
            <br />
            <br />
            I have completed my very intensive Full-Stack Developer Course at Athens University of Economics and Business.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Overthinking.
            </li>
            <li className="about-activity">
              <ImPointRight /> Trying to be functional.
            </li>
            <li className="about-activity">
              <ImPointRight /> Sleeping at night.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "One should use common words to say uncommon things"{" "}
          </p>
          <footer className="blockquote-footer">Arthur Schopenhauer</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
