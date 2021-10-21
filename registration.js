$(document).ready(function() {

    jQuery.validator.addMethod("lettersonly", function (value, element) {
        return this.optional(element) || /^[a-z][a-z\s]+$/i.test(value);
    }, "Name can only contain letters and cannot start with a space.");

    $("#form").validate({

        rules: {
            name: {
                required: true,
                minlength: 2,
                lettersonly: true
            },
            address: {
                required: true,
                minlength: 5
            },
            username: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                rangelength: [8, 16]
            },
            number: {
                required: true,
                number: true,
                minlength: 7
            },
            zip: {
                required: true,
                number: true,
                rangelength: [6, 6]
            },
            select: {
                required: true
            },
        },
        messages: {
            zip: {
                rangelength: 'Please enter a value of 6 characters long.'
            }
        }
    });
});