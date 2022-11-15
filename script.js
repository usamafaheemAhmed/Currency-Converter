function currencyConverterBuy() {
    document.getElementById('currencyConverterBuy').classList.remove('d-none');
    document.getElementById('currencyConverterSell').classList.add('d-none');
}
function currencyConverterSell() {
    document.getElementById('currencyConverterBuy').classList.add('d-none');
    document.getElementById('currencyConverterSell').classList.remove('d-none');
}
function convertBuy() {
    // alert('run');
    document.getElementById('resultTableBuy').classList.remove('d-none');
    let currencyConverterFromBuy = document.getElementById('currencyConverterFromBuy').value;
    let currencyConverterAmountBuy = document.getElementById('currencyConverterAmountBuy').value;
    console.log('Buy Currency Converter From value =',currencyConverterFromBuy);
    console.log('Buy Currency Converter Amount value =',currencyConverterAmountBuy);
    // if (currencyConverterFrom == 0)
    // {
    //     console.log('Currency Converter To value 213 =',currencyConverterAmount);
    //     if (currencyConverterTo == 1){
    //         let currencyConvertedAmount = currencyConverterAmount*49964.72;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 2){
    //         let currencyConvertedAmount = currencyConverterAmount*1.18;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 3){
    //         let currencyConvertedAmount = currencyConverterAmount*1.56;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 4){
    //         let currencyConvertedAmount = currencyConverterAmount*1.14;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
        
    //     else if (currencyConverterTo == 5){
    //         let currencyConvertedAmount = currencyConverterAmount*1.19;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 6){
    //         let currencyConvertedAmount = currencyConverterAmount*21.94;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }  
    //     else if (currencyConverterTo == 7){
    //         let currencyConvertedAmount = currencyConverterAmount*4.34;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 8){
    //         let currencyConvertedAmount = currencyConverterAmount*8.40;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else{
    //         console.log('Currency Converter From value =',currencyConverterFrom);
    //         console.log('Currency Converter To value =',currencyConverterTo);
    //         console.log('Currency Converter Amount value =',currencyConvertedAmount);
    //     } 
        
    // }
    // else if (currencyConverterFrom == 1 ){

    //     if (currencyConverterTo == 0){
    //         let currencyConvertedAmount = currencyConverterAmount*0.000020;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 2){
    //         let currencyConvertedAmount = currencyConverterAmount*0.000024;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 3){
    //         let currencyConvertedAmount = currencyConverterAmount*0.000031;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 4){
    //         let currencyConvertedAmount = currencyConverterAmount*0.000023;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
        
    //     else if (currencyConverterTo == 5){
    //         let currencyConvertedAmount = currencyConverterAmount*0.000024;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 6){
    //         let currencyConvertedAmount = currencyConverterAmount*0.00044;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }  
    //     else if (currencyConverterTo == 7){
    //         let currencyConvertedAmount = currencyConverterAmount*0.000087;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 8){
    //         let currencyConvertedAmount = currencyConverterAmount*0.00017;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else{
    //         console.log('Currency Converter From value =',currencyConverterFrom);
    //         console.log('Currency Converter To value =',currencyConverterTo);
    //         console.log('Currency Converter Amount value =',currencyConvertedAmount);
    //     } 





    // }
    // else if (currencyConverterFrom == 2 ){

    //     if (currencyConverterTo == 0){
    //         // pound
    //         let currencyConvertedAmount = currencyConverterAmount*0.85;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 1){
    //         // irani rayal
    //         let currencyConvertedAmount = currencyConverterAmount*42300.00;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 3){
    //         // CANADA DOLLoer
    //         let currencyConvertedAmount = currencyConverterAmount*1.33;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 4){
    //         // EURO
    //         let currencyConvertedAmount = currencyConverterAmount*0.96;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
        
    //     else if (currencyConverterTo == 5){
    //         // TETHER
    //         let currencyConvertedAmount = currencyConverterAmount*1.00;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 6){
    //         // TURKISH LIRA
    //         let currencyConvertedAmount = currencyConverterAmount*18.57;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }  
    //     else if (currencyConverterTo == 7){
    //         // UAE DIRHAM
    //         let currencyConvertedAmount = currencyConverterAmount*3.67;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 8){
    //         // CHINESE YUAN
    //         let currencyConvertedAmount = currencyConverterAmount*7.11;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else{
    //         console.log('Currency Converter From value =',currencyConverterFrom);
    //         console.log('Currency Converter To value =',currencyConverterTo);
    //         console.log('Currency Converter Amount value =',currencyConvertedAmount);
    //     } 
    // }
    // else if (currencyConverterFrom == 3 ){

    //     if (currencyConverterTo == 0){
    //         // pound
    //         let currencyConvertedAmount = currencyConverterAmount*0.64;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 1){
    //         // irani rayal
    //         let currencyConvertedAmount = currencyConverterAmount*31875.21;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 2){
    //         // us dollar
    //         let currencyConvertedAmount = currencyConverterAmount*0.75;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 4){
    //         // EURO
    //         let currencyConvertedAmount = currencyConverterAmount*0.73;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
        
    //     else if (currencyConverterTo == 5){
    //         // TETHER
    //         let currencyConvertedAmount = currencyConverterAmount*0.75;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 6){
    //         // TURKISH LIRA
    //         let currencyConvertedAmount = currencyConverterAmount*14.00;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }  
    //     else if (currencyConverterTo == 7){
    //         // UAE DIRHAM
    //         let currencyConvertedAmount = currencyConverterAmount*2.77;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 8){
    //         // CHINESE YUAN
    //         let currencyConvertedAmount = currencyConverterAmount*5.36;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else{
    //         console.log('Currency Converter From value =',currencyConverterFrom);
    //         console.log('Currency Converter To value =',currencyConverterTo);
    //         console.log('Currency Converter Amount value =',currencyConvertedAmount);
    //     } 
    // }
    // else if (currencyConverterFrom == 4 ){

    //     if (currencyConverterTo == 0){
    //         // pound
    //         let currencyConvertedAmount = currencyConverterAmount*0.88;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 1){
    //         // irani rayal
    //         let currencyConvertedAmount = currencyConverterAmount*43877.37;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 2){
    //         // us dollar
    //         let currencyConvertedAmount = currencyConverterAmount*1.04;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 4){
    //         // EURO
    //         let currencyConvertedAmount = currencyConverterAmount/0.73;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value= currencyConvertedAmount.toFixed(3);
    //     }
        
    //     else if (currencyConverterTo == 5){
    //         // TETHER
    //         let currencyConvertedAmount = currencyConverterAmount*1.04;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 6){
    //         // TURKISH LIRA
    //         let currencyConvertedAmount = currencyConverterAmount*19.27;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }  
    //     else if (currencyConverterTo == 7){
    //         // UAE DIRHAM
    //         let currencyConvertedAmount = currencyConverterAmount*3.81;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 8){
    //         // CHINESE YUAN
    //         let currencyConvertedAmount = currencyConverterAmount*7.37;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else{
    //         console.log('Currency Converter From value =',currencyConverterFrom);
    //         console.log('Currency Converter To value =',currencyConverterTo);
    //         console.log('Currency Converter Amount value =',currencyConvertedAmount);
    //     } 
    // }
    // else{
    //     console.log('somethingiswrrong');
    // }

    // setTimeout(function () {
    //     console.log("Welcome to GeeksforGeeks! for button");
    //     document.getElementById('currencyConverterAmount').value=0;
    //     document.getElementById('currencyConvertedAmount').value=0;
    //     document.getElementById('currencyConverterFrom').value=0;
    //     document.getElementById('currencyConverterTo').value=0;
    // }, 9000);
}

