/*global $ */

function r1_calculate(principle, interestYear){
	var r1_result = interestYear/principle;
	return r1_result;
}

function foo() {
    console.clear();
    console.log("foo worked ... Yay ?");
    
    $("#calculate").click(function(){
        
        var principle = $("#principle").val();
        var buyingDate = $("#buyingDate").val();
        var noYears = $("#noYears").val();
        var interestYear = $("#interestYear").val();
        var endAmount = $("#endAmount").val();
        var r1 = r1_calculate(principle, interestYear);
            
        console.log("principle: " + principle);
        console.log("buying date: " + buyingDate);
        console.log("Number of years: " + noYears);
        console.log("Interest of Year:" + interestYear);
        console.log("Returned Amount: " + endAmount);
        console.log("Rate 1: " +  r1.toFixed(6));
    });
}

$(foo());
