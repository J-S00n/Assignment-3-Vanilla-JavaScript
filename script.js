document.getElementById("heron's-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const sideA = document.getElementById("side-a").value;
    const sideB = document.getElementById("side-b").value;
    const sideC = document.getElementById("side-c").value;
    const area = (1/4)*(Math.sqrt((4*(sideA**2)*(sideB**2)-((sideA**2)+(sideB**2)-(sideC**2))**2)));

    document.getElementById("result").value = area;
})