import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const FilterBar = ({ filter, setFilter }) => {
  return (
    <Form className="mb-4 bg-light p-3 border border-info rounded">
      <Row className="align-items-center">
        <Col xs="auto">
          <Form.Label className="mb-0 fw-bold text-primary">Filter by Status:</Form.Label>
        </Col>
        <Col xs="auto">
          <Form.Select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="">All</option>
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </Form.Select>
        </Col>
      </Row>
    </Form>
  );
};

export default FilterBar;
