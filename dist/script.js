function calculate() {
        var angle = parseFloat(document.getElementById("angle").value);
        var radians = angle * Math.PI / 180;
        var sinValue = Math.sin(radians);
        var cosValue = Math.cos(radians);
        var tanValue = Math.tan(radians);
        document.getElementById("result").innerHTML = "sin(" + angle + "°) = " + sinValue.toFixed(4) + "<br>" +
                                                        "cos(" + angle + "°) = " + cosValue.toFixed(4) + "<br>" +
                                                        "tan(" + angle + "°) = " + tanValue.toFixed(4);
    }