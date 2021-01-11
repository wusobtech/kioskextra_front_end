import MakeRequest from "../request/MakeRequest";
import { requiredInputField } from "./Objects";


export default class FormManager {
    initalizeFormData = (formElementId, onlyValues = false) => {
        let data = this.getAllInputFields(formElementId);
        return onlyValues ? this.handleSubmit(data) : data;
    }






    handleSubmit = (formData) => {
        let fields = {};
        for (let field in formData) {
            fields[field] = formData[field].value;
        }
        return fields;
    }

    handleInputChange = (formData, inputElement) => {
        formData[inputElement.name].value = inputElement.value;
        // inputElement.value = inputElement.value;
        return formData;
    }

    showHidePassword = (target, targetType = "id") => {
        let element = targetType == "id" ? document.getElementById(target) : document.getElementsByClassName(target);
        if (element) {
            let fieldType = element.getAttribute("type");
            if (fieldType == "password") {
                element.setAttribute("type", "text");
            }
            else {
                element.setAttribute("type", "password");
            }
        }
    }


    getAllInputFields = (formElementId) => {
        let formTagsList = ["input" , "select", "textarea"];
        let fields = {};
        for(let tag in formTagsList){
            let formTags = document.getElementById(formElementId).getElementsByTagName(formTagsList[tag]);
            for (var i = 0; i < formTags.length; i++) {
                let field = formTags[i];
                let parsedField = this.parseInputElementToObject(field);
                fields[parsedField.name] = parsedField;
            }
        }
        
        return fields;
    }


    parseInputElementToObject = (element) => {
        let attributes = element.attributes;
        // console.log(attributes);
        // for(let item of attributes){
        //     console.log(item);
        // }

        // requiredInputField

        return {
            id: element.getAttribute("id") ?? "",
            name: element.getAttribute("name"),
            value: element.value ?? "",
            required: element.hasAttribute("required"),
            error: element.getAttribute("error"),
        }
    }
}