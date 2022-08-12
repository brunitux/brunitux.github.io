const input1 = document.getElementById("input");
const output1 = document.getElementById("output");
const change1 = document.getElementById("change");
const copyResult1 = document.getElementById("copyResult");
 //codificador
input1.addEventListener('keyup', () => {
    const encodedString = btoa(input1.value);
    output1.value = encodedString;
    change1.style.transform = "rotate(0deg)";
});
output1.addEventListener('keyup', () => {
    const decodedString = atob(output1.value);
    input1.value = decodedString;
    change1.style.transform = "rotate(180deg)";
});
function limparCaixas() {
    input1.value = "";
    output1.value = "";
    copyResult1.innerText = "";
    change1.style.transform = "rotate(0deg)";
}

//copiar pra área de transferência
var copyTextareaBtn = document.querySelector('.copiar');
copyTextareaBtn.addEventListener('click', function(event) {
  var copyTextarea = document.querySelector('.textareaD');
  copyTextarea.focus();
  copyTextarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    copyResult1.innerText = "Copiado!";
  } catch (err) {
    copyResult1.innerText = "Erro ao copiar!";
  }
});