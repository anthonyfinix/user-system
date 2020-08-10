import axios from 'axios';
export default ({username,password})=>{
    return axios({
        method:'POST',
        url:`${process.env.REACT_APP_API_URI}/user/login`,
        data:{username,password}
    })
    .then(response=>response.data)
    .catch(err=>{
        console.log(err)
        return {err:'there was an error'}
    })
}