import React from 'react';
import './styleNews.css';
import LineChart from '../../../components/Charts/LineChart';

class News extends React.Component {
    render() {
        const dataDariBackend = ['14', '33', '10', '19', '29', '12', '14', '23', '10', '29', '29', '12']

        // let dataInt= [];

        // dataDariBackend.map(val => (
        //     dataInt.push(parseInt(val))
        // ));
        
        const dataCartNews = [{
            name: 'Likes',
            data: dataDariBackend
          }]
        return (
            <div>
                <LineChart 
                    dataChartLine={dataCartNews}
                    titleLabel="Chart News"
                />
            </div>
        );
    }
}

export default News;