function convertSell() {
    // alert('run');
    document.getElementById('resultTableSell').classList.remove('d-none');
    let currencyConverterFromSell = document.getElementById('currencyConverterFromSell').value;
    let currencyConverterAmountSell = document.getElementById('currencyConverterAmountSell').value;
    console.log('Sell Currency Converter From value =',currencyConverterFromSell);
    console.log('Sell Currency Converter Amount value =',currencyConverterAmountSell);
    // if (currencyConverterFrom == 0)
    // {
    //     console.log('Currency Converter To value 213 =',currencyConverterAmount);
    //     if (currencyConverterTo == 1){
    //         let currencyConvertedAmount = currencyConverterAmount*49964.72;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 2){
    //         let currencyConvertedAmount = currencyConverterAmount*1.18;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 3){
    //         let currencyConvertedAmount = currencyConverterAmount*1.56;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 4){
    //         let currencyConvertedAmount = currencyConverterAmount*1.14;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
        
    //     else if (currencyConverterTo == 5){
    //         let currencyConvertedAmount = currencyConverterAmount*1.19;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 6){
    //         let currencyConvertedAmount = currencyConverterAmount*21.94;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }  
    //     else if (currencyConverterTo == 7){
    //         let currencyConvertedAmount = currencyConverterAmount*4.34;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 8){
    //         let currencyConvertedAmount = currencyConverterAmount*8.40;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else{
    //         console.log('Currency Converter From value =',currencyConverterFrom);
    //         console.log('Currency Converter To value =',currencyConverterTo);
    //         console.log('Currency Converter Amount value =',currencyConvertedAmount);
    //     } 
        
    // }
    // else if (currencyConverterFrom == 1 ){

    //     if (currencyConverterTo == 0){
    //         let currencyConvertedAmount = currencyConverterAmount*0.000020;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 2){
    //         let currencyConvertedAmount = currencyConverterAmount*0.000024;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 3){
    //         let currencyConvertedAmount = currencyConverterAmount*0.000031;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 4){
    //         let currencyConvertedAmount = currencyConverterAmount*0.000023;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
        
    //     else if (currencyConverterTo == 5){
    //         let currencyConvertedAmount = currencyConverterAmount*0.000024;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 6){
    //         let currencyConvertedAmount = currencyConverterAmount*0.00044;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }  
    //     else if (currencyConverterTo == 7){
    //         let currencyConvertedAmount = currencyConverterAmount*0.000087;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 8){
    //         let currencyConvertedAmount = currencyConverterAmount*0.00017;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else{
    //         console.log('Currency Converter From value =',currencyConverterFrom);
    //         console.log('Currency Converter To value =',currencyConverterTo);
    //         console.log('Currency Converter Amount value =',currencyConvertedAmount);
    //     } 





    // }
    // else if (currencyConverterFrom == 2 ){

    //     if (currencyConverterTo == 0){
    //         // pound
    //         let currencyConvertedAmount = currencyConverterAmount*0.85;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 1){
    //         // irani rayal
    //         let currencyConvertedAmount = currencyConverterAmount*42300.00;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 3){
    //         // CANADA DOLLoer
    //         let currencyConvertedAmount = currencyConverterAmount*1.33;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 4){
    //         // EURO
    //         let currencyConvertedAmount = currencyConverterAmount*0.96;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
        
    //     else if (currencyConverterTo == 5){
    //         // TETHER
    //         let currencyConvertedAmount = currencyConverterAmount*1.00;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 6){
    //         // TURKISH LIRA
    //         let currencyConvertedAmount = currencyConverterAmount*18.57;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }  
    //     else if (currencyConverterTo == 7){
    //         // UAE DIRHAM
    //         let currencyConvertedAmount = currencyConverterAmount*3.67;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 8){
    //         // CHINESE YUAN
    //         let currencyConvertedAmount = currencyConverterAmount*7.11;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else{
    //         console.log('Currency Converter From value =',currencyConverterFrom);
    //         console.log('Currency Converter To value =',currencyConverterTo);
    //         console.log('Currency Converter Amount value =',currencyConvertedAmount);
    //     } 
    // }
    // else if (currencyConverterFrom == 3 ){

    //     if (currencyConverterTo == 0){
    //         // pound
    //         let currencyConvertedAmount = currencyConverterAmount*0.64;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 1){
    //         // irani rayal
    //         let currencyConvertedAmount = currencyConverterAmount*31875.21;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 2){
    //         // us dollar
    //         let currencyConvertedAmount = currencyConverterAmount*0.75;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 4){
    //         // EURO
    //         let currencyConvertedAmount = currencyConverterAmount*0.73;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
        
    //     else if (currencyConverterTo == 5){
    //         // TETHER
    //         let currencyConvertedAmount = currencyConverterAmount*0.75;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 6){
    //         // TURKISH LIRA
    //         let currencyConvertedAmount = currencyConverterAmount*14.00;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }  
    //     else if (currencyConverterTo == 7){
    //         // UAE DIRHAM
    //         let currencyConvertedAmount = currencyConverterAmount*2.77;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 8){
    //         // CHINESE YUAN
    //         let currencyConvertedAmount = currencyConverterAmount*5.36;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else{
    //         console.log('Currency Converter From value =',currencyConverterFrom);
    //         console.log('Currency Converter To value =',currencyConverterTo);
    //         console.log('Currency Converter Amount value =',currencyConvertedAmount);
    //     } 
    // }
    // else if (currencyConverterFrom == 4 ){

    //     if (currencyConverterTo == 0){
    //         // pound
    //         let currencyConvertedAmount = currencyConverterAmount*0.88;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 1){
    //         // irani rayal
    //         let currencyConvertedAmount = currencyConverterAmount*43877.37;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 2){
    //         // us dollar
    //         let currencyConvertedAmount = currencyConverterAmount*1.04;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 4){
    //         // EURO
    //         let currencyConvertedAmount = currencyConverterAmount/0.73;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value= currencyConvertedAmount.toFixed(3);
    //     }
        
    //     else if (currencyConverterTo == 5){
    //         // TETHER
    //         let currencyConvertedAmount = currencyConverterAmount*1.04;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 6){
    //         // TURKISH LIRA
    //         let currencyConvertedAmount = currencyConverterAmount*19.27;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }  
    //     else if (currencyConverterTo == 7){
    //         // UAE DIRHAM
    //         let currencyConvertedAmount = currencyConverterAmount*3.81;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else if (currencyConverterTo == 8){
    //         // CHINESE YUAN
    //         let currencyConvertedAmount = currencyConverterAmount*7.37;
    //         console.log('Currency Converter To value =',currencyConvertedAmount);
    //         document.getElementById('currencyConvertedAmount').value=currencyConvertedAmount;
    //     }
    //     else{
    //         console.log('Currency Converter From value =',currencyConverterFrom);
    //         console.log('Currency Converter To value =',currencyConverterTo);
    //         console.log('Currency Converter Amount value =',currencyConvertedAmount);
    //     } 
    // }
    // else{
    //     console.log('somethingiswrrong');
    // }

    // setTimeout(function () {
    //     console.log("Welcome to GeeksforGeeks! for button");
    //     document.getElementById('currencyConverterAmount').value=0;
    //     document.getElementById('currencyConvertedAmount').value=0;
    //     document.getElementById('currencyConverterFrom').value=0;
    //     document.getElementById('currencyConverterTo').value=0;
    // }, 9000);
}
 
