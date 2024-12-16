import Request from 'luch-request';

const http = new Request({
	baseURL:
		import.meta.env.VITE_SERVICE_URL + import.meta.env.VITE_SERVICE_PREFIX_PATH,
	timeout: 8 * 1000,
});

http.interceptors.request.use(
	(config) => {
		return config;
	},
	(config) => {
		return Promise.reject(config);
	}
);

http.interceptors.response.use(
	(response) => {
		const res = response.data;

		if (res.code === 200) {
			return res.data;
		} else {
			uni.showToast({
				title: res.msg,
				icon: 'none',
			});
		}

		return Promise.reject(res.msg);
	},
	(response) => {
		return Promise.reject(response);
	}
);

export default http;
