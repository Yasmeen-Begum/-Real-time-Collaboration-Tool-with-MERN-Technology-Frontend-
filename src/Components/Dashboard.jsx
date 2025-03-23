import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from '@mui/material';

const Dashboard = () => {
  const [documents, setDocuments] = useState([]);
  const navigate = useNavigate();

  // Fetch documents when the component loads
  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        const token = user ? user.token : null;

        const { data } = await axios.get('http://localhost:5000/api/documents', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setDocuments(data);
      } catch (error) {
        console.error('Failed to fetch documents:', error);
        navigate('/');
      }
    };
    fetchDocuments();
  }, [navigate]);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom sx={{ marginTop: '20px' }}>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        {documents.map((doc) => (
          <Grid item xs={12} sm={6} md={4} key={doc._id}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  {doc.title}
                </Typography>
                <Typography color="text.secondary">
                  Created on: {new Date(doc.createdAt).toLocaleDateString()}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: '10px' }}
                  component={Link}
                  to={`/document/${doc._id}`}
                >
                  Open Document
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <Button
          variant="contained"
          color="success"
          onClick={() => navigate('/document/new')}
        >
          Create New Document
        </Button>
      </div>
    </Container>
  );
};

export default Dashboard;
