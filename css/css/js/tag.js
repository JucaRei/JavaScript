// criar cores em cada 1 dos objetos (as tags)
const colors = {
    p: "#388e3c", // tag p vai ter essa cor
    div: "1565c0",
    span: "#e53935",
    section: "#f67809",
    ul: "#5e35b1",
    ol: "#fbc02d",
    header: "#d81b60",
    nav: "#64dd17",
    main: "#00acc1",
    footer: "#304ffe",
    form: "#9f6581",
    body: "#25b6da",
    padrao: "#616161",
    get(tag) {
        return this[tag] ? this[tag] : this.padrao; // se existir ele retorna, caso no exista , ele retorna a cor padrão
    }
};

document.querySelectorAll(".tag").forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase(); //pega o nome do elemento(div, p, ...) // box eh o elemento, tagName eh o nome daquele elemento, e tolowercase eh para colocar todas as letras minusculas

    elemento.style.borderColor = colors.get(tagName); // aplicar cor emcima da borda desse elemento

    //se não estiver marcado com o nolabel
    if (!elemento.classList.contains("nolabel")) {
        // se não tiver essa classe css  // esta contido nessa lista de classes o no label? se estiver contido não entre nesse trecho
        const label = document.createElement("label"); //criar uma tag diretamente no javascript // todas as tags
        label.style.backgroundColor = colors;
        label.innerHTML = tagName;
        elemento.insertBefore(label, elemento.childNodes[0]);
    }
});
