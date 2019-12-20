import React, { Component } from "react";
import API from "../../utils/API";
import Navbar from "../Navbar";
import Search from "../Search";
import Data from "../Data";
//import "./style.css"

class Container extends Component {

    state = {
        employee: [],
        order: "descend",
        search: "",
        filteredEmployees: []
    };

    componentDidMount() {
        API.getUsers().then(res => this.setState({
            employee: res.data.results,
            filteredEmployees: res.data.results
        })).catch(err => console.log(err))
    }

    



}