const items = {
    "1":"apple",
    "2":"orange",
    "3":"banana",
    "4":"mango"
}

for (let item in items)
{
    console.log(item);
}
//object can not work (of) iteration 


let list = [4, 5, 6];
for (let i in list) {
  console.log(i); 
}

//(in) is use  to get  key of values array


for (let i of list) {
  console.log(i); 
}
//(of) is use to get value of array

