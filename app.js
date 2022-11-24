
const initialPrice = document.querySelector("#initial-price");
const currentPrice = document.querySelector("#current-price");
const stockQuantity = document.querySelector("#stock-quantity");
const outputElement = document.querySelector("#output");
const submitBtn = document.querySelector("#submit-btn");


function calculateProfitOrLoss(initial , quantity , current ){
    if(initial > current){
        const loss = (initial - current)*quantity;
        console.log(loss)
        const lossPercentage = (loss/initial) * initial
        outputElement.innerHTML = `Hey there is a loss of Rs. ${loss} and the loss percentage is ${lossPercentage} % in your stock purchase`
    }else if(current > initial){
       const profit = (current - initial )*quantity
       outputElement.innerHTML = `Hey there is a profit of Rs . ${profit} in your stock purchase`
       const profitPercentage = (profit/initial)*100
       outputElement.innerHTML = `The profit percentage is ${profitPercentage}`
    }else{
        outputElement.innerHTML =  "No pain no gain and no gain no pain"
    }
  
}


function submitHandler(){
    var ip = Number(initialPrice.value);
    var qty = Number(stockQuantity);
    var curr = Number(currentPrice.value);
    calculateProfitOrLoss(ip, qty , curr)
}



submitBtn.addEventListener("click", submitHandler)

