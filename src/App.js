import "./App.css";
import Zone from "./components/ZoneForm";
import { Container, Accordion } from "react-bootstrap";

function App() {
  const warehouseId = "0";
  const zoneIndex = Array.from({ length: 12 }, (value, index) => index);
  const zones = zoneIndex.map((val, index) => {
    const zoneId = index;
    return (
      <Accordion.Item eventKey={zoneId} key={zoneId}>
        <Accordion.Header>Zone {zoneId}</Accordion.Header>
        <Accordion.Body>
          <Zone zoneId={zoneId} warehouseId={warehouseId} />
        </Accordion.Body>
      </Accordion.Item>
    );
  });

  return (
    <Container className="App">
      <h1>Define Warehouse {warehouseId}</h1>
      <p>
        1. Every shelf name should be unique across whole warehouse.
        <br />
        2. The length of a shelf name can not be longer than 20 characters.
        <br />
        3. Only English letters and numbers are allowed in shelf names.
      </p>
      <Accordion defaultActiveKey="1" alwaysOpen>
        {zones}
      </Accordion>
    </Container>
  );
}

export default App;
