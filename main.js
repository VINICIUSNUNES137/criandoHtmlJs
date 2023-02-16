'use strict'

const adicionar = document.getElementById('add')

// function adicionarCard() {
//     alert('Olá mundo!')
// }

// const adicionarCard = () => {
//     const container = document.getElementById('container')
//     container.innerHTML = container.innerHTML + '<div class="items"></div>'
// }


const adicionarCard = (aluno, nota) => {

    const container = document.getElementById('container')
    const novaDiv = document.createElement('div')
    novaDiv.classList.add('aluno')
    if (nota >= 5) {
        novaDiv.classList.remove('aluno')
        novaDiv.classList.add('azul')

    } else {
        novaDiv.classList.remove('aluno')
        novaDiv.classList.add('vermelho')
    }

    novaDiv.innerHTML = `<h2 class="aluno__title">${aluno}</h2>` + `<h2 class="notaText">${nota}</h2>`

    console.log(typeof(nota))

    console.log('vazia')


    container.appendChild(novaDiv)

}

const handleClick = () => {
    const nomeAluno = prompt('Digite o nome do aluno').trim()
    const notaAluno = prompt('Digite a nota').trim()

    console.log(notaAluno)

    if (notaAluno === '' || nomeAluno || notaAluno) {
        alert('ERRO: Não é possível prosseguir com o campo VAZIO')
    } else if (notaAluno == null) {
        alert('ERRO: Não é possível prosseguir com o campo VAZIO')

    } else if (isNaN(notaAluno)) {
        alert('ERRO: Não é possível prosseguir com valores não númericos')
    } else if (notaAluno < 0 || notaAluno > 10) {
        alert('ERRO: Digite uma nota de 0 a 10')

    } else {
        adicionarCard(nomeAluno, notaAluno)
    }

}



adicionar.addEventListener('click', handleClick)