// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function calculateTotal() {
    var hours = parseFloat($('#hours').val());

    // Check if the entered value is a positive number
    if (isNaN(hours) || hours < 0) {
        alert('Please enter a valid positive number for hours.');
        return;
    }

    var hourlyRate = parseFloat($('#hourlyRate').val().replace('$', ''));
    var total = hours * hourlyRate;

    $('#total').html('Total Cost: $' + total.toFixed(2));
}