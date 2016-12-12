/**
 * Created by sjain on 12/11/2016.
 */

import {Model, QueryString, LoggerMixin} from "external/util";

const DEFAULT_TIMEOUT = 10000;
const url = "https://product-cat.herokuapp.com/products";
class WareHouse extends Model{
    getDetails(formData){
        $.ajax({
            type: 'GET',
            url: url,
            contentType: 'application/json',
        })
            .success(function (data) {
                console.log('url' + url);
                console.log('success' + data);
            })
            .error(function () {
                console.log('failed to register');
            });
    }
    //     return this.get(`https://product-cat.herokuapp.com/products`)
    //         .acceptJson()
    //         .disableDefaultHeaders()
    //         .setTimeout( DEFAULT_TIMEOUT)
    //         .send()
    //         .then(this.parseJson)
    //         .then(this.body)
    //         .then(response => {
    //             console.log("A successful response was received from the server.");
    //             return response;
    //         })
    //         .catch(error =>{
    //             console.log("A failed response was received from the server.");
    //         })
    // }
}

export default new WareHouse();