function triangulo(){
    let inLadoA = Number(document.getElementById('inLadoA').value);
    let inLadoB = Number(document.getElementById('inLadoB').value);
    let inLadoC = Number(document.getElementById('inLadoC').value);
    let outTexto = document.getElementById('outTexto');
    let outTipo = document.getElementById('outTipo');
    outTipo.textContent = '' // limpando a cada chamada

    function verificaSeTriangulo(){
        if(inLadoA > (inLadoB + inLadoC) || inLadoB > (inLadoA + inLadoC) || inLadoC > (inLadoA + inLadoB)) {
            outTexto.textContent = 'Nao e possivel formar um Triângulo';
        } else if (inLadoA === inLadoB && inLadoB === inLadoC) {
            outTexto.textContent = 'Os lados podem formar um Triângulo';
            outTipo.textContent = 'Tipo: Equilatero';
        } else if (inLadoA === inLadoB || inLadoB === inLadoC || inLadoC === inLadoA){
            outTexto.textContent = 'Os lados podem formar um Triângulo';
            outTipo.textContent = 'Tipo: Isosceles';
        } else {
            outTexto.textContent = 'Os lados podem formar um Triângulo';
            outTipo.textContent = 'Tipo: Escaleno';
        }
    }
    verificaSeTriangulo()
}
let btVerificar = document.getElementById('btVerificar');
btVerificar.addEventListener('click', triangulo);
