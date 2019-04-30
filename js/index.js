function runScroll(i, el) { // properties for scrollbar plugin
	new SimpleBar(el, {
		autoHide: false,
		forceVisible: "y",
		classNames: {
			track: "track"
		}
	});
}
$(document).ready(function() {
	$('.scroll').each(runScroll);

	$("#form_open").click(function(e) {
		var t = $(this).parent()[0];
		$(t).addClass("open");
		$(".form-group-ins .form-ins").addClass("open");
	});
});