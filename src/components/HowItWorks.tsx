import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from './Typography';
import styled from '@emotion/styled';

function HowItWorks() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', bgcolor: '#fff5f8', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src="/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography
          variant="h4"
          marked="center"
          component="h2"
          sx={{ mb: 14 }}
          textTransform={'uppercase'}
        >
          How it works
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Item className={'item'}>
                <Number>1.</Number>
                <Box
                  component="img"
                  src="/productHowItWorks1.svg"
                  alt="suitcase"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Appointment every Wednesday 9am.
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item>
                <Number>2.</Number>
                <Box
                  component="img"
                  src="/productHowItWorks2.svg"
                  alt="graph"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  First come, first served. Our offers are in limited
                  quantities, so be quick.
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item>
                <Number>3.</Number>
                <Box
                  component="img"
                  src="/productHowItWorks3.svg"
                  alt="clock"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  {'New offers every week. New experiences, new surprises. '}
                  {'Your Sundays will no longer be alike.'}
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </div>
        <Button
          size="large"
          variant="contained"
          component="a"
          sx={{ mt: 8, background: '#ff3366' }}
        >
          Get started
        </Button>
      </Container>
    </Box>
  );
}

const Item = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 40px',
});

const Number = styled(Box)({
  fontSize: 24,
  fontFamily: 'default',
  color: '#ff3366',
  fontWeight: 'medium',
});

const image = {
  height: 55,
  my: 4,
};

export default HowItWorks;
