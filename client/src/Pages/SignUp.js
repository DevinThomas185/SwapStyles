import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function SignUp() {
  const [details, setDetails] = React.useState({});
  const [validated, setValidated] = React.useState(false);

  function handleSubmit(e) {
      e.preventDefault()

      const form = e.currentTarget

      if (form.checkValidity() === false) {
          e.preventDefault()
          e.stopPropagation()
      }
      setValidated(true)

      const request = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              username: details.username,
              password: details.password,
          })
      }


      fetch('/api/signup', request)
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setDetails({
        ...details,
        [name]: value
    });
  }

  return (
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
              <Form.Group controlId="validationCustom01" as={Col}>
                  <FloatingLabel label="Username">
                      <Form.Control
                          required
                          type="text"
                          name="username"
                          placeholder="Enter Title"
                          onChange={handleChange}
                      />
                      <Form.Control.Feedback>Cool Username!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">Please provide a username.</Form.Control.Feedback>
                  </FloatingLabel>
              </Form.Group>
          </Row>

          <Row className="mb-3">
              <Form.Group controlId="validationCustom02" as={Col}>
                  <FloatingLabel label="Password">
                      <Form.Control
                          required
                          type="text"
                          name='password'
                          placeholder="Enter Description"
                          onChange={handleChange}
                      />
                      <Form.Control.Feedback>Nice password!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">Please provide a password.</Form.Control.Feedback>
                  </FloatingLabel>
              </Form.Group>
          </Row>

          <Row className="mb-3">
              <Form.Group as={Col}>
                  <Button variant="primary" type="submit">
                      Submit
                  </Button>
              </Form.Group>
          </Row>
      </Form>

  );
}

export default SignUp
