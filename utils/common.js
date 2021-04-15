export const storeUtils = {
    getToken () {
        return uni.getStorageSync('token') || '';
    },
    setToken (token) {
        return uni.setStorageSync('token', token);
    },
    delToken () {
        return uni.removeStorageSync('token');
    },
    getInfo () {
        const info = uni.getStorageSync('info');
        return info ? JSON.parse(info) : '';
    },
    setInfo (info) {
        return uni.setStorageSync('info', JSON.stringify(info));
    },
    delInfo () {
        return uni.removeStorageSync('info');
    },
    getGoodsInfo () {
        const info = uni.getStorageSync('goods');
        return info ? JSON.parse(info) : '';
    },
    setGoodsInfo (info) {
        return uni.setStorageSync('goods', JSON.stringify(info));
    },
    delGoodsInfo () {
        return uni.removeStorageSync('goods');
    },
	formatDate(date) {
		const dateObj = new Date(date);
		
		return dateObj.getFullYear() + '-' + (dateObj.getMonth() + 1) + '-' + dateObj.getMinutes();
	}
}