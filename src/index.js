
exports.min = function min (array=[]) {
	let minimum=array[0];
	
	if(array.length===0){
		return 0;
	}
	
	for(let i=0;i<array.length;i++){
		if(array[i]<minimum){
			minimum=array[i];
		}
	}
	return minimum;
}


exports.max = function max (array=[]) {
	let maximum=array[0];
	if(array.length===0){
		return 0;
	}
	for(let i=0;i<array.length;i++){
		if(array[i]>maximum){
			maximum=array[i];
		}
	}
	return maximum;
}

exports.avg = function avg (array=[]) {
	let sum=0;
	let average=0;
	if(array.length===0){
		return 0;
	}
	for(let i=0;i<array.length;i++){
		sum+=array[i];
	}
	average=sum/array.length;
	return average;
} 
