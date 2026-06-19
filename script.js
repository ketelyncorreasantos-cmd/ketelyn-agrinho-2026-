function simularImpacto(acao) {
    const resultadoBox = document.getElementById('resultado-simulacao');
    const titulo = document.getElementById('resultado-titulo');
    const texto = document.getElementById('resultado-texto');
    
    // Remove classes anteriores para resetar o estilo do alerta
    resultadoBox.classList.remove('hidden', 'success-style', 'danger-style');

    if (acao === 'tecnologia') {
        titulo.innerText = "🌾 Impacto Otimizado (Agronegócio)";
        texto.innerText = "Excelente! O uso de sensores inteligentes reduziu o consumo de água em 35% e evitou a aplicação desnecessária de defensivos agrícolas. A produtividade subiu com respeito aos recursos naturais.";
        resultadoBox.classList.add('success-style');
    } 
    else if (acao === 'agrofloresta') {
        titulo.innerText = "🌳 Impacto Sustentável (Agricultura Familiar)";
        texto.innerText = "Incrível! A integração de árvores com plantações agrícolas recuperou o solo degradado, trouxe de volta polinizadores naturais e garantiu alimentos diversificados e orgânicos para o comércio local.";
        resultadoBox.classList.add('success-style');
    } 
    else if (acao === 'quimicos') {
        titulo.innerText = "⚠️ Alerta Ambiental e Econômico";
        texto.innerText = "Atenção! O uso descontrolado de insumos químicos sem análise prévia causou a contaminação do lençol freático e empobreceu os microrganismos vivos do solo. A longo prazo, a terra perde o valor e o ecossistema sofre.";
        resultadoBox.classList.add('danger-style');
    }
}
