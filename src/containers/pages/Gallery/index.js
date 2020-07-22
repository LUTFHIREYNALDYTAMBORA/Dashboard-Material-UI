import React from 'react';
import { Grid, Card, CardContent } from '@material-ui/core';

class GalleryPhotos extends React.Component {

    // _renderGallery = () => {
    //     const photos = [
    //         {
    //             title: 'Camp Nou',
    //             img: 'https://i.pinimg.com/originals/00/86/a1/0086a1b45701582b6d830dc622d27db5.jpg'
    //         },

    //     ]
    // }

    render() {
        return(
                <Grid container spacing={2}>
                    <Grid item xs={6}>
            <Card style={{height:'200px', position:'absolute'}}>
                <CardContent>
                        <img src="https://i.pinimg.com/originals/00/86/a1/0086a1b45701582b6d830dc622d27db5.jpg" />
                </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardContent>
                        <img src="https://i.pinimg.com/originals/bb/3f/2a/bb3f2a9214fb3de358be7f734371ecad.jpg" />
                            </CardContent>
            </Card>
                    </Grid>
                </Grid>
        );
    }
}

export default GalleryPhotos;