function asgardia(agoraeh) {
    var dia = 0; // a soma começa somando 0+1, assim a contagem de dias começa do 1
    var mes = 1; // o mes começa do 1
    var ano = 0; // o ano começa do ano 0

    // Data do input
    var data2024 = new Date(agoraeh);
    // Data de 2016/12/01
    var data2016 = new Date("2015-12-31");
    // Convertendo as datas para milissegundos
    var milissegundos2024 = data2024.getTime();
    var milissegundos2016 = data2016.getTime();
    // Calculando a diferença em milissegundos
    var diferencaMilissegundos = milissegundos2024 - milissegundos2016;
    // Convertendo a diferença de milissegundos para dias
    var diasDiferenca = diferencaMilissegundos / (1000 * 60 * 60 * 24);
    // Arredondando para baixo, pois queremos o número inteiro de dias
    diasDiferenca = Math.floor(diasDiferenca);

    while (diasDiferenca > 0) {

        if (mes != 13) {
            if (dia == 29) { // até dia 28
                mes++; // soma no mes
                dia = 1; // reseta o dia
            }
        }
        if (mes == 13 && ano%4 == 0) {
            if (dia == 31) { // até dia 30
                mes++; // soma no mes
                dia = 1; // reseta o dia
            }
        } else if (mes == 13) {
            if (dia == 30) { // até dia 29
                mes++; // soma no mes
                dia = 1; // reseta o dia
            }
        }

        if (mes == 14) { // se o ano ta completo
            ano++; // soma no ano
            mes = 1; // reseta o mes
        }

        dia++;
        diasDiferenca--;
    }
    
    return ano+'/'+mes+'/'+dia;
}

// asgardia("2024-02-28");