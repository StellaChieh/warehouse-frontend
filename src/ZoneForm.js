import { Button, Col, Form, Row } from "react-bootstrap";

export default function Zone({ zoneNumber }) {
  function onlyLettersAndNumbers(str) {
    return /^[A-Za-z0-9]*$/.test(str);
  }

  function validateShelfName(shelfNames) {
    let emptyNameCount = 0;
    const existingNames = new Set();
    const errorMsgList = new Array();
    for (let i = 0; i < 10; i++) {
      const shelfName = shelfNames[i];
      // check if the shelf name is not empty
      if (shelfName.length == 0) {
        emptyNameCount++;
        continue;
      }
      // check if the length of shalf name is smaller than 20
      if (shelfName.length > 20) {
        errorMsgList.push(shelfName + " is too long (maximum 20 characters).");
      }
      // check if name is unique in this zone
      if (existingNames.has(shelfName)) {
        errorMsgList.push(shelfName + " is not a unique name in the Zone.");
      } else {
        existingNames.add(shelfName);
      }

      // check if name only contains English letters and numbers
      if (!onlyLettersAndNumbers(shelfName)) {
        errorMsgList.push(shelfName + " is not a valid shelf name.");
      }
    }

    if (emptyNameCount == 10) {
      errorMsgList.push("There is no shelf name defined.");
    }

    if (errorMsgList.length == 0) {
      return { validateStatus: true };
    } else {
      return {
        validateStatus: false,
        msg: errorMsgList,
      };
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());
    const { validateStatus, msg } = validateShelfName(formDataObj);
    if (validateStatus) {
      alert("Y");
    } else {
      alert(msg);
    }
  }

  let columNumber = 0;
  return (
    <Form onSubmit={submitHandler}>
      <Row className="mb-3">
        <Col>
          <Form.Control placeholder="Input Shelf Name" name={columNumber++} />
        </Col>
        <Col>
          <Form.Control placeholder="Input Shelf Name" name={columNumber++} />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Control placeholder="Input Shelf Name" name={columNumber++} />
        </Col>
        <Col>
          <Form.Control placeholder="Input Shelf Name" name={columNumber++} />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Control placeholder="Input Shelf Name" name={columNumber++} />
        </Col>
        <Col>
          <Form.Control placeholder="Input Shelf Name" name={columNumber++} />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Control placeholder="Input Shelf Name" name={columNumber++} />
        </Col>
        <Col>
          <Form.Control placeholder="Input Shelf Name" name={columNumber++} />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Control placeholder="Input Shelf Name" name={columNumber++} />
        </Col>
        <Col>
          <Form.Control placeholder="Input Shelf Name" name={columNumber++} />
        </Col>
      </Row>
      <Button variant="primary" type="submit" size="sm">
        {" "}
        Submit{" "}
      </Button>
    </Form>
  );
}
