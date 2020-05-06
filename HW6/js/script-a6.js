const maxAllowChecks = 2;

function cntCheck() {
	let checkCount = $("input[type=checkbox]:checked").length;
	$("input[type=checkbox]:not(:checked)").prop("disabled", checkCount >= maxAllowChecks);
	console.log(`Used flags: ${checkCount}`)
}

function trackRadios() {
	$("input[type=radio]").prop("disabled", true);
}

function init() {
	$("input[type=checkbox]").change(cntCheck);
	$("input[type=radio]").change(trackRadios);
	console.log("Script added");
}

$(document).ready(init);
