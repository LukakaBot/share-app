/**
 * 获取图片的 URL 地址
 * @param {String} name - 图片的名称
 * @returns {String} - 图片的 URL 地址
 */
export function getImageUrl(name) {
	const isSvg = name.endsWith('.svg');
	const assetsDir = isSvg ? 'svg' : 'images';
	return new URL(`./${assetsDir}/${name}`, import.meta.url).href;
}
