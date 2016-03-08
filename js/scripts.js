function roman(a) {
    if (a >= 1000) {
    return "M" + roman(a - 1000);
    }
    else if (a >= 500) {
      return "D" + roman(a - 500);
    }
    else if (a >= 100) {
        return "C" + roman(a - 100);
    }
    else if (a >= 50) {
        return "L" + roman(a - 50);
    }
    else if (a >= 40) {
        return "XL" + roman(a - 40);
    }
    else if (a >= 10) {
        return "X" + roman(a - 10);
    }
    else if (a >= 9) {
        return "IX" + roman(a - 9);
    }
    else if (a >= 5) {
        return "V" + roman(a - 5);
    }
    else if (a >= 4) {
        return "IV" + roman(a - 4);
    }
    else if (a >= 1) {
        return "I" + roman(a - 1);
    }
    // Otherwise, call this recursive procedure again.
    else {
        return "";
    }
}

$(document).ready(function() {
  $("form#rate").submit(function(event) {
    var a = parseInt($("input#number").val());

    var result = roman(a);

    $("#display").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
