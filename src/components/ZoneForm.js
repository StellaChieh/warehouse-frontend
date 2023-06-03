import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import axios from "../utilities/axios"
import { BAD_REQUEST, SERVER_ERROR } from "../utilities/HttpStatusCode"

export default function Zone({ zoneId, warehouseId }) {

  const MAXIMUM_SHELF_NAME_LENGTH = 20;
  const MAXIMUM_SHELF_NUMBER_IN_ZONE = 10;

  function onlyLettersAndNumbers(str) {
    return /^[A-Za-z0-9]*$/.test(str);
  }

  function validateShelfName(shelfNamesObj) {
    const existingNames = new Set();
    const errorMsgList = [];
    const validatedShelveNamesObj = {};
    let emptyNameCount = 0
    for (const shelfId in shelfNamesObj) {
      const shelfName = shelfNamesObj[shelfId];

      // check if the shelf name is not empty
      if (shelfName.length === 0) {
        emptyNameCount++;
        
      // check if the length of shelf name is less than 20
      } else if (shelfName.length > MAXIMUM_SHELF_NAME_LENGTH) {
        errorMsgList.push(shelfName + " is too long (maximum 20 characters).");
      
      // check if name is unique in this zone
      } else if (existingNames.has(shelfName)) {
        errorMsgList.push(shelfName + " is not a unique name in this Zone.");
        
      // check if name only contains English letters and numbers
      } else if (!onlyLettersAndNumbers(shelfName)) {
        errorMsgList.push(shelfName + " is not a valid shelf name.");
      
      } else {
        validatedShelveNamesObj[shelfId] = shelfName;
        existingNames.add(shelfName);
      }
    }

    if (emptyNameCount === MAXIMUM_SHELF_NUMBER_IN_ZONE) {
      errorMsgList.push("There is no shelf name defined.");
    }

    if (errorMsgList.length === 0) {
      return { 
        validateStatus: true,
        msg: validatedShelveNamesObj
      };
    } else {
      return {
        validateStatus: false,
        msg: errorMsgList,
      };
    }
  }

  async function submitForm(validatedIdAndShelfNames) {
    try {
      await axios.post("/api/warehouseZone", {
        warehouseId,
        zoneId,
        shelfNames: validatedIdAndShelfNames
      })
      alert("Submit successfully!")
    } catch (error) {
      if(error.response.status === BAD_REQUEST) {
        alert(error.response.data.msg)
      } else if (error.response.status === SERVER_ERROR) {
        alert("There is a temporary server error. Please try again later.")
      }
    }
  }

  async function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const shelfIdAndNames = Object.fromEntries(formData.entries());
    const { validateStatus, msg } = validateShelfName(shelfIdAndNames);
    if (validateStatus) {
      await submitForm(msg)
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
        Submit
      </Button>
    </Form>
  );
}
