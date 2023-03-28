let n1=0;
let n2=1;
console.log("enter range");
const n=prompt();
console.log(n1+"/n"+n2);
let i=0;
while(i<n)
{
    n3=n1+n2;
    console.log(n3);
    n1=n2;
    n2=n3;
    i++;
}