import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
// import Icon from "components/Icon";
import PageSection from "components/PageSection";

import "./style.css"


const Contact = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header, subheader, telephone, email } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row className="justify-content-center">
        <Col lg={8} className="text-center">
          <h2 className="mt-0">{header}</h2>
          <hr className="divider my-4" />
          <p className="text-muted mb-5">{subheader}</p>
        </Col>
      </Row>
      <div className="contact-section">
        <form className="contact-form" action="https://formspree.io/xdowrjre" method="POST">
          <input type="text" className="contact-form-text" placeholder="Name"/>
          <input type="email" className="contact-form-text" placeholder="Email"/>
          <textarea className="contact-form-text" placeholder="Message"/>
          <input type="submit" className="contact-form-btn" value="Send"/>
        </form>
      </div>
    </PageSection>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Contact.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Contact;


