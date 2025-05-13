import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";


function ProjectCards(props) {
  return (
    <Card className="project-card-view" style={{ display: "flex", flexDirection: "column" }}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      
      <Card.Body style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <Card.Title>{props.title}</Card.Title>
        
        <Card.Text style={{ textAlign: "left" }}>
          {props.description}
        </Card.Text>

        {/* Spacer to push the button down */}
        <div style={{ flexGrow: 1 }}></div>

        {!props.isBlog && props.demoLink && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: "auto" }}>
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
            >
              <CgWebsite /> &nbsp;{"Demo"}
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
