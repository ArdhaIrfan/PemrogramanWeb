/*$(function() {
    var $validation = $("#validation");
    if($validation.length) {
        $validation.validate({
            rules: {
                name: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: 'Name is mandatory!'
                }
            }
        })
    }
})*/

$(document).ready(function () {

    jQuery.validator.addMethod("lettersonly", function (value, element) {
        return this.optional(element) || /^[a-z][a-z\s]+$/i.test(value);
    }, "Name can only contain letters and cannot start with a space.");

    jQuery.validator.addMethod("lettersandnumbers", function (value, element) {
        return this.optional(element) || /^[a-z0-9]+$/i.test(value);
    }, "Batch No can only contain letters or numbers.");

    $("#form").validate({
        rules: {
            name: {
                required: true,
                minlength: 10,
                lettersonly: true
            },
            nik: {
                required: true,
                number: true,
                rangelength: [16, 16]
            },
            select: {
                required: true
            },
            batch: {
                required: true,
                lettersandnumbers: true
            },
        },

        messages: {
            nik: {
                rangelength: 'Please enter a value of 16 characters long.'
            }
        }
    });
});