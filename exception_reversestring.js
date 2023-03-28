function checkinput(engstring){
    const regex= /^[a-zA-Z0-9]*$/;
    if(!regex.test(engstring)){
        throw new Error("Non-English characters detected in input!");
    }
}

function reverse(string){
    const l=string.length;
    
    let arr="";
     for(let i=l-1;i>=0;i--){
  
           arr=arr+string.charAt(i); 
       }
  console.log(arr);  
}
console.log("enter string");
try{
const str=prompt();
    checkinput(str);
    console.log("reversed string :");
reverse(str);
}
catch (error){
    console.error(error.message);
}
