import React, { Component } from "react";
import AddSubscriber from "./AddSubscriber";
import ShowSubscribers from "./ShowSubscribers";
import { BrowserRouter, Routes, Route } from "react-router-dom";

class PhoneDirectory extends Component {

    constructor() {
        super();
        this.state = {
            subscribersList: [
                {
                    id: 1,
                    name: "Shilpa Bhat",
                    phone: "88888888"
                },
                {
                    id: 2,
                    name: "Srishti",
                    phone: "99999999"
                }
            ]
        }
    }
    addSubscriberHandler = (newSubscriber) => {
        let subscribersList = this.state.subscribersList;
        if(subscribersList.length > 0) {
            newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
        }
        else {
            newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        this.setState({subscribersList: subscribersList});
        console.log("Phone Directory");
        console.log(this.state.subscribersList);
    }
    render() {
        return(
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" render={(props) => <ShowSubscribers {...props} subscribersList={this.state.subscribersList} />} />
                    <Route exact path="/add" render={({history}, props) => <AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler} />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default PhoneDirectory;