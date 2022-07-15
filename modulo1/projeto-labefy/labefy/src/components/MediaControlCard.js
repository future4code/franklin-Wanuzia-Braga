import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ReactAudioPlayer from 'react-audio-player';

export default function MediaControlCard(props) {
    return (
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5" color='secondary'>
                        {props.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {props.artist}
                    </Typography>
                </CardContent>
                <ReactAudioPlayer
                    src={props.src}
                    controls />
            </Box>
        </Card>
    );
}