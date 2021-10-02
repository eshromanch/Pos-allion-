const btn = document.querySelector(".add-cart");
const productName = document.querySelector(".pName");
const price = document.querySelector(".price");
const list = document.querySelector(".list");
const list2 = document.querySelector(".list2");
const list3 = document.querySelector(".list3");
const inputQty = document.querySelector(".qty");

btn.addEventListener("click", function(){
    const pList = document.createElement("li");
    const tkList = document.createElement("li");
    const qtyList = document.createElement("li");
    pList.innerText = productName.innerText;
    const tPrice = price.innerText * inputQty.value;
    tkList.innerText = tPrice;
    qtyList.innerText = inputQty.value;
    list.append(pList);
    list2.append(tkList);
    list3.append(qtyList);
   
})