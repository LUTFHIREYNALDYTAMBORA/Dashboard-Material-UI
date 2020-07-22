import React from 'react';
// import MaterialTbale from 'material-table';
import './styleTransfer.css';
import Tables from '../../../components/Tables';
import { Grid, CardContent, Card } from '@material-ui/core';

export default class Transfer extends React.Component {
    
        _renderTableTransfer = () => {
            const dataTableTransfer = [
                    {
                        fullName: 'Lutfhi',
                        birthYear: 1992,
                        birthPlace: 'Bandung',
                        moveTo: 'Persib'
                    },
                    {
                        fullName: 'Reynaldy',
                        birthYear: 1991,
                        birthPlace: 'Ciparay',
                        moveTo: 'Persija'
                    },
                    {
                        fullName: 'Tambora',
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
                                dataTables={dataTableTransfer}
                                title="Tabel Transfer"
                            />
                        </CardContent>
                    </Card>
                </Grid>
            );
        }
    
        render() {
            return (
                <Grid container spacing={2} >
                    {this._renderTableTransfer()}
                </Grid>
            );
        }
    
}
