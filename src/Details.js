import React from 'react'
import { useState } from 'react';
import { Typography, Drawer, Button, Box, Stack} from '@mui/material';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import CalculateIcon from '@mui/icons-material/Calculate';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';

function Details() {
const [state, setState] = useState(false)
const toggleDrawer =(status)=> {
    setState(status)
}

  return (
    <div className='d-flex justify-content-center'>
        <Button variant="text" onClick={() => toggleDrawer(true)} size="small" startIcon={<TextSnippetOutlinedIcon />}>Predictor Performance</Button>
        <Drawer anchor='left' open={state} onClose={() => toggleDrawer(false)}>
            <Box padding={3}>
                <Stack direction="row" spacing={1}>
                    <CalculateIcon />
                    <Typography variant='h6' gutterBottom>Predictor Model V.1</Typography>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <ArrowRightOutlinedIcon />
                    <Typography variant='body1' gutterBottom>Sensitivity 84.07%</Typography>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <ArrowRightOutlinedIcon />
                    <Typography variant='body1' gutterBottom>Specificity 83.68%</Typography>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <ArrowRightOutlinedIcon />
                    <Typography variant='body1' gutterBottom>Positive predictive value 85.97%</Typography>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <ArrowRightOutlinedIcon />
                    <Typography variant='body1' gutterBottom>Negative predictive value 81.54%</Typography>
                </Stack>
                <hr />
                <Typography variant='caption'>Orthopedic department of Hatyai hospital</Typography>
            </Box>
        </Drawer>
    </div>
  );
}

export default Details