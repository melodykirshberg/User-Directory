import React, { Component } from "react";
import API from "../../utils/API";
import Navbar from "../Navbar";
import Search from "../Search";
import Data from "../Data";
//import "./style.css"

class Container extends Component {

    state = {
        users: [],
        order: "descend",
        search: "",
        filteredUsers: []
    };

    componentDidMount() {
        API.getUsers().then(res => this.setState({
            users: res.data.results,
            filteredUsers: res.data.results
        })).catch(err => console.log(err))
    }

    sortName = () => {
        const filtered = this.state.filteredUsers;
        if (this.state.order === "descend") {
            const sorted = filtered.sort((a,b) => (a.name.first > b.name.first) ? -1 : 1)
            this.setState({
                filteredUsers: sorted,
                order: "ascend"
            })
        } else {
            const sorted = filtered.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
            this.setState({
                filteredUsers: sorted,
                order: "descend"
            })
        }
    }




}