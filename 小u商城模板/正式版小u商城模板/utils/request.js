import {
	baseUrl
} from "./baseUrl.js";

const http = (options) => {
	// url method header data
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + options.url,
			data: options.data || {},
			method: options.method || "GET",
			header: options.header || {
				"content-type": "application/json"
			},
			success(res) {
				resolve(res)
			},
			fail(err) {
				reject(err)
			}
		})
	})
}

export default http;