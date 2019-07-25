/*
	多维数组去重
*/

//多维数组降维
function multiLevel2OneLevel(arr){
	const dedupliArr = arr.reduce(function(prev,cur){
		return Array.isArray(cur) ? prev.concat(multiLevel2OneLevel(cur)) : prev.concat(cur);
	},[]);
	return dedupliArr;
}

//去重
function duplicateArr(arr){
	return Array.from(new Set(arr))
}


function buildArray(arr, length, min, max) {
    if (!Array.isArray(arr)) arr = []
    if (length < 1) return []
    if (arr.length === length) return arr
    const random = Math.random() * (+max - +min) + +min
    if (!arr.includes(random)) arr.push(random)
    return buildArray(arr, length, min, max)
}