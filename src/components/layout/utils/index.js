/**
 * 判断url是否是http或https
 * @param {string} path
 * @returns {Boolean}
 */
export const isLink = (url) => {
  return url.indexOf('http://') !== -1 || url.indexOf('https://') !== -1;
};
