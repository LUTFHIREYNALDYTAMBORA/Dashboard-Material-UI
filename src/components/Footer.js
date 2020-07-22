import React from "react";
import Tooltip from '@material-ui/core/Tooltip';
import { Grid } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

class Footer extends React.Component {
    render() {
        return(
            <div className="container-footer">
                    <footer className="footer">
                        <Grid container spacing={2} style={{paddingTop:'30px'}}>
                            <Grid item xs={4}>   
                                <img 
                                    src="https://pngimg.com/uploads/fcb_logo/fcb_logo_PNG25.png" 
                                    style={{width:'150px'}}
                                />
                                <h3>Football Club Barcelona</h3>
                            </Grid>
                            <Grid item xs={4}>
                                <Grid container spacing={4} style={{textAlign:'left'}} >
                                    <Grid item xs={6}>
                                        <a href="#"><b>About Us</b></a>
                                    </Grid>   
                                    <Grid item xs={6}>
                                        <a href="#"><b>Contact</b></a>
                                    </Grid>   
                                    <Grid item xs={6}>
                                        <a href="#"><b>Match UEFA</b></a>
                                    </Grid>   
                                    <Grid item xs={6}>
                                        <a href="#"><b>Match League</b></a>
                                    </Grid>   
                                    <Grid item xs={6}>
                                        <a href="#"><b>Careers</b></a>
                                    </Grid>   
                                    <Grid item xs={6}>
                                        <a href="#"><b>Players</b></a>
                                    </Grid>   
                                    <Grid item xs={6}>
                                        <a href="#"><b>Watch Streaming</b></a>
                                    </Grid>   
                                    <Grid item xs={6}>
                                        <a href="#"><b>News</b></a>
                                    </Grid>   
                                </Grid>
                            </Grid>
                            <Grid item xs={4}>   
                                <Grid container spacing={1}>
                                    <Grid item xs={12}> 
                                        <h1><u> SUPPORT US ON</u></h1>
                                    </Grid>
                                    <Grid item xs={12} style={{cursor:'pointer'}} alignItems='center'>
                                        <FacebookIcon fontSize='large' style={{paddingRight:'10px'}} />
                                        <TwitterIcon fontSize='large' style={{paddingRight:'10px'}} />
                                        <InstagramIcon fontSize='large' style={{paddingRight:'10px'}} />
                                        <YouTubeIcon fontSize='large' style={{paddingRight:'10px'}} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12}>
                                    <p>&copy; 2020 F.C. Barcelona </p>
                                </Grid>
                            </Grid>
                        </Grid>
                    </footer>

            </div>
        );
    }
}

export default Footer;