import React, {Component} from 'react';
import { Doughnut } from 'react-chartjs-2';
import { MDBContainer } from "mdbreact";

export default class PieChart extends Component{
    constructor(props) {
        super(props);
        this.state = {
          search: 'Philippines',
          data: [],
        };
      }
    render(){
        const data = {
            labels: [
                'New Cases',
                'Recent Deaths',
                'Active Cases'
            ],
            datasets: [{
                data: [this.props.ncases, this.props.rdeaths, this.props.active],
                backgroundColor: [
                '#ffbb33',
                '#212121',
                '#33b5e5'
                ],
                hoverBackgroundColor: [
                '#ffbb33',
                '#212121',
                '#33b5e5'
                ]
            }]
        };
        return(
            <div style={{'margin-top':'10%','margin-bottom':'10%'}}>
                <MDBContainer>
                    <div className="text-center">
                        <h1 className="display-4">
                            Daily Chart of the Virus
                        </h1>
                        <hr width="40%"/>
                        <p className="grey-text">
                            This chart is about the deadly corona virus statistics
                        </p>
                    </div>
                    <Doughnut data={data} />
                </MDBContainer>
            </div>
        );
    }
}