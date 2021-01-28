import axios from 'axios'

export let post = async (path, data) => {
    let promise = new Promise((resolve , reject) => {
        axios({
            method:'post',
            url: process.env.REACT_APP_HOST + path,
            data,
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
        }).then(response=> {
            resolve(response);
        }).catch(err => {
            reject(err);
        })
    })
    return await promise;
}

export let get = async (path) => {
    alert(path)
    let promise = new Promise((resolve , reject) => {
        alert(process.env.REACT_APP_HOST + path)
        axios({
            method:'get',
            url: process.env.REACT_APP_HOST + path,
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
        }).then(response=> {
            resolve(response);
        }).catch(err => {
            reject(err);
        })
    })
    return await promise;
}

export let patch = async (path, data) => {
    let promise = new Promise((resolve , reject) => {
        axios({
            method:'patch',
            url: process.env.REACT_APP_HOST + path,
            data,
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
        }).then(response=> {
            resolve(response);
        }).catch(err => {
            reject(err);
        })
    })
    return await promise;
}