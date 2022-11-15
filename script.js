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
function convertBuy() {
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
}

function convertSell() {
    let currencyConverterFromSell = document.getElementById('currencyConverterFromSell').value;
    let currencyConverterAmountSell = parseFloat(document.getElementById('currencyConverterAmountSell').value);
    console.log('Sell Currency Converter From value =', currencyConverterFromSell);
    console.log('Sell Currency Converter Amount value =', currencyConverterAmountSell);

    var myHeaders = new Headers();
    myHeaders.append("apikey", "RO94JLd1Wf93ShVnJA8Fo0FmaejOaDw7");
    
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
    let arrayresults =[];
   

        fetch("https://api.apilayer.com/exchangerates_data/convert?to="+"GBPUSD"+"&from="+currencyConverterFromSell+"&amount="+currencyConverterAmountSell, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result) )
        .catch(error => console.log('error', error));
        
        
        console.log(arrayresults[0]);


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
}
