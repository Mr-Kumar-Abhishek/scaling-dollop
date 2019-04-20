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
        
        $("#rate").val(si_total_rate.toFixed(6));
        
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
    });
}

$(foo());
