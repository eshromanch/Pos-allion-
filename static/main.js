const inputQty = document.querySelector(".qty");
const pName = document.getElementById("pName");
const pform = document.querySelector(".formData");
const btn = document.querySelector(".add");

let myArr = []

btn.addEventListener("click", function(e, url){
    e.preventDefault();
   const order ={
       productName: pName.value,
       qty: inputQty.value
       }
       let orderObject= JSON.stringify(order)
    myArr.push(order)
    console.log(orderObject);
    // pform.reset();
    pform.action = url
    console.log(pform.action)
})



// const items = document.createElement("li");
// items.innerText = order.productName;
// list.append(items);

// const list = document.querySelector(".list");
// const list2 = document.querySelector(".list2");
// const list3 = document.querySelector(".list3");