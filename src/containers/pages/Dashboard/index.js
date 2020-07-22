import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Grid } from '@material-ui/core';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import PersonIcon from '@material-ui/icons/Person';
import './styleDashboard.css';
import LineChart from '../../../components/Charts/LineChart';
 
export default class Dashboard extends React.Component {

    _renderLineChart = () => {
        const dataCartDashboard = [{
            name: 'Likes',
            data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
          }]
        return (
            
            <Grid item xs={12}>
                <Card>
                    <CardContent>
                        <LineChart 
                            dataChartLine={dataCartDashboard}
                            titleLabel="Title Dari Dashboard"
                        />
                    </CardContent>
                </Card>
            </Grid>

        )
    }

    _renderCardNews = () => {
        const cards = [
            {
                title: 'News',
                icon: <MenuBookIcon style={{fontSize:'50px'}} />
            },
            {
                title: 'Match',
                icon: <SportsSoccerIcon style={{fontSize:'50px'}}/>
            },
            {
                title: 'Players',
                icon: <PersonIcon style={{fontSize:'50px'}}/>
            },
        ];
        return (
            <React.Fragment>
                {cards.map((value, index) => {
                    return(
                        <Grid item xs={4} key={index}>
                            <Card>
                                <CardContent>
                                    <div>
                                    {value.icon}

                                    </div>
                                    <div>
                                    {value.title}

                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}
            </React.Fragment>
        )
    }

    render() {
        
        return (
            <Grid container spacing={2}  >
                {this._renderCardNews()}
                {this._renderLineChart()}
            </Grid>
            

        );
    }

}