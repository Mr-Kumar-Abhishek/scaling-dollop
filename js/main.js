/* global $ */

function r2_calculate(r1, noYears, principle){
        var r2_result = ((Math.pow((1/principle), (1/noYears))) - 1 + r1);
        return r2_result;
}

function r1_calculate(principle, interestYear){
	var r1_result = interestYear/principle;
	return r1_result;
}

function i_calculate(principle, amountEnd){
        var si_result = amountEnd - principle;
        return si_result;
}

function si_rate_calculate(principle, yearNo, si){
        si_rate_result = (si/(principle*yearNo));
        return si_rate_result;
}

function compounder(principle, yearNo, guessedRate, yearInterest){
        var compounding = principle;
        for (i = 0; i < yearNo; i++){
                compounding = ((compounding*guessedRate + compounding) - yearInterest);
        }
        return compounding;
}

function guesser(principle, yearNo, estimatedRate, yearInterest, amountEnd){
        guessedRate = estimatedRate;
        console.log("estimatedRate: ", + estimatedRate);
        
        resultAmount = 0;
        while(resultAmount != amountEnd){
                if( resultAmount < amountEnd){
                        guessedRate = guessedRate + 0.0000000000000001;
                }else if(resultAmount > amountEnd){
                        guessedRate = guessedRate - 0.0000000000000001;
                }else {
                        break;
                }
                console.log("current guessed rate: " + guessedRate);
                resultAmount = compounder(principle, yearNo, guessedRate, yearInterest);
                console.log("current resultAmount: ", + resultAmount);
                console.log("amountEnd: ", + amountEnd);
        }
        return guessedRate;
}

function foo() {
    console.clear();
    console.log("foo worked ... Yay ?");
    
    $("#calculate").click(function(){
        
        var principle = $("#principle").val();
        var buyingDate = new Date($("#buyingDate").val());
        var buyingYear = buyingDate.getFullYear();
        var buyingTime = buyingDate.getTime();
        var finYear = buyingYear + 1;
        var finDate = new Date("March 31, " + finYear + " " + buyingTime);
        var noYears = $("#noYears").val();
        var interestYear = $("#interestYear").val();
        var endAmount = $("#endAmount").val();
        var r1 = r1_calculate(principle, interestYear);
        var r2 = r2_calculate(r1, noYears, principle);
        var si_total = i_calculate(principle, endAmount);
        var si_total_rate = (principle, noYears, si_total);
        var rate = guesser(principle, noYears, r2, interestYear, endAmount);
        var rate_percent = rate*100;
        
        $("#rate").val(rate_percent.toFixed(6));
        
        console.log("principle: " + principle);
        console.log("buying date: " + buyingDate);
        console.log("buying year: " + buyingYear);
        console.log("finYear: " + finYear);
        console.log("finDate:" + finDate);
        console.log("Number of years: " + noYears);
        console.log("Interest of Year:" + interestYear);
        console.log("Returned Amount: " + endAmount);
        console.log("Rate 1: " +  r1.toFixed(6));
        console.log("Rate 2: " + r2.toFixed(6));
        console.log("SI total: " + si_total.toFixed(6)); 
        console.log("SI rate: " + si_total_rate.toFixed(6));
        console.log("Rate Percent: " + rate_percent.toFixed(6));
    });
}

$(foo());
