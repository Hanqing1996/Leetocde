/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    if(s.replace(' ','')==='')
        return false
    return !isNaN(Number(s))
};
