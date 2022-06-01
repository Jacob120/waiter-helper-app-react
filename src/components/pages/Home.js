import { Col, Row, Button } from 'react-bootstrap'

const Home = () => {
  return (
    <div>
      <h1 className="mt-5">All tables</h1>
      <Row>
        <Row className="align-items-end">
          <Col className="col-3 d-flex align-items-end justify-content-between">
            <h2 className="mb-0">Table 1</h2>
            <p className="mb-0 pl-3">Status: Reserved</p>
          </Col>
          <Col className="col-9 d-flex justify-content-end">
            <Button variant="primary"  size="sm">Show more</Button>
          </Col>
        </Row>
      </Row>
      <hr />
    </div>
  )
}

export default Home