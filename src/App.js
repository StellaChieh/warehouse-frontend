import "./App.css";
import Zone from "./ZoneForm";
import { Container, Accordion } from "react-bootstrap";

function App() {
  const zoneIndex = Array.from({ length: 12 }, (value, index) => index);
  const zones = zoneIndex.map((val, index) => {
    const zoneNumber = index + 1;
    return (
      <Accordion.Item eventKey={zoneNumber} key={zoneNumber}>
        <Accordion.Header>Zone {zoneNumber}</Accordion.Header>
        <Accordion.Body>
          <Zone zoneNumber={zoneNumber} />
        </Accordion.Body>
      </Accordion.Item>
    );
  });

  return (
    <Container className="App">
      <h1>Define a Warehouse</h1>
      <p>
        1. Every shift name should be unique across whole warehouse.
        <br />
        2. The length of a shift name can not be longer than 20 characters.
        <br />
        3. Only English letters and numbers are allowed in shift names.
      </p>
      <Accordion defaultActiveKey="1" alwaysOpen>
        {zones}
      </Accordion>
    </Container>
  );
}

export default App;
