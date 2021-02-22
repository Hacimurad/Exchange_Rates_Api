class Currency{
//-------------------------------------
    constructor(firstCurrency,secondCurrency){
        this.firstCurrency=firstCurrency;
        this.secondCurrency=secondCurrency;
        this.url="https://api.exchangeratesapi.io/latest?base=";

        this.amount=null;
    }

//----------------------------------------    
    exchange(){

        return new Promise((resolve,reject)=>{
            fetch(this.url+this.firstCurrency)

            .then(response=>response.json())

            .then(data=>{
                const party=data.rates[this.secondCurrency];
                const amount2=Number(this.amount)
                let total=party*amount2
                resolve(total)
            })

            .catch(err=>reject(err));

        })
     
    };
//-------------------------------------

    changeAmount(amount){
        this.amount=amount
    };

    changeFirstCurrency(newFirst){
        this.firstCurrency=newFirst
    };

    changeSecondCurrency(newSecond){
        this.secondCurrency=newSecond
    };
//-------------------------------------
}


