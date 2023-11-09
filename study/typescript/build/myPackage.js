// @ts-check : ts가 제공하는 보호장치를 사용할 수 있게 해준다
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export const init = (config) => {
    return true;
};
/**
 * Exits the program
 * @param {number} code
 * @returns number
 */
export const exit = (code) => {
    return code + 1;
};
