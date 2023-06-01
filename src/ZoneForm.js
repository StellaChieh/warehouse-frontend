import { Button, Col, Form, Row } from 'react-bootstrap';


export default function Zone ({zoneNumber}) {

    function submitHandler(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const formDataObj = Object.fromEntries(formData.entries())
        console.log(formDataObj)
        console.log("zone: ", zoneNumber);
    }

    let columNumber = 0
    return (
        <Form onSubmit={submitHandler}>
            <Row className="mb-3">
                <Col>
                    <Form.Control placeholder="Input Shelf Name" name={columNumber++}/>
                </Col>
                <Col>
                    <Form.Control placeholder="Input Shelf Name" name={columNumber++}/>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Form.Control placeholder="Input Shelf Name" name={columNumber++}/>
                </Col>
                <Col>
                    <Form.Control placeholder="Input Shelf Name" name={columNumber++}/>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Form.Control placeholder="Input Shelf Name" name={columNumber++}/>
                </Col>
                <Col>
                    <Form.Control placeholder="Input Shelf Name" name={columNumber++}/>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Form.Control placeholder="Input Shelf Name" name={columNumber++}/>
                </Col>
                <Col>
                    <Form.Control placeholder="Input Shelf Name" name={columNumber++}/>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Form.Control placeholder="Input Shelf Name" name={columNumber++}/>
                </Col>
                <Col>
                    <Form.Control placeholder="Input Shelf Name" name={columNumber++}/>
                </Col>
            </Row>
            <Button variant="primary" type="submit" size="sm"> Submit </Button>
        </Form>
        
    );
};