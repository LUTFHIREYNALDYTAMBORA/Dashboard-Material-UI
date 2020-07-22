import React from 'react';
import MaterialTbale from 'material-table';

export default class Tables extends React.Component {
    render() {
        const {dataTables, title} = this.props;
        const columns = [
                {
                    title: 'Full Name',
                    field: 'fullName',
                },
                {
                    title: 'Birth Year',
                    field: 'birthYear',
                },
                {
                    title: 'Birth Place',
                    field: 'birthPlace',
                },
                {
                    title: 'Move To',
                    field: 'moveTo'
                }
            ]
        
        return(
            <div id="table">
                <MaterialTbale
                    columns= {columns} 
                    title={title}
                    data= {dataTables}   
                />
            </div>
        );
    }
}