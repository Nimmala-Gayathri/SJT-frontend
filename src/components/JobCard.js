import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';

const statusColor = {
  Applied: 'info',
  Interview: 'warning',
  Offer: 'success',
  Rejected: 'danger'
};

const JobCard = ({ job, onDelete, onStatusChange }) => {
  return (
    <Card
      className={`mb-3 shadow border-${statusColor[job.status]}`}
      bg="light"
      text="dark"
    >
      <Card.Body>
        <Card.Title className="text-primary">{job.company}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{job.role}</Card.Subtitle>
        <Card.Text>
          <strong>Status:</strong> <span className={`text-${statusColor[job.status]}`}>{job.status}</span><br />
          <strong>Date:</strong> {new Date(job.appliedDate).toLocaleDateString()}<br />
          {job.link && (
            <>
              <strong>Link:</strong>{' '}
              <a href={job.link} target="_blank" rel="noreferrer">
                View Application
              </a>
            </>
          )}
        </Card.Text>

        <Form.Group className="mb-2">
          <Form.Label>Update Status</Form.Label>
          <Form.Select
            value={job.status}
            onChange={(e) => onStatusChange(job._id, e.target.value)}
          >
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </Form.Select>
        </Form.Group>

        <Button variant="danger" onClick={() => onDelete(job._id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default JobCard;
