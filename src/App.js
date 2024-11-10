import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import { Container, Typography, CircularProgress, Box } from '@mui/material';
import SimpleEVTable from './components/SimpleEVTable';
import SummaryCard from './components/SummaryCard';
import Pagination from '@mui/material/Pagination';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    // Load CSV and set data
    d3.csv(`${process.env.PUBLIC_URL}/Electric_Vehicle_Population_Data.csv`).then((data) => {
      setData(data);
      setLoading(false);
    });
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const paginatedData = data.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <Container maxWidth="lg" className="App">
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        EV Analytics Dashboard
      </Typography>

      {loading ? (
        <div className="loading-container">
          <CircularProgress color="primary" />
        </div>
      ) : (
        <>
          <Box className="summary-section">
            <SummaryCard title="Total EVs" value={data.length} />
            <SummaryCard title="Unique Models" value={new Set(data.map(d => d.Model)).size} />
            <SummaryCard title="Average Range (mi)" value={Math.round(d3.mean(data, d => +d['Electric Range']) || 0)} />
          </Box>

          <SimpleEVTable data={paginatedData} />
          
          <Box className="pagination-container">
            <Pagination
              count={Math.ceil(data.length / rowsPerPage)}
              page={page}
              onChange={handleChangePage}
              color="primary"
            />
          </Box>
        </>
      )}
    </Container>
  );
}

export default App;
