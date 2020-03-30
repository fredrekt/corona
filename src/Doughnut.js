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
      componentDidMount(){
        var search = this.state.search
        var request = require("request");
        

        var options = {
        method: 'GET',
        url: 'https://covid-193.p.rapidapi.com/statistics',
        qs: {country: search},
        headers: {
            'x-rapidapi-host': 'covid-193.p.rapidapi.com',
            'x-rapidapi-key': '2c0aa52ce7msh240a02a5770adccp17173ajsn0bb6849ac49d'
        }
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            //console.log(JSON.parse(body));
            // console.log(response.body)
            // var obj = JSON.parse(response.body)
            // console.log("New Cases:"+obj.response[0].cases.new)
            // console.log("Recovered:"+obj.response[0].cases.recovered)
            // console.log("Total Deaths:"+obj.response[0].deaths.total)
            // console.log("Recent Deaths:"+obj.response[0].deaths.new)
            // console.log("Total Infected:"+obj.response[0].cases.total)
            // console.log("Country:"+obj.response[0].country)
            // console.log("Update Day:"+obj.response[0].day)
            // console.log("Country:"+obj.response[0].country)
            
            //this.setState({casesnew:obj.response[0].cases.new })
        }.bind(this));
        }
        clicked(){
            //e.preventDefault();
            console.log('clicked')
            //window.location.reload();
            this.setState({search:'China'})
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