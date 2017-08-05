function searchInRotatedArray(arr, target) {
	if (!Array.isArray(arr) || !arr.length) {
		return -1;
	}
	var start = 0;
	var end = arr.length - 1;
	var mid;
	while (start <= end) {
		mid = Math.floor((start + end) / 2);
		if (arr[mid] === target) {
			return mid;
		} else if (arr[mid] < target) {
			if (arr[start] > arr[mid] && target > arr[end]) {
				end = mid - 1;
			} else {
				start = mid + 1;
			}
		} else {
			if (arr[mid] > arr[end] && target < arr[start]) {
				start = mid + 1;
			} else {
				end = mid - 1;
			}
		}
	}
	return -1;
}

console.log(searchInRotatedArray([1,2,3,4,0], 0));
console.log(searchInRotatedArray([4,0], 4));
console.log(searchInRotatedArray([0], 0));
console.log(searchInRotatedArray([1,2,3,4,0], 6));