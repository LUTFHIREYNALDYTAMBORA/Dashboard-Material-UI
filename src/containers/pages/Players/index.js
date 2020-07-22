import React from 'react';
// import MaterialTbale from 'material-table';
import { Grid, Card, CardContent } from '@material-ui/core';
import Tables from '../../../components/Tables';

export default class Players extends React.Component {

    _renderTablePlayers = () => {
        const dataTablePlayers = [
            
                {
                    fullName: 'Ujang Garuk',
                    birthYear: 1992,
                    birthPlace: 'Bandung',
                    moveTo: 'Persib'
                },
                {
                    fullName: 'Aceng',
                    birthYear: 1991,
                    birthPlace: 'Ciparay',
                    moveTo: 'Persija'
                },
                {
                    fullName: 'Akum',
                    birthYear: 1990,
                    birthPlace: 'Pangandaran',
                    moveTo: 'Persija'
                }
            ]
          
        return (
            <Grid item xs={12}>
                <Card>
                    <CardContent>
                        <Tables
                            dataTables={dataTablePlayers}
                            title="Tabel Players"
                        />
                    </CardContent>
                </Card>
            </Grid>
        );
    }

    render() {
        return (
            <Grid container spacing={2}  >
                {this._renderTablePlayers()}
            </Grid>
        );
    }
}
