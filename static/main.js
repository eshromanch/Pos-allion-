$(document).on("click","#cAdd", function(e){
    e.preventDefault();
    $.ajax(
        {
        type: "POST",
        url : "" ,
        data: {
            customerName: $("#customerName").value,
            customerId: $("#customerId").value,
            shopName:  $("#shopName").value,
            address: $("#address").value,
            phoneNumber: $("#phoneNumber").value,
            srNumber: $("#srNumber").value,
            // csrf: ,
            // action: ,
        },
        processData: false,
        contentType: false,
    success: {
        function(){
            
        }
    }

})
})

$(document).on("click","#pAdd", function(e){

    e.preventDefault();
    $.ajax(
        {
        type: "POST",
        url : "" ,
        data: {
            pName: $("#pName").value,
            productId: $("#productId").value,
            pPrice:  $("#pPrice").value,
            qty: $("#qty").value,
            // csrf: ,
            // action: ,
        },
        processData: false,
        contentType: false,
    success: {
        function(){
            $("form").reset()
        }
    }

})
})




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

