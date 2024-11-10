import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function SummaryCard({ title, value }) {
  return (
    <Card className="summary-card" variant="outlined">
      <CardContent>
        <Typography variant="h6" component="p">
          {title}
        </Typography>
        <Typography variant="h4" component="p" color="primary">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SummaryCard;
