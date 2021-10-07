const addMore = document.getElementById("pAdd");
const tForm = document.getElementById("t");
addMore.addEventListener("click", function(e){
    e.preventDefault()

    let newDiv =  document.createElement('div');
    newDiv.setAttribute('class', 'groupT');
    tForm.appendChild(newDiv)
    newDiv.innerHTML= `<input id="pName" name="pName" type="text" placeholder="Products name">
    <input id="productId" name="productId" type="text" placeholder="Product id">
    <input id="pPrice" name="pPrice" type="text" placeholder="Selling price">
    <input id="qty" type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="qty " size="4" pattern="" inputmode="" placeholder="qty">
    <input id="disc" name="disc" type="text" placeholder="Discount:">
    <input id="amount" name="amount" type="text" placeholder="Amount:">

    <input id="stock" name="stock" type="text" placeholder="stock:">
    <input id="total" name="total" type="text" placeholder="Total:">
    <button type="button" id="tAdd" class="add"><i class="fas fa-trash"></i></button>`
  
    newDiv.addEventListener("click", function(e){
        const item = e.target;
        if(item.classList[0]==="add"){
            const dlt = item.parentElement;
            dlt.classList="remove";
            dlt.addEventListener("transitioned",function(){
              dlt.remove();
            });
          }
        // newDiv.classList='remove'
    })
    
})


// $(document).on("click","#cAdd", function(e){
//     e.preventDefault();
//     $.ajax(
//         {
//         type: "POST",
//         url : "" ,
//         data: {
//             customerName: $("#customerName").value,
//             customerId: $("#customerId").value,
//             shopName:  $("#shopName").value,
//             address: $("#address").value,
//             phoneNumber: $("#phoneNumber").value,
//             srNumber: $("#srNumber").value,
//             // csrf: ,
//             // action: ,
//         },
//         processData: false,
//         contentType: false,
//     success: {
//         function(){
            
//         }
//     }

// })
// })

// $(document).on("click","#pAdd", function(e){

//     e.preventDefault();
//     $.ajax(
//         {
//         type: "POST",
//         url : "" ,
//         data: {
//             pName: $("#pName").value,
//             productId: $("#productId").value,
//             pPrice:  $("#pPrice").value,
//             qty: $("#qty").value,
//             // csrf: ,
//             // action: ,
//         },
//         processData: false,
//         contentType: false,
//     success: {
//         function(){
//             $("form").reset()
//         }
//     }

// })
// })




// const inputQty = document.querySelector(".qty");
// const pName = document.getElementById("pName");
// const pform = document.querySelector(".formData");
// const btn = document.querySelector(".add");

// let myArr = []

// btn.addEventListener("click", function(e, url){
//     e.preventDefault();
//    const order ={
//        productName: pName.value,
//        qty: inputQty.value
//        }
//        let orderObject= JSON.stringify(order)
//     myArr.push(order)
//     console.log(orderObject);
//     // pform.reset();

    

//     // let form = document.createElement('form');
//     pform.action = url;
//     pform.method = "POST";
  
//     // let inp = document.createElement('input');
//     // inp.type = 'hidden';
//     // inp.name = 'data';
//     // inp.value = JSON.stringify(order);
//     let csrftoken = document.getElementsByName('csrfmiddlewaretoken');
//     pform.submit();
//     console.log(pform)
// })


// // const items = document.createElement("li");
// // items.innerText = order.productName;
// // list.append(items);

