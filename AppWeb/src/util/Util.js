import $ from "jquery"

export function accessServerData(actionName, parameter, callBack, type) {

	$.ajax({
		url: actionName,
		data: parameter,
		async: true,
		dataType: "json",
		traditional: true,
		contentType: 'application/json; charset=UTF-8',
		type: type,
		success: function(result) {
			var ret
			ret = result;
			return callBack(ret);
		},
		error: function(errorThrown) {
			return false;
		}
	})

	return
}

export function postFormToServer(actionName, formData, callBack) {

	$.ajax({
		url: actionName,
		data: formData,
		cache : false,
		contentType : false,
		processData : false,
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

	return
}
