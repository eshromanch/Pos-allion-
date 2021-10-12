const addMore = document.getElementById("pAdd");
const caddMore = document.getElementById("cAdd");
const tForm = document.getElementById("t");
let table = document.getElementById("table")
let tableOne = document.getElementById("table1")

//this array display data 
let orders = []
//this array send all product data 
let ordersDetails = []
//this array send all customer data 
let customer = []

addMore.addEventListener("click", function (e){
  e.preventDefault()
  //this object for display data 
  let order ={
    productName: document.getElementById("pName").value,
    productPrice: document.getElementById("pPrice").value,
    qty: document.getElementById("qty").value,
    total: document.getElementById("total").value,
   
  }
  orders.push(order)

  //this is product object 

  let productOrder ={
    productName: document.getElementById("pName").value,
    productId: document.getElementById("productId").value,
    productPrice: document.getElementById("pPrice").value,
    qty: document.getElementById("qty").value,
    disc: document.getElementById("disc").value,
    amount: document.getElementById("amount").value,
    disc: document.getElementById("stock").value,
    total: document.getElementById("total").value,
   
  }
  ordersDetails.push(productOrder)
  tForm.reset();
  
  $.ajax(
    {
    type: "POST",
    url : "" ,
    data: ordersDetails, //all product data 
    processData: false,
    contentType: false,
    csrf: $("input[csrfmiddlewaretoken]").value,
success: {
    function(newOrder){
        console.log("success")
    }
}

})
let row; 
  
orders.forEach(allOrder => {
  row = document.createElement("tr")
  Object.values(allOrder).forEach(text => {
    let cell = document.createElement("td")
    let texNode = document.createTextNode(text)
    cell.appendChild(texNode)
    row.appendChild(cell)
  })
})

table.appendChild(row) 
})


function addNumber() {
  var x = document.getElementById("pPrice").value;
  var y = document.getElementById("qty").value;
  var z = document.getElementById("amount").value;
  var disc = document.getElementById("disc").value
  var discTotal = y * x * disc / 100 ;
 document.getElementById("total").value = (y * x ) - z - discTotal;
}
caddMore.addEventListener("click", function(e){
  e.preventDefault()
  let information ={
    customerName: document.getElementById("customerName").value,
    customerId: document.getElementById("customerId").value,
    shopName: document.getElementById("shopName").value,
    address: document.getElementById("address").value,
    qty: document.getElementById("phoneNumber").value,
    total: document.getElementById("srNumber").value,
  }
  customer.push(information)
  $.ajax(
    {
    type: "POST",
    url : "" ,
    data: customer, //all customer data 
    processData: false,
    contentType: false,
    csrf: $("input[csrfmiddlewaretoken]").value,
success: {
    function(newOrder){
        console.log("success")
    }
}

})
  let row; 
  
customer.forEach(allOrder => {
  row = document.createElement("tr")
  Object.values(allOrder).forEach(text => {
    let cell = document.createElement("td")
    let texNode = document.createTextNode(text)
    cell.appendChild(texNode)
    row.appendChild(cell)
  })
})

tableOne.appendChild(row) 
})



// $(document).on("click","#cAdd", function(e){
//     e.preventDefault();
//     $.ajax(
//         {
//         type: "POST",
//         url : "" ,
//         data: orders,
//         processData: false,
//         contentType: false,
//     success: {
//         function(){
//             console.log("success")
//         }
//     }

// })
// })

//don't delete comments for now .. I might need it later.

  // let table = document.createElement("table")

  // let headerRow = document.createElement("tr")
  // headers.forEach(headerText => {
  //   let header = document.createElement("th")
  //   let texNode = document.createTextNode(headerText)
  //   header.appendChild(texNode)
  //   headerRow.appendChild(header)
  // })
  // table.appendChild(headerRow)

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

// function addNumberT() {
//   var x = document.getElementById("pPrice").value;
//   var y =   document.getElementById("qty '+counter'").value;
//   var z = document.getElementById("amount").value;
//   var disc = document.getElementById("disc").value
//   var discTotal = y * x * disc / 100 ;
//   document.getElementById("total + '+counter+' ").value = (y * x ) ;
// }
// addMore.addEventListener("click", function(e){
//   counter+=1
//     e.preventDefault()
//     let newDiv =  document.createElement('div');
//     newDiv.setAttribute('class', 'groupT');
//     tForm.appendChild(newDiv)

//     // let pPrce =  document.createElement('input');
//     // pPrce.setAttribute('id', 'pPrice' + counter++);
//     // pPrce.setAttribute('oninput',"addNumberT()");
//     // newDiv.appendChild(pPrce)

//     // let qty =  document.createElement('input');
//     // qty.setAttribute('id', 'qty' + counter++);
//     // qty.setAttribute('type', 'number');
//     // qty.setAttribute('oninput', "addNumberT()" );
//     // newDiv.appendChild(qty)

//     // let total =  document.createElement('input');
//     // total.setAttribute('id', 'total' + counter++);
    
//     // newDiv.appendChild(total)
//     // newDiv.innerHTML= '<input id="pName" name="pName" type="text" placeholder="Products name">\
//     // <input id="productId" name="productId" type="text" placeholder="Product id">\
//     // <input id="pPrice'+counter+' "  oninput="addNumber()" name="pPrice" type="text" placeholder="Selling price">\
//     // <input id="qty'+counter+' "  oninput="addNumber()" type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="qty " size="4" pattern="" inputmode="" placeholder="qty">\
//     // <input id="total'+counter+'" name="total" type="text" placeholder="Total: ">\
//     // '

//     newDiv.innerHTML= `<input id="pName" name="pName" type="text" placeholder="Products name">
//     <input id="productId" name="productId" type="text" placeholder="Product id">
//     <input id="pPrice'+counter+' "  oninput="addNumber()" name="pPrice" type="text" placeholder="Selling price">
//     <input id="qty'+counter+' "  oninput="addNumber()" type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="qty " size="4" pattern="" inputmode="" placeholder="qty">
//     <input id="disc +counter+' " oninput="addNumber()" name="disc" type="text" placeholder="Discount:">
//     <input id="amount'+counter+' " oninput="addNumber()" name="amount" type="text" placeholder="Amount:">
//     <input id="stock" name="stock" type="text" placeholder="stock:">
//     <input id="total'+counter+'" name="total" type="text" placeholder="Total: ">
//     <button type="button" id="tAdd" class="add"><i class="fas fa-trash"></i></button>`

    
    

//     newDiv.addEventListener("click", function(e){
//         const item = e.target;
//         if(item.classList[0]==="add"){
//             const dlt = item.parentElement;
//             dlt.classList="remove";
//             dlt.addEventListener("transitioned",function(){
//               dlt.remove();
//             });
//           }
         
//         // newDiv.classList='remove'
//     })

// })




// let headers = ["Product Name" , "Price" ,"Qty" ,"Total"] 