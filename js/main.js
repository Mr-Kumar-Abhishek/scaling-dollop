/*global $ */

function foo() {
    console.log("foo worked ... Yay ?");
    
    var principle = $("#principle").val();
    var buyingDate = $("#buyingDate").val();
    var noYears = $("#noYears").val();
    var interestYear = $("#interestYear").val();
    var endAmount = $("#endAmount").val();
    
    console.log("principle: " + principle);
    console.log("buying date: " + buyingDate);
    console.log("Number of years: " + noYears);
    console.log("Interest of Year:" + interestYear);
    console.log("Returned Amount: " + endAmount);
    
}

$(foo());