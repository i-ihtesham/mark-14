let inputPrice = document.querySelector("#input-price")
let stockQuantity = document.querySelector("#stock-quantity")
let currentPrice = document.querySelector("#current-price")
let output = document.querySelector("#output")
let sub = document.querySelector("#sub")
let image = document.querySelector("#myImage")
let imageText = document.querySelector("#imageText")

sub.addEventListener("click", submitEvent)

function submitEvent()
{
    let ip = Number(inputPrice.value);
    let sq = Number(stockQuantity.value)
    let cp = Number(currentPrice.value)
    checkProfitorLoss(ip,sq,cp);
}


function checkProfitorLoss(initial, stock, current)
{
    if(current > initial)
    {
        let profit = (current - initial) * stock;
        let profitPercent = ((profit/initial) * 100).toFixed(2);
        image.src = 'img/profit.png'
        imageText.textContent = `The profit is ${profit} and profit% is ${profitPercent}`
        
    }
    else if( current < initial)
    {
        let loss = (initial - current) * stock;
        let lossPercent = ((loss/initial) * 100).toFixed(2);
        image.src = 'img/loss.png'
        imageText.textContent = `The loss is ${loss} and loss% is ${lossPercent}`
    }
        
    else{
        image.src = 'img/neutral.png'
        imageText.textContent = `No Pain, No Gain!!`
    }
}
