document.getElementById("herons-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const sideA = parseFloat(document.getElementById("side-a").value);
    const sideB = parseFloat(document.getElementById("side-b").value);
    const sideC = parseFloat(document.getElementById("side-c").value);
    const area = 1 / 4 * Math.sqrt(4 * sideA ** 2 * sideB ** 2 - (sideA ** 2 + sideB ** 2 - sideC ** 2) ** 2);

    if (sideA < 0 || sideB < 0 || sideC < 0) {
        document.getElementById("area-result").value = "Error: Invalid Input";
    } else {
        document.getElementById("area-result").value = area;
    }
})

document.getElementById("amb-case").addEventListener("submit", function (event) {
    event.preventDefault();
    const angleA = parseFloat(document.getElementById("angle-a").value);
    const sideA = parseFloat(document.getElementById("amb-case-side-a").value);
    const sideB = parseFloat(document.getElementById("amb-case-side-b").value);
    const h = sideB * Math.sin(angleA * Math.PI / 180);

    if (angleA < 0 || angleA > 180 || sideA < 0 || sideB < 0) {
        document.getElementById("result").value = "No triangle";
    } else if (angleA < 90) {
        if (sideA < h) {
            document.getElementById("result").value = "No triangle";
        } else if (Math.abs(sideA - h) < 0.0001) {
            document.getElementById("result").value = "Right triangle";
        } else if (sideA > sideB) {
            document.getElementById("result").value = "One triangle";
        } else if (sideA > h && sideA < sideB) {
            document.getElementById("result").value = "Two triangles (ambiguous)";
        }
    } else if (angleA > 90) {
        if (sideA < sideB || sideA === sideB) {
            document.getElementById("result").value = "No triangle";
        } else if (sideA > sideB) {
            document.getElementById("result").value = "One triangle";
        }
    } else {
        document.getElementById("result").value = "No triangle";
    }
})

document.getElementById("newtons-method-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let g = parseFloat(document.getElementById("root-guess").value);
    let f = 6 * g ** 4 - 13 * g ** 3 - 18 * g ** 2 + 7 * g + 6;
    let fPrime = 24 * g ** 3 - 39 * g ** 2 - 36 * g + 7;
    let calculatedRoot = g - (f / fPrime);

    while (Math.abs(calculatedRoot - g) > 0.0001) {
        g = calculatedRoot;
        f = 6 * g ** 4 - 13 * g ** 3 - 18 * g ** 2 + 7 * g + 6;
        fPrime = 24 * g ** 3 - 39 * g ** 2 - 36 * g + 7;
        calculatedRoot = g - (f / fPrime);
    }

    document.getElementById("approx").value = calculatedRoot.toFixed(6);
})

document.getElementById("poly-func").addEventListener("submit", function (event) {
    event.preventDefault();
    const coefficients = document.getElementById("coefficients").value.split(" ");
    const exp = document.getElementById("exponents").value.split(" ");
    const x = document.getElementById("x-value").value;
    let polyFunction = [];
    let functionValue = [];
    let evaluation = 0;

    for (let i = 0; i < coefficients.length; i++) {
        polyFunction.push(coefficients[i] + "x ^ " + exp[i]);
    }

    for (let i = 0; i < coefficients.length; i++) {
        functionValue.push(coefficients[i] * x ** exp[i]);
        evaluation += functionValue[i];
    }
    document.getElementById("result-1").value = "f(x) = " + polyFunction.join(" + ");
    document.getElementById("result-2").value = "f(" + x + ") = " + evaluation;
})