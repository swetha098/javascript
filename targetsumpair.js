// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Comp

    const array=[2,3,4,1,5];
    const target=6
    const l=array.length;
    for(let i=0;i<l;i++){
        for(let j=i+1;j<l;j++){
            if(array[i]+array[j]===target){
                console.log(array[i],array[j]);
            }
        }
    }
