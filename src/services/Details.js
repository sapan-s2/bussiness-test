/**
 * Created by sjain on 12/11/2016.
 */

import WareHouse from "../model/WareHouse";

export const resolveAvailability = (formdata) =>{


    const detailsPromise = new Promise((resolve, reject) => {

    WareHouse.getDetails(formdata)
        .success(response =>{
        console.log("A successful response was received from WareHouseDetals.");
            resolve(response);
    })
       .error(error =>{
           console.log("A Failed response was received from WareHouseDetals.");
           reject(error);
       })

});
    return detailsPromise;
};

