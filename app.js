const amountElement=document.querySelector("#amount");
const firstSelector=document.querySelector("#firstCurrency");
const secondSelector=document.getElementById("secondCurrency");
const currency=new Currency("USD","TRY");
const ui=new UI(firstSelector,secondSelector);

eventListeners();
function eventListeners(){

        amountElement.addEventListener("input",exchangeCurrency);
        firstSelector.onchange=function(){
            currency.changeFirstCurrency(firstSelector.options[firstSelector.selectedIndex].textContent);
            ui.changeFirst();
        };  

        secondSelector.onchange=function(){
            currency.changeSecondCurrency(secondSelector.options[secondSelector.selectedIndex].textContent);
            ui.changeSecond();
        };
}

function exchangeCurrency(){
    currency.changeAmount(amountElement.value);
    currency.exchange()
    .then(result=>{ui.displayResult(result)})
    .catch(err=>console.log(err));
}