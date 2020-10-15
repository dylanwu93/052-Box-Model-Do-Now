$('#margin').on('input', function (e) {
    var newVal = e.target.value + "px";
    $(".target").css('margin', newVal);
    $(".margin-readout").text(newVal);
});
$('#padding').on('input', function (e) {
    var newVal = e.target.value + "px";
    $(".target").css('padding', newVal);
    $(".padding-readout").text(newVal);
});
$('#border').on('input', function (e) {
    var newVal = e.target.value + "px";
    $(".target").css('border-width', newVal);
    $(".border-readout").text(newVal);
});
$('#content').on('input', function (e) {
    var self = $(this);
    $(".target span").text(self.val());
});
