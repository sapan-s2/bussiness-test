/**
 * Created by sjain on 12/5/2016.
 */

import React, {propTypes} from "external/react";
import {LoggerMixin} from "external/util";
import {ViewTestForm} from "external/viewtest";
import {resolveAvailability} from "../services/Details";

const OBJECT_PROP_DEFAULTS = {
    defaultValues: {
        wareHouseName: "",
        wareHouseNumber: "",

    },

    dynamicContent: {
        wareHouseNameLabel: "Enter Name",
        wareHouseNumberLabel: "WareHouse Number",
    }
};

const testForm = React.createClass({

    getDefaultProps() {
        return {
            defaultValues: OBJECT_PROP_DEFAULTS.defaultValues,
            dynamicContent: OBJECT_PROP_DEFAULTS.dynamicContent,
        }
    },

    getInitialState(){
        const {wareHouseName, wareHouseNumber, wareHouseNameLabel, wareHouseNumberLabel}
            = this.preserveObjectPropDefaults("defaultValues");
        return {
            wareHouseName, wareHouseNumber, wareHouseNameLabel, wareHouseNumberLabel
        };
    }
    ,

    preserveObjectPropDefaults(key) {
        const obj = Object.assign({}, OBJECT_PROP_DEFAULTS[key], this.props[key]);

        // No deep clone utility available. Cloning all child objects of parent, 1 level deep only.
        for (const prop in obj) {
            if (obj[prop] instanceof Object) {
                obj[prop] = Object.assign({}, OBJECT_PROP_DEFAULTS[key][prop], this.props[key][prop]);
            }
        }

        return obj;
    },

    OnSubmitHandler(e){
        e.preventDefault();
        const formDataFields = Object.assign(this.state.wareHouseName,this.state.wareHouseNumber)

        const responsePromise = new Promise((resolve,reject) =>{
            resolveAvailability(formDataFields)
                .then(response => {
                    resolve()
                })
                .catch(err =>{
                    reject()
                })



        });

    },

    render(){

        const dynamicContent = this.preserveObjectPropDefaults("dynamicContent");
        return (
            <div>
                <ViewTestForm
                    wareHouseName={this.state.wareHouseName}
                    wareHouseNumber={this.state.wareHouseNumber}
                    dynamicContent={dynamicContent}
                    buttonText="submit"
                    onSubmit={this.OnSubmitHandler}
                ></ViewTestForm>
            </div>
        );
    }

});
export default testForm;


