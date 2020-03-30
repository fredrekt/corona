import React, {Component} from 'react'
import PreventionPage from './PreventionPage'
import PanelPage from './PanelPage'
import Doughnut from './Doughnut'
import JumbotronPage from './JumbotronPage'
import SpinnerPage from './SpinnerPage'

export default class HomeComponent extends Component{
    state = {
        newcases: '',
        recovered: '',
        total_deaths: '',
        deaths_new: '',
        total_infected: '',
        active_case: '',
        search: 'Philippines'
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
        this.setState({
            total_infected: <SpinnerPage/>,
            newcases:<SpinnerPage/>,
            total_infected:<SpinnerPage/>,
            active_case:<SpinnerPage/>,
            recovered:<SpinnerPage/>,
            total_deaths:<SpinnerPage/>,
            deaths_new:<SpinnerPage/>
        });

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            console.log(response.body)
            var obj = JSON.parse(response.body)
            console.log("New Cases:"+obj.response[0].cases.new)
            console.log("Recovered:"+obj.response[0].cases.recovered)
            console.log("Total Deaths:"+obj.response[0].deaths.total)
            console.log("Recent Deaths:"+obj.response[0].deaths.new)
            console.log("Total Infected:"+obj.response[0].cases.total)
            console.log("Country:"+obj.response[0].country)
            console.log("Update Day:"+obj.response[0].day)
            console.log("Country:"+obj.response[0].country)

            //body.send(obj)

            this.setState({
                newcases:obj.response[0].cases.new,
                total_infected:obj.response[0].cases.total,
                active_case:obj.response[0].cases.active,
                recovered:obj.response[0].cases.recovered,
                total_deaths:obj.response[0].deaths.total,
                deaths_new:obj.response[0].deaths.new
            })
        }.bind(this));
    }
    changeState = (e) =>{
        e.preventDefault()
        this.setState({newcase:'changed'})
    }
    render(){
        return(
            <div>
            <JumbotronPage/>
            <PanelPage 
            country={this.state.search}
            total_infected={this.state.total_infected}
            total_dead={this.state.total_deaths}
            total_recent_dead={this.state.deaths_new}
            new_case ={this.state.newcases}
            active_case={this.state.active_case}
            case_recovered={this.state.recovered}
            />
            <Doughnut
            ncases={this.state.newcases}
            rdeaths={this.state.deaths_new}
            active={this.state.active_case}
            />
            <PreventionPage/>

            </div>
        );
    }
}