// function to(){
//     let currencyConverterFrom = document.getElementById('currencyConverterFrom').value;
//     // alert('usama');
//     if (currencyConverterFrom == 0) {
//         document.getElementById("currencyConverterTo").innerHTML = "";
//         var newOptions = document.getElementById("currencyConverterTo");
//         var option = document.createElement("option");
//         option.text = "IRR"; option.value = "1"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "USA DOLLOR "; option.value = "2"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "CANADA DOLLOR "; option.value = "3"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "EURO"; option.value = "4"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "TETHER"; option.value = "5"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "TURKISH LIRA "; option.value = "6"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "UAE DIRHAM"; option.value = "7"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "CHINESE YUAN"; option.value = "8"; newOptions.add(option);

//     }
//     else if (currencyConverterFrom == 1) {
//         document.getElementById("currencyConverterTo").innerHTML = "";
//         var newOptions = document.getElementById("currencyConverterTo");
//         var option = document.createElement("option");
//         option.text = "Pound"; option.value = "0"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "USA DOLLOR "; option.value = "2"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "CANADA DOLLOR "; option.value = "3"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "EURO"; option.value = "4"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "TETHER"; option.value = "5"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "TURKISH LIRA "; option.value = "6"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "UAE DIRHAM"; option.value = "7"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "CHINESE YUAN"; option.value = "8"; newOptions.add(option);

