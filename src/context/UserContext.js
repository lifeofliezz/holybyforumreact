import {authAxios} from "./http-common"

//get the topics per page(data)

const getUser = () => {
    return authAxios.get("/currentuser" ).then(result => {
        console.log(result.data)
        return result.data
    })
}

export default{
    getUser
};