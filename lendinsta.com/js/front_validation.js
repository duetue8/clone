$(document).ready(function(){
       
    $.validator.addMethod("validpass", function (value, element) {
        if (/^(?=.*?[0-9]).{6,}/.test(value)) {
            return true;
        } else {
            return false; }; 
    }, "At least Enter one numeric value and Minimum six characters");

    jQuery.validator.addMethod("lettersonly", function(value, element) {
            return this.optional(element) || /^[a-z]+$/i.test(value);
    }, "Letters only please"); 

    jQuery.validator.addMethod("noSpace", function(value, element) { 
       return value.indexOf(" ") < 0 && value != ""; 
    }, "No space please and don't leave it empty");

    jQuery.validator.addMethod("contactNumber", function(value, element) { 
       if (/^\d{10}$/.test(value)) {
        return true;
       }
       else{     
        return false; 
       };
    }, "Mobile Number Must be 12 digit"); 
   

    $("#ContactForm").validate({ 
        rules: {
            name: { 
                required: true,
            },
            email: { 
                required: true,
            },
            phone_no: { 
                required: true,
            },
            subject: { 
                required: true,
            },
            message: {
                required: true,
            },
        },
        messages: {
            name: {
                required: "Name is required field.",
            },
            email: {
                required: "Email is required field.",
            },
            phone_no: {
                required: "Phone Number is required field.",
            },
            subject: {
                required: "subject is required field.",
            },
            message: {
                required: "Message is required field.",
            },
        },
    });

    
});

function getBaseURL () {
   return location.protocol + "//" + location.hostname + (location.port && ":" + location.port) + "/";
}

$("#InquiryForm").validate({ 
    rules: {
        name: { 
            required: true,
        },
        email: { 
            required: true,
        },
        primary_mobile_no: { 
            required: true,
        },
        amount: { 
            required: true,
        },
        bank_name: {
            required: true,
        }
    },
    messages: {
        name: {
            required: "Name is required field.",
        },
        email: {
            required: "Email is required field.",
        },
        amount: {
            required: "Amount is required field.",
        },
        bank_name: {
            required: "Bank Name is required field.",
        },
        primary_mobile_no: {
            required: "Mobile Number is required field.",
        },
    },
});