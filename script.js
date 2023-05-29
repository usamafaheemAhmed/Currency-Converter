let toComma = (x) => x.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");



function currencyConverterBuy() {
    document.getElementById('currencyConverterBuy').classList.remove('d-none');
    document.getElementById('buy').classList.add('active');
    document.getElementById('sell').classList.remove('active');
    document.getElementById('currencyConverterSell').classList.add('d-none');
}
function currencyConverterSell() {
    document.getElementById('currencyConverterBuy').classList.add('d-none');
    document.getElementById('currencyConverterSell').classList.remove('d-none');
    document.getElementById('sell').classList.add('active');
    document.getElementById('buy').classList.remove('active');
}



 function dataGetter(id,type){

  
    if (type ==0){
        // alert(type);
        var myHeaders = new Headers();
        myHeaders.append("apikey", "2f52BIACYGRA4owMyiLZkqRNLYivZTi0");
        
        var requestOptions = {
          method: 'GET',
          redirect: 'follow',
          headers: myHeaders
        }; 
        let currencyConverterFromBuy = document.getElementById('currencyConverterFromBuy').value;
        let currencyConverterAmountBuy = parseFloat(document.getElementById('currencyConverterAmountBuy').value);
        
        let listArray = ["CNY","AED","TRY","USDT","EUR","CAD","USD","IRR","GBP"];
        
        fetch("https://api.apilayer.com/exchangerates_data/convert?to="+currencyConverterFromBuy+"&from="+listArray[id]+"&amount="+currencyConverterAmountBuy+"", requestOptions)
        .then(response => response.json())
        .then(result => setData(result.result,id,type))
        .catch(error => console.log('error', error));
    }
    else{
        // alert(type);
        var myHeaders = new Headers();
        myHeaders.append("apikey", "2f52BIACYGRA4owMyiLZkqRNLYivZTi0");
        
        var requestOptions = {
          method: 'GET',
          redirect: 'follow',
          headers: myHeaders
        }; 
        
        let currencyConverterFromSell = document.getElementById('currencyConverterFromSell').value;
        let currencyConverterAmountSell = parseFloat(document.getElementById('currencyConverterAmountSell').value);
    
        let listArray = ["CNY","AED","TRY","USDT","EUR","CAD","USD","IRR","GBP"];
    
       fetch("https://api.apilayer.com/exchangerates_data/convert?to="+listArray[id]+"&from="+currencyConverterFromSell+"&amount="+currencyConverterAmountSell+"", requestOptions)
       .then(response => response.json())
       .then(result => setData(result.result,id,type))
       .catch(error => console.log('error', error));
    }
   


}


async function setData(data,id,type){
    let converted = await data;
    // console.log(id);
    // console.log(type);
    if (type==0){
        // alert(id+"   "+type);

        if (id==0){
        
            document.getElementById("buyChineseResult").innerHTML=toComma(converted);
        }
        else if(id==1){
            
            document.getElementById("buyUaeResult").innerHTML=toComma(converted);
        }
        else if (id==2){
            
            document.getElementById("buyTurkishResult").innerHTML=toComma(converted);
        }
        else if (id==3){
            if (converted == undefined){
    
                document.getElementById("buyTetherResult").innerHTML="Loading....";   
            }
            else{
                document.getElementById("buyTetherResult").innerHTML=toComma(converted)||"Loading....";
            }
        }
        else if (id==4){
            
            document.getElementById("buyEuroResult").innerHTML=toComma(converted);
        }
        else if (id==5){
            
            document.getElementById("buyCanadianResult").innerHTML=toComma(converted);
        }
        else if (id==6){
            
            document.getElementById("buyUsaResult").innerHTML=toComma(converted);
        }
        else if (id==7){
            
            document.getElementById("buyIrrResult").innerHTML=toComma(converted);
        }
        else if (id==8){
            
            document.getElementById("buyPoundResult").innerHTML=toComma(converted);
        }



    }
    else if (type==1){


    if (id==0){
        
        document.getElementById("sellChineseResult").innerHTML=toComma(converted);
    }
    else if(id==1){
        
        document.getElementById("sellUaeResult").innerHTML=toComma(converted);
    }
    else if (id==2){
        
        document.getElementById("sellTurkishResult").innerHTML=toComma(converted);
    }
    else if (id==3){
        if (converted == undefined){

            document.getElementById("sellTetherResult").innerHTML="Loading....";   
        }
        else{
            document.getElementById("sellTetherResult").innerHTML=toComma(converted)||"Loading....";
        }
    }
    else if (id==4){
        
        document.getElementById("sellEuroResult").innerHTML=toComma(converted);
    }
    else if (id==5){
        
        document.getElementById("sellCanadianResult").innerHTML=toComma(converted);
    }
    else if (id==6){
        
        document.getElementById("sellUsaResult").innerHTML=toComma(converted);
    }
    else if (id==7){
        
        document.getElementById("sellIrrResult").innerHTML=toComma(converted);
    }
    else if (id==8){
        
        document.getElementById("sellPoundResult").innerHTML=toComma(converted);
    }
}

setTimeout(function (){document.getElementById("loading").classList.add("d-none");},300,[]);


} 




function convertSell() {
    document.getElementById("loading").classList.remove("d-none");
    let currencyConverterFromSell = document.getElementById('currencyConverterFromSell').value;
    let currencyConverterAmountSell = parseFloat(document.getElementById('currencyConverterAmountSell').value);

    if (currencyConverterFromSell == 0) {
        alert('Please Select Currency');
        return false;
    }
    else {
        if (!currencyConverterAmountSell) {
        alert('Please Enter Amount');
        return false;}
        else {
            document.getElementById('resultTableSell').classList.remove('d-none');
        }
    }
    let sell = 1;

    dataGetter(0,sell);
    dataGetter(1,sell);
    dataGetter(2,sell);
    dataGetter(3,sell);
    dataGetter(4,sell);
    dataGetter(5,sell);
    dataGetter(6,sell);
    dataGetter(7,sell);
    dataGetter(8,sell);





}



function convertBuy() {

    document.getElementById("loading").classList.remove("d-none");

    let currencyConverterFromBuy = document.getElementById('currencyConverterFromBuy').value;
    let currencyConverterAmountBuy = parseFloat(document.getElementById('currencyConverterAmountBuy').value);
    console.log('Buy Currency Converter From value =', currencyConverterFromBuy);
    console.log('Buy Currency Converter Amount value =', currencyConverterAmountBuy);

    if (currencyConverterFromBuy == 0) {
        alert('Please Select Currency');
        return false;
    }
    else {
        if (!currencyConverterAmountBuy) {
            alert('Please Enter Amount');
            return false;
        }
        else {
            document.getElementById('resultTableBuy').classList.remove('d-none');
        }
    }

    let buy = 0;

    dataGetter(0,buy);
    dataGetter(1,buy);
    dataGetter(2,buy);
    dataGetter(3,buy);
    dataGetter(4,buy);
    dataGetter(5,buy);
    dataGetter(6,buy);
    dataGetter(7,buy);
    dataGetter(8,buy);






}