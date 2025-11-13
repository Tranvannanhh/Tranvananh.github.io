function calculate() {
    var a = document.frmCal.txtA;
    var b = document.frmCal.txtB;
    var o = document.frmCal.sltOp;
    var r = document.frmCal.txtR;

    var numberFormat = /^[+-]?\d+(\.\d+)?$/;

    if (numberFormat.test(a.value) == false) {
        alert("a must be a number!");
        a.focus();
    }
    else if (numberFormat.test(b.value) == false) {
        alert("b must be a number!");
        b.focus();
    }
    else if ((o.value == "/" || o.value == "%") && parseInt(b.value) == 0) {
        alert("b can't be 0!");
        r.value = "";
        b.focus();
    }
    else {
        r.value = eval(a.value + o.value + b.value);
    }
}
