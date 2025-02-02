import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, CardActions, Button, Grid, Box } from '@mui/material';
import './VoterDashboard.css';

const mockPolls = [
  {
    id: 1,
    title: 'Presidential Election 2025',
    description: 'Cast your vote for the next President of India.',
    candidates: ['Candidate A', 'Candidate B', 'Candidate C'],
    hasVoted: false,
  },
  {
    id: 2,
    title: 'Local Municipality Elections',
    description: 'Choose your representative for the city council.',
    candidates: ['Candidate X', 'Candidate Y', 'Candidate Z'],
    hasVoted: false,
  },
];

const mockVotingHistory = [
  {
    id: 1,
    title: 'Presidential Election 2020',
    votedFor: 'Candidate A',
    date: '2020-07-15',
  },
  {
    id: 2,
    title: 'Local Municipality Elections 2020',
    votedFor: 'Candidate X',
    date: '2020-08-01',
  },
];

const mockConstituency = {
  name: 'Constituency 12',
  representative: 'Candidate Y',
  population: '1,000,000',
  state: 'State A',
  region: 'Region X',
};

const VoterDashboard = () => {
  const [polls, setPolls] = useState(mockPolls);
  const [showSection, setShowSection] = useState('polls');

  const handleVote = (pollId) => {
    const updatedPolls = polls.map((poll) =>
      poll.id === pollId ? { ...poll, hasVoted: true } : poll
    );
    setPolls(updatedPolls);
    alert(`Thank you for voting in poll ID ${pollId}!`);
  };

  return (
    <Container className="voter-dashboard-container">
      {/* Hero Section */}
      <Box className="voter-dashboard-hero">
        <Typography variant="h4" className="section-title" gutterBottom>
          Welcome to Your Voter Dashboard
        </Typography>
        <Typography variant="subtitle1" className="section-margin">
          Manage your voting activities and stay updated with your constituency.
        </Typography>
      </Box>

      {/* Navigation Buttons */}
      <Box className="navigation-links">
        <Button
          onClick={() => setShowSection('polls')}
          className={`nav-button ${showSection === 'polls' ? 'active' : ''}`}
        >
          Active Polls
        </Button>
        <Button
          onClick={() => setShowSection('history')}
          className={`nav-button ${showSection === 'history' ? 'active' : ''}`}
        >
          Voting History
        </Button>
        <Button
          onClick={() => setShowSection('constituency')}
          className={`nav-button ${showSection === 'constituency' ? 'active' : ''}`}
        >
          Constituency Information
        </Button>
      </Box>

      {/* Active Polls Section */}
      {showSection === 'polls' && (
        <Box className="active-polls section-margin">
          <Typography variant="h5" className="section-title">
            Active Polls
          </Typography>
          <Grid container spacing={3}>
            {polls.map((poll) => (
              <Grid item xs={12} md={6} key={poll.id}>
                <Card className="card">
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {poll.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {poll.description}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ mt: 2 }}>
                      Candidates: <p>Candidate 1</p> <br />
                      <p>Candidate 2</p> <br />
                      <p>Candidate 3</p> 
                    </Typography>
                    <ul className="candidate-list">
                      {poll.candidates.map((candidate, index) => (
                        <li key={index}>{candidate}</li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions className="card-actions">
                    {poll.hasVoted ? (
                      <Button variant="contained" disabled className="vote-button">
                        Voted
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        onClick={() => handleVote(poll.id)}
                        className="vote-button"
                      >
                        Vote Now
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* Voting History Section */}
      {showSection === 'history' && (
        <Box className="voting-history section-margin">
          <Typography variant="h5" className="section-title">
            Voting History
          </Typography>
          {mockVotingHistory.map((history) => (
            <Card key={history.id} className="history-card">
              <CardContent>
                <Typography variant="h6">{history.title}</Typography>
                <Typography variant="body2">Voted for: {history.votedFor}</Typography>
                <Typography variant="body2">Date: {history.date}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}

      {/* Constituency Information Section */}
      {showSection === 'constituency' && (
        <Box className="constituency-info section-margin">
          <Typography variant="h5" className="section-title">
            Constituency Information
          </Typography>
          <Card className="constituency-card">
            <CardContent>
              <Typography variant="h6">Constituency: {mockConstituency.name}</Typography>
              <Typography variant="body2">Representative: {mockConstituency.representative}</Typography>
              <Typography variant="body2">Population: {mockConstituency.population}</Typography>
              <Typography variant="body2">State: {mockConstituency.state}</Typography>
              <Typography variant="body2">Region: {mockConstituency.region}</Typography>
            </CardContent>
          </Card>
        </Box>
      )}
    </Container>
  );
};

export default VoterDashboard;