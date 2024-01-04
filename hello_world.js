// console.log("Hello world")
const arr=[0,1,2,3,4];

for(const num of arr)
{
    // console.log(num);
}
const n = 'Panny'
for(const letters of n)
{
    // console.log(letters);
}


const myobj ={
    "name" : "Pranav",
    "college" : "KIIT",
    "roll" : 20051156
}

for(const key in myobj)
{
    console.log(`${key} : ${myobj[key]}`);
}



//map
const map = new Map()
map.set('1','Delhi')
map.set('2','Kolkata')
map.set('3','Mumbai')
map.set('4','Chennai')

for(const [key,value] of map)
{
    console.log(key+" : "+value);
}