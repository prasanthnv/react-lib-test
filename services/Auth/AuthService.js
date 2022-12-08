// create a axios service to handle the authentication for react

import axios from "axios";

export class Auth{
    constructor(){
        this.instance = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            withCredentials: true
        })
    }

    signup({username, password, email}){
        return this.instance.post('/signup', {username, password, email})
            .then(({data}) => data)
    }

    login({username, password}){
        return this.instance.post('/login', {username, password})
            .then(({data}) => data)
    }

    logout(){
        return this.instance.post('/logout', {})
            .then(({data}) => data)
    }

    me(){
        return this.instance.get('/me')
            .then(({data}) => data)
    }

    getData(url){
        return this.instance.get(url)
            .then(({data}) => data)
    }
}