import http from '@/utils/request';

export function fetchReadNum() {
	return http.get('/register/getViewNum');
}
