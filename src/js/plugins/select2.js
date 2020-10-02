import select2 from 'select2'
window.select2 = select2();

$(document).ready(function() {
    $('.select2').select2({
        placeholder: $(this).data('placeholder'),
    });
});
