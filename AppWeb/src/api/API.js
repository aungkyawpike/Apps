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
			return callBack(result);
		},
		error: function(error) {
			return false;
		}
	})

	return
}

export function accessServerDataAsync(actionName, parameter, type) {

	return new Promise( function(resolve, reject) {
		$.ajax({
			url: actionName,
			data: parameter,
			async: true,
			dataType: "json",
			traditional: true,
			contentType: 'application/json; charset=UTF-8',
			type: type,
			success: function (result) {
				resolve(result)
			},
			error: function (error) {
				reject(error)
			}
		})
	})

	return
}

export function postFormToServer(actionName, formData) {

	return new Promise( function(resolve, reject) {
			$.ajax({
				url: actionName,
				data: formData,
				cache: false,
				contentType: false,
				processData: false,
				type: "POST",
				success: function (result) {
					resolve(result)
				},
				error: function (error) {
					reject(error)
				}
			})
		}
	)

	return
}
