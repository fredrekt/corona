import React, {Component} from 'react'
import PreventionPage from './components/home/PreventionPage'
import PanelPage from './components/home/PanelPage'
import Doughnut from './components/home/Doughnut'
import JumbotronPage from './components/home/JumbotronPage'
import SpinnerPage from './components/SpinnerPage'
import CarouselPage from './components/home/CarouselPage'
import GeoLocation from './components/home/GeoLocation';


export default class HomeComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            newcases: '',
            recovered: '',
            total_deaths: '',
            deaths_new: '',
            total_infected: '',
            active_case: '',
            updated_at: '',
            search: 'Philippines',
            data: ''
        }
    }

    componentDidMount(){        
        var countryList = require("country-list")
        var request = require("request");

        //fetching country code throught api
        fetch('http://api.geonames.org/countryCodeJSON?lat=10.272768&lng=123.85976319999997&username=brix')
        .then(response=>response.json())
        .then(data=>this.setState({data}))

        
        var countryName = countryList.getName('PH')

        //spinners 
        this.setState({
            total_infected: <SpinnerPage/>,
            newcases:<SpinnerPage/>,
            active_case:<SpinnerPage/>,
            recovered:<SpinnerPage/>,
            total_deaths:<SpinnerPage/>,
            deaths_new:<SpinnerPage/>,
            updated_at:<SpinnerPage/>,
            search: countryName
        });
        //end spinners

        console.log(this.state.data)
        var options = {
        method: 'GET',
        url: 'https://covid-193.p.rapidapi.com/statistics',
        qs: {country: countryName},
        headers: {
            'x-rapidapi-host': 'covid-193.p.rapidapi.com',
            'x-rapidapi-key': '2c0aa52ce7msh240a02a5770adccp17173ajsn0bb6849ac49d'
        }
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            //console.log(response.body)
            var obj = JSON.parse(response.body)
            console.log("New Cases:"+obj.response[0].cases.new)
            console.log("Recovered:"+obj.response[0].cases.recovered)
            console.log("Total Deaths:"+obj.response[0].deaths.total)
            console.log("Recent Deaths:"+obj.response[0].deaths.new)
            console.log("Total Infected:"+obj.response[0].cases.total)
            console.log("Update Day:"+obj.response[0].day)
            console.log("Country:"+obj.response[0].country)
            console.log("Current Country:"+this.state.search)
            console.log("This is a state value: "+this.state.data.countryName)
            this.setState({
                newcases:obj.response[0].cases.new,
                total_infected:obj.response[0].cases.total,
                active_case:obj.response[0].cases.active,
                recovered:obj.response[0].cases.recovered,
                total_deaths:obj.response[0].deaths.total,
                deaths_new:obj.response[0].deaths.new,
                updated_at: obj.response[0].day
            })
        }.bind(this));
    }
    changeState = (e) =>{
        e.preventDefault()
        this.setState({newcase:'changed'})
    }
    render(){    
        //console.log(this.state.data)
        return(
            <div>
            <CarouselPage/>
            <GeoLocation/>
            <JumbotronPage/>
            <PanelPage 
            country={this.state.search}
            total_infected={this.state.total_infected}
            total_dead={this.state.total_deaths}
            total_recent_dead={this.state.deaths_new}
            new_case ={this.state.newcases}
            active_case={this.state.active_case}
            case_recovered={this.state.recovered}
            updatedat={this.state.updated_at}
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