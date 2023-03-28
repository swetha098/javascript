console.log("first string");
const str11=prompt();
console.log("second string");
 const str22=prompt();
  function isanagram(str,str2){
    if(str.length != str2.length){
        console.log("not anagram");
    }else {
        const s1=str.split('').sort().join();
        
        const s2=str2.split('').sort().join();
        if(s1===s2){
            console.log("isanagram");
        }
        else console.log("not anagram");
    }}
isanagram(str11,str22);


    
        
      

