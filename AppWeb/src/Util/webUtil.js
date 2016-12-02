import $ from "jquery"

export function getServerData2(actionName, parameter, callBack) {

	$.ajax({
		url: actionName,
		data: JSON.stringify(parameter),
		async: true,
		dataType: "json",
		traditional: true,
		contentType: 'application/json; charset=UTF-8',
		type: "POST",
		success: function(result) {
			var ret
			ret = result;
			return callBack(ret);
		},
		error: function(errorThrown) {
			return false;
		}
	})

	var parameter = {}

	return
}