//     }
//     else if (currencyConverterFrom == 2) {
//         document.getElementById("currencyConverterTo").innerHTML = "";
//         var newOptions = document.getElementById("currencyConverterTo");
//         var option = document.createElement("option");
//         option.text = "Pound"; option.value = "0"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "IRR"; option.value = "1"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "CANADA DOLLOR "; option.value = "3"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "EURO"; option.value = "4"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "TETHER"; option.value = "5"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "TURKISH LIRA "; option.value = "6"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "UAE DIRHAM"; option.value = "7"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "CHINESE YUAN"; option.value = "8"; newOptions.add(option);

//     }
//     else if (currencyConverterFrom == 3) {
//         document.getElementById("currencyConverterTo").innerHTML = "";
//         var newOptions = document.getElementById("currencyConverterTo");
//         var option = document.createElement("option");
//         option.text = "Pound"; option.value = "0"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "IRR"; option.value = "1"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "USA DOLLOR "; option.value = "2"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "EURO"; option.value = "4"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "TETHER"; option.value = "5"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "TURKISH LIRA "; option.value = "6"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "UAE DIRHAM"; option.value = "7"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "CHINESE YUAN"; option.value = "8"; newOptions.add(option);

//     }
//     else if (currencyConverterFrom == 4) {
//         document.getElementById("currencyConverterTo").innerHTML = "";
//         var newOptions = document.getElementById("currencyConverterTo");
//         var option = document.createElement("option");
//         option.text = "Pound"; option.value = "0"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "IRR"; option.value = "1"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "USA DOLLOR "; option.value = "2"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "CANADA DOLLOR "; option.value = "3"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "TETHER"; option.value = "5"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "TURKISH LIRA "; option.value = "6"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "UAE DIRHAM"; option.value = "7"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "CHINESE YUAN"; option.value = "8"; newOptions.add(option);

