function calculateTotal(price, tax)
{
    let tot = price + tax
    return tot
}
console.log(calculateTotal(100, 20))
// car
function Car(brand,speed)
{
    this.brand = brand
    this.speed = speed
}
Car.prototype.increaseSpeed = function(value){
    console.log("current speed=", this.speed+value)
}
let ob1 = new Car("toyota",120)
let ob2 = new Car("bmw",140)
ob1.increaseSpeed(40)
ob1.increaseSpeed(60)
//2. Question:

let cob 
function obj()
{
    let ob1 = {name : "orrange" , price : 200}
    cob = ob1
    return cob
}
console.log(obj())//new object is created
console.log(obj())//again create a new object so the previous object is unreachable and go to garbage collection 
cob = null // explicitly removo the reference
console.log(cob) // new object is also unreachable and go to garbage collection

//3. . Question:
{
 async function getPostTitle(postId)
 {
    try{
    let data =await fetch("")
    let n = await data.json()
    for(let i of n)
        {
            if(i.id == postId)
                {
                    return i.title
                }
        }
    }
    catch(e)
    {
        console.log(e)
    }
 }
 getPostTitle(1)
 .then(data => console.log("title="+data))
 //.catch(data => console.log(data))
 getPostTitle(5)
 .then(data => console.log("title="+data))
 getPostTitle(7)
 .then(data => console.log("title="+data))
}
