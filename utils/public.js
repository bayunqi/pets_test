// 转化时间
function changeTime(dateString) {
	// 创建一个Date对象  
	const inputDate = new Date(dateString);
	// 获取当前日期和年份  
	const today = new Date();
	const thisYear = new Date(today.getFullYear(), 0, 1);
	// 返回格式化后的日期或时间字符串  
	return formatDateWithoutLeadingZeros(inputDate);
}
// 格式化日期的辅助函数  
function formatDateWithoutLeadingZeros(date) {
	const year = date.getFullYear();
	const month = date.getMonth() + 1; // getMonth() 返回的是 0-11  
	const day = date.getDate();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	// 根据需要返回格式化后的日期或时间字符串  
	if (isToday(date)) {
		return `${hours}:${minutes}`;
	} else if (isThisYear(date)) {
		return `${month}/${day}`;
	} else {
		return `${year}/${month}/${day}`;
	}
}
// 判断是否是今天的函数  
function isToday(date) {
	const today = new Date();
	return (
		date.getFullYear() === today.getFullYear() &&
		date.getMonth() === today.getMonth() &&
		date.getDate() === today.getDate()
	);
}
// 判断是否是今年的函数  
function isThisYear(date) {
	const today = new Date();
	return date.getFullYear() === today.getFullYear();
}
// 封装路由跳转
function toUrl(url, type) {
	switch (type) {
		case '1':
			uni.switchTab({
				url,
			})
			break
		case '2':
			uni.navigateTo({
				url,
			})
			break
		case '3':
			uni.redirectTo({
				url,
			})
			break
	}
}
export default {
	changeTime,
	toUrl
}