//     }
//     else if (currencyConverterFrom == 5) {
//         document.getElementById("currencyConverterTo").innerHTML = "";
//         var newOptions = document.getElementById("currencyConverterTo");
//         var option = document.createElement("option");
//         option.text = "Pound"; option.value = "0"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "IRR"; option.value = "1"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "USA DOLLOR "; option.value = "2"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "CANADA DOLLOR "; option.value = "3"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "EURO"; option.value = "4"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "TURKISH LIRA "; option.value = "6"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "UAE DIRHAM"; option.value = "7"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "CHINESE YUAN"; option.value = "8"; newOptions.add(option);

//     }
//     else if (currencyConverterFrom == 6) {
//         document.getElementById("currencyConverterTo").innerHTML = "";
//         var newOptions = document.getElementById("currencyConverterTo");
//         var option = document.createElement("option");
//         option.text = "Pound"; option.value = "0"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "IRR"; option.value = "1"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "USA DOLLOR "; option.value = "2"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "CANADA DOLLOR "; option.value = "3"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "EURO"; option.value = "4"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "TETHER"; option.value = "5"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "UAE DIRHAM"; option.value = "7"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "CHINESE YUAN"; option.value = "8"; newOptions.add(option);

//     }
//     else if (currencyConverterFrom == 7) {
//         document.getElementById("currencyConverterTo").innerHTML = "";
//         var newOptions = document.getElementById("currencyConverterTo");
//         var option = document.createElement("option");
//         option.text = "Pound"; option.value = "0"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "IRR"; option.value = "1"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "USA DOLLOR "; option.value = "2"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "CANADA DOLLOR "; option.value = "3"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "EURO"; option.value = "4"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "TETHER"; option.value = "5"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "TURKISH LIRA "; option.value = "6"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "CHINESE YUAN"; option.value = "8"; newOptions.add(option);

//     }
//     else if (currencyConverterFrom == 8) {
//         document.getElementById("currencyConverterTo").innerHTML = "";
//         var newOptions = document.getElementById("currencyConverterTo");
//         var option = document.createElement("option");
//         option.text = "Pound"; option.value = "0"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "IRR"; option.value = "1"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "USA DOLLOR "; option.value = "2"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "CANADA DOLLOR "; option.value = "3"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "EURO"; option.value = "4"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "TETHER"; option.value = "5"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "TURKISH LIRA "; option.value = "6"; newOptions.add(option);
//         var option = document.createElement("option");
//         option.text = "UAE DIRHAM"; option.value = "7"; newOptions.add(option);

//     }
//     else{
//         document.getElementById("currencyConverterTo").innerHTML = "";
//         option.selected.text="Select from first";
//          option.value = "0"; newOptions.add(option);
//     }
// }