document.getElementById("herons-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const sideA = document.getElementById("side-a").value;
    const sideB = document.getElementById("side-b").value;
    const sideC = document.getElementById("side-c").value;
    const area = 1 / 4 * Math.sqrt(4 * sideA ** 2 * sideB ** 2 - (sideA ** 2 + sideB ** 2 - sideC ** 2) ** 2);

    document.getElementById("area-result").value = area;
})

document.getElementById("amb-case").addEventListener("submit", function (event) {
    event.preventDefault();
    const angleA = document.getElementById("angle-a").value;
    const sideA = document.getElementById("amb-case-side-a").value;
    const sideB = document.getElementById("amb-case-side-b").value;
    const h = sideB * Math.sin(angleA * Math.PI / 180);

    if (angleA < 90) {
        if (sideA < h) {
            document.getElementById("result").value = "No triangle";
        } else if (sideA === h) { //sin gives a floating point number, so it's not possible to have sideA = h
            document.getElementById("result").value = "Right triangle";
        } else if (sideA > sideB) {
            document.getElementById("result").value = "One triangle";
        } else if (sideA > h && sideA < sideB) {
            document.getElementById("result").value = "Two triangles (ambiguous case)";
        }
    } else if (angleA > 90) {
        if (sideA < sideB || sideA === sideB) {
            document.getElementById("result").value = "No triangle";
        } else if (sideA > sideB) {
            document.getElementById("result").value = "One triangle";
        }
    }
})