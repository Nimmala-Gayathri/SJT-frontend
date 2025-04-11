import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Alert } from 'react-bootstrap';
import AddJobForm from '../components/AddJobForm';
import JobCard from '../components/JobCard';
import FilterBar from '../components/FilterBar';

const API = 'http://localhost:5000/api/jobs'; // Replace with your deployed API

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState('');

  const fetchJobs = async () => {
    try {
      const res = await axios.get(API + (filter ? `?status=${filter}` : ''));
      setJobs(res.data);
    } catch (err) {
      console.error('Fetch error:', err.message);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [filter]);

  const handleDelete = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchJobs();
  };

  const handleStatusUpdate = async (id, newStatus) => {
    await axios.put(`${API}/${id}`, { status: newStatus });
    fetchJobs();
  };

  return (
    <Container className="py-4">
      <Card className="mb-4 text-center shadow-sm">
        <Card.Body>
          <h1 className="fw-bold">🎯 Student Job Tracker</h1>
          <p className="text-muted">Track, filter, and manage your job applications with ease!</p>
        </Card.Body>
      </Card>

      <Row className="mb-4">
        <Col md={12}>
          <AddJobForm onJobAdded={fetchJobs} />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={12}>
          <FilterBar filter={filter} setFilter={setFilter} />
        </Col>
      </Row>

      <Row>
        {jobs.length ? (
          jobs.map((job) => (
            <Col key={job._id} sm={12} md={6} lg={4} className="mb-4">
              <JobCard
                job={job}
                onDelete={handleDelete}
                onStatusChange={handleStatusUpdate}
              />
            </Col>
          ))
        ) : (
          <Col>
            <Alert variant="info" className="text-center">
              No job applications found.
            </Alert>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Home;
