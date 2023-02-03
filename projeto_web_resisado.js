


//---projeto web---//

//---resisado---//    

//---------------------------------------------------------------------------------------//
/* Para começar nosso projeto da escola, vamos criar as três entidades que a constroem:

* Cursos - temos três cursos disponíveis: HTML e CSS, JavaScript, e APIs REST;

* Turmas;

* Estudantes; */

//----------------------------------------------------------------------------------------//

/* Array de objeto, turmas*/
//----------------------------------------------------------------------------------------//
const turmas = [
    {
        turma: "Hipatia",
        curso: "javaScript",
        inicio: "30/11/2022",
        termino: "30/01/2023",
        numeroAlunos: 150,
        periodo: "noturno",
        concluida: false
    },
    {
        turma: "Sibyla",
        curso: "JavaScript",
        inicio: "30/10/2022",
        termino: "30/12/2022",
        numeroAlunos: 200,
        periodo: "integral",
        concluida: false
    },
    {
        turma: "Curie",
        curso: "HTML e CSS",
        inicio: "15/09/2022",
        termino: "15/10/2022",
        numeroAlunos: 180,
        periodo: "noturno",
        concluida: true
    },
    {
        turma: "Zhenyi",
        curso: "HTML e CSS",
        inicio: "01/11/2022",
        termino: "01/01/2023",
        numeroAlunos: 80,
        periodo: "integral",
        concluida: false
    },
    {
        turma: "Clarke",
        curso: "HTML e CSS",
        inicio: "04/07/2022",
        termino: "04/09/2022",
        numeroAlunos: 200,
        periodo: "noturno",
        concluida: true
    },
    {
        turma: "Blackwell",
        curso: "APIsRest",
        inicio: "20/03/2022",
        termino: "20/06/2022",
        numeroAlunos: 100,
        periodo: "intregral",
        concluida: true
    },
    {
        turma: "Elion",
        curso: "APIsREst",
        inicio: "12/01/2022",
        termino: "12/06/2022",
        numeroAlunos: 200,
        periodo: "noturno",
        concluida: true
    },
    {
        turma: "Burnell",
        curso: "APIsRest",
        inicio: "18/10/2022",
        termino: "18/04/2023",
        numeroAlunos: 90,
        periodo: "integral",
        concluida: false
    }

]

/* Array de objeto, cursos */
//---------------------------------------------------------------------------------------//
const cursos = [
    {

        curso: "HTML e CSS",
        descricao: " curso voltado marcação e estilo para web",
        duracao: "tem 1 mes de duração",
        valor: 500


    },

    {
        curso: "JavaScript",
        descricao: "curso voltado para desenvolvimento web",
        duracao: "tem duração de 2 meses",
        valor: 900,
    },
    {
        curso: "APIsRest",
        descricao: "este curso é voltado para interação com serviços web",
        duracao: "tem 6 meses de duração",
        valor: 2000
    }

]

/* Array de objeto, estudantes */
//-----------------------------------------------------------------------------------------//

const estudantes = [
    {
        estudante: "Chris Evans",
        turma: "Hipática",
        curso: "JavaScript",
        valor: 900,
        nParcelas: 9,
        desconto: 0,
        parcelas: 100
    },
    {
        estudante: "Halle Berry",
        turma: "Burnell",
        curso: "APIsRest",
        valor: 2000,
        nParcelas: 4,
        desconto: 0,
        parcelas: 500
    },
    {
        estudante: "Lashana Lynch",
        turma: "Zhenyi",
        curso: "HTML e CSS",
        valor: 500,
        nParcelas: 1,
        desconto: 0,
        parcelas: 500
    }
]



//---------------------------------------------------------------------------------------//
/* Crie uma função chamada parcelarCurso, essa função deve calcular o valor parcelado e aplicar, ou não, o desconto */
//---------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------//
/*  Receber por parâmetro o número de parcelas (podemos chamar de: numeroDeParcelas), ou seja em quantas vezes será parcelado. */
//---------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------//
/* * Aplicar um desconto de 20% para pagamentos à vista ou parcelados em 2 vezes */
//---------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------//
/* * Mostrar no console uma frase que informe:

  - O nome do curso,

  - O valor total do curso, se houver desconto, mostre o valor com desconto aplicado

  - A quantidade de parcelas e o valor da parcela */
//---------------------------------------------------------------------------------------//


/* parcelarCurso */
//--------------------------------------------------------------------------------------//
/* Altere a função parcelarCurso para que ela receba um array e o número de parcelas.

O array deve se chamar carrinhoCursos e receber apenas os valores dos cursos adquiridos. Neste ponto do projeto o array ainda não é incrementado automaticamente, por isso esse passo pode ser feito manualmente.  */

//---------------------------------------------------------------------------------------//
const buscarCurso = (nomeCurso) => {
    let localizaCurso = cursos.find(index => index.curso.toLowerCase() === nomeCurso.toLowerCase())
    return localizaCurso
}

//console.log(buscarCurso("html e css")) 
//---------------------------------------------------------------------------------------//
//return carrinhoCursos
/* adiconarCarrinho("APIsRest")
adiconarCarrinho("JavaScript")
adiconarCarrinho("HTML e CSS") */

/*     const addCarrinho = buscarCurso(nome)
    /* console.log(carrinhoCursos) */
//return carrinhoCursos 


const carrinhoCursos = []

function adiconarCarrinho() {

    const nome = document.getElementById("input-curso").value
    const addCarrinho = buscarCurso(nome)

    carrinhoCursos.push(addCarrinho.valor)
    let resultado = document.getElementById("t-cursos")

    if (resultado.innerHTML.includes(nome)) {
        alert("Curso já adicionado ao carrinho")
    } else {
        resultado.innerHTML += nome + `<p></p>`
    }

    document.getElementById("input-curso").value = ""

    

}


//-------------------------------------------------------
//------------------------------------------------------------------------------



let descontos = 0

let valorTotalCursos = 0
let parcelasCurso = 0

function parcelarCurso() {
    //console.log("cheguei")

    const numeroDeParcelas = + document.getElementById("f-nParcelas").value
    const fDesconto = document.getElementById("t-desconto")
     fDesconto.innerHTML = ""

    switch (carrinhoCursos.length) {
        case 3:
            descontos = 0.15
            break;

        case 2:
            descontos = 0.10
            break;
        default:
            descontos = 0

    }

    for (let index of carrinhoCursos) {
        valorTotalCursos += index
    }
    
    //}
    //
    //--------------------------------------------------------------------------------------/
    //fDesconto.innerHTML = ""

    if (carrinhoCursos === 3 && numeroDeParcelas >= 1 && numeroDeParcelas <= 2) {
        descontos += 0.20
        valorTotalCursos -= (valorTotalCursos * descontos)
        parcelasCurso = valorTotalCursos / numeroDeParcelas

        fDesconto.innerHTML = `Os cursos ficaram no valor de ${valorTotalCursos}, e foi concedido um desconto de ${descontos * 100}% em ${numeroDeParcelas}x de ${parcelasCurso.toFixed(2)}`
    } else if (carrinhoCursos === 2 && numeroDeParcelas >= 1 && numeroDeParcelas <= 2) {
        descontos += 0.15
        valorTotalCursos -= (valorTotalCursos * descontos)
        parcelasCurso = valorTotalCursos / numeroDeParcelas

        /*   console.log(`Os cursos ficaram no valor de ${valorTotalCursos.toFixed(2)}, em e foi concedido um desconto de ${descontos * 100}% em ${numeroDeParcelas}x de ${parcelasCurso.toFixed(2)}`) */


    } else if (carrinhoCursos === 1 && numeroDeParcelas <= 2) {
        descontos = 0.20
        valorTotalCursos -= (valorTotalCursos * descontos)
        parcelasCurso = valorTotalCursos / numeroDeParcelas

        fDesconto.innerHTML = `O curso ficou no valor de  ${valorTotalCursos.toFixed(2)} em ${numeroDeParcelas}x de ${parcelasCurso.toFixed(2)} e foi concedido um desconto de ${descontos * 100}%`


    } else if (carrinhoCursos === 3 && numeroDeParcelas >= 3) {

        valorTotalCursos -= (valorTotalCursos * descontos)
        parcelasCurso = valorTotalCursos / numeroDeParcelas
        fDesconto.innerHTML = `o valor do curso é de ${valorTotalCursos.toFixed(2)} em ${numeroDeParcelas}x de ${parcelasCurso.toFixed(2)} e foi concedido um desconto de ${descontos * 100}%`

    } else if (carrinhoCursos === 2 && numeroDeParcelas >= 3) {
        descontos = 0.10
        valorTotalCursos -= (valorTotalCursos * descontos)
        parcelasCurso = valorTotalCursos / numeroDeParcelas
        fDesconto.innerHTML = `o valor do curso é de ${valorTotalCursos.toFixed(2)} em ${numeroDeParcelas}x de ${parcelasCurso.toFixed(2)} e foi concedido um desconto de ${descontos * 100}%`

    } else {
        valorTotalCursos = valorTotalCursos
        parcelasCurso = valorTotalCursos / numeroDeParcelas
        fDesconto.innerHTML = `o valor do curso é de ${valorTotalCursos.toFixed(2)} em ${numeroDeParcelas}x de ${parcelasCurso.toFixed(2)}`



        
    }
    document.getElementById("f-nParcelas").value = ""
}







//parcelarCurso()
//----------------------------------------------------------------------------------------//

//adicionando os valores no carrinhoCursos automaticamente com funções de callback
//---------------------------------------------------------------------------------------//

/* 5. A função buscarCurso também pode ser melhorada, modifique a função para que ela retorne o primeiro elemento encontrado. 
podemos usar o metodo find para isSecureContext, ele retorna o primeiro elemento encontrado */

/* buscarCurso melhorado */
//----------------------------------------------------------------------------------------//


/* buscarCurso */
//----------------------------------------------------------------------------------------//
/* const buscarCurso = (nomeCurso) => {
    for (let index in cursos) {
        if (cursos[index].curso.toLowerCase() === nomeCurso.toLowerCase()) {
            return cursos[index]
        }
    }

}
console.log(buscarCurso("javascript")) */
//---------------------------------------------------------------------------------------//
/* 1. Neste momento o array carrinhoCursos não é incrementado automaticamente, vamos mudar isso. Crie uma função para que os valores dos cursos sejam adicionados ao array carrinhoCursos, a função deve receber o nome do curso por parâmetro e adicionar o valor do curso no array e retornar o array carrinhoCursos. 
 */
//adicionarCarrinho
//---------------------------------------------------------------------------------------//


//----------------------------------------------------------------------------------------//
/* 1. Funções buscar

  1. Crie uma função que faça uma busca pelo array de cursos, de forma a passar o nome do curso por parâmetro. A função deve ser capaz de retornar o objeto referente ao curso solicitado. Essa função deve se chamar buscarCurso.

  2. Crie também uma função buscarTurma e buscarEstudante */
//----------------------------------------------------------------------------------------//


//console.log(buscarCurso("JavaScript"))
//---------------------------------------------------------------------------------------//


/* buscarTurma */
//---------------------------------------------------------------------------------------//
/* Modifique a função buscarTurma para que a busca ocorra utilizando o método filter() e mostre no console o resultado, caso a turma não seja encontrada mostre no console a mensagem "Turma não encontrada!".  */
//------------------------------------------------------------------------------------------//
//maneira certa




const buscarTurma = () => {

    const inputTurma = document.getElementById("inputTurma").value.toLowerCase()
    let busca

    if (inputTurma === "") {
        busca = turmas;
    } else {
        busca = turmas.filter((index) => index.turma.toLowerCase().includes(inputTurma.toLowerCase()))
    };

    const blocos = document.getElementById("meu-container");
    if (busca.length === 0) {
        blocos.innerHTML = "Turma não encontrada"
    } else {

        blocos.innerHTML = gerarCard(busca)
    };

    // return busca.length > 0 ? gerarCard(busca) : gerarCard(turmas)
}

const gerarCard = (turmaBuscada) => {
    return turmaBuscada.map((cadaTurmaBuscada) => {

        return (
            `<section id = "estilo-cards">
                    <h3>${cadaTurmaBuscada.turma}</h3>
                    <p><b>Curso</b> ${cadaTurmaBuscada.curso}</p>
                    <p><b>Início</b>: ${cadaTurmaBuscada.inicio}</p>
                    <p><b>Término</b>: ${cadaTurmaBuscada.termino}</p>
                    <p><b>Número de Alunos</b>: ${cadaTurmaBuscada.numeroAlunos}</p>
                    <p><b>Periodo</b>: ${cadaTurmaBuscada.periodo}</p>
                    <p><b>Conclisão</b>: ${cadaTurmaBuscada.concluida}</p>
             </section>`
        )
    }).join('');
}



/* 
const buscarTurma = (nomeTurma) => {
    for (let index in turmas) {
        if (turmas[index].turma.toLowerCase() === nomeTurma.toLowerCase()) {
            return turmas[index]
        }
    }
}
console.log(buscarTurma("Hipatia")) */
//----------------------------------------------------------------------------------------//
/* Altere a função buscarEstudante para que a função localize partes do nome. Por exemplo: Se o usuário digitar Mar, a função deve retornar o primeiro aluno que comece com Mar (Maria, Mariana). Se nenhum aluno for localizado a função deve retornar a mensagem "Aluno não encontrado" no console.  */

/* buscarEstudante melhorada */
//---------------------------------------------------------------------------------------//
const buscarEstudante = () => {

    const inputRelatorio = document.getElementById("input-relatorio").value.toLowerCase()
    // console.log(inputRelatorio)
    let listaRelatorio


    if (inputRelatorio === "") {
        const fLista = document.getElementById("f-lista");
        fLista.innerHTML = "Digite o nome do aluno"

    } else {
        listaRelatorio = estudantes.filter(index => index.estudante.toLowerCase().includes(inputRelatorio.toLowerCase()))
    }


    const fLista = document.getElementById("f-lista");
    if (listaRelatorio.length === 0) {
        fLista.innerHTML = "Aluno não encontrado"

    } else {

        fLista.innerHTML = relatorio(listaRelatorio)
    };

}

const relatorio = (buscador) => {
    return buscador = buscador.map(randon => {
        return (`
            <section id="relatorio">
                
                    <p>Estudante: ${randon.estudante}</p>
                    <p>Turma: ${randon.turma}</p>
                    <p>Curso: ${randon.curso}</p>
                    <p>Valor: ${randon.valor}</p>
                    <p>Parcelas: ${randon.nParcelas}</p>
                    <p>Desconto: ${randon.desconto}</p>
                    <p>Valor das parcelas: ${randon.parcelas}</p>
                    
               
            </section>`
        )
    }).join(" ")
}
//---------------------------------------------------------------------------------------//
/* buscarEstudante */
//----------------------------------------------------------------------------------------//
/* const buscarEstudante = (nomeEstudante) => {
    for (let index in estudantes) {
        if (estudantes[index].estudante.toLowerCase() === nomeEstudante.toLowerCase()) {
            return estudantes[index]
        }
    }
}
console.log(buscarEstudante("Chris evans")) */
//----------------------------------------------------------------------------------------//]

/* 1. Crie uma função chamada matricular, essa função deve ser capaz de inserir um aluno no array de estudantes. */
//----------------------------------------------------------------------------------------//

//----------------------------------------------------------------------------------------//
/* matricularAluno */
//----------------------------------------------------------------------------------------//

const alunoMatriculado = document.getElementById("aluno-matriculado");
const botaoMatricular = document.getElementById("botao-matricular")

const btnMatricutar = () => {
    const mNome = document.getElementById("input-nome").value
    const mCurso = document.getElementById("input-curso").value
    const mTurma = document.getElementById("input-turma").value
    const mNParcelas = document.getElementById("input-parcelas").value

    if (mNome && mCurso && mTurma && mNParcelas) {
        matricular(mNome, mCurso, mTurma, mNParcelas)
    } else {
        alert("Preencha todos os campos")
    }

    const novaMatricula = {

        estudante: mNome,
        curso: mCurso,
        turma: mTurma,
        nParcelas: mNParcelas
    }
    estudantes.push(novaMatricula)


    const alunoMatriculado = document.querySelector(".aluno-matriculado");

    alunoMatriculado.innerHTML = `
        <h2>Aluno matriculado <img src="assets/czinho.png" alt=""></h2> 
        <ul>
            <li>Aluno Matriculado</li>
            <li>Nome: ${mNome}</li>
            <li>Curso: ${mCurso}</li>
            <li>Turma: ${mTurma}</li>
        </ul>`

    // console.log(novaMatricula)

}

const matricular = (nome, curso, turma, nParcelas) => {
    const novoEstudante = {
        ...estudantes,
        estudante: nome,
        curso: curso,
        turma: turma,
        nParcelas: nParcelas
    }
    estudantes.push(novoEstudante)
    /* console.log(`o Aluno matriculado \n nome: ${novoEstudante.estudante} \n curso: ${novoEstudante.curso} \n turma: ${novoEstudante.turma}`) */
}
//matricular("Rafael", "JavaScript", "Ozemela", "3")


/*parcelarCuros*/
//---------------------------------------------------------------------------------------//

/* Nosso site precisará de uma função que busque um aluno pelo nome e imprima no console o relatório desse aluno. Para isso, vamos criar uma função chamada relatorioEstudante, que deve ter como retorno um relatório que contenha: o nome do aluno, a turma, o valor total pago, o valor da parcela e o número de parcelas. */

/* relatorioEstudante */
//---------------------------------------------------------------------------------------//

const relatorioEstudante = (nomeEstudante) => {
    const oRelatorio = buscarEstudante(nomeEstudante)
    return oRelatorio
}
/* console.log(relatorioEstudante("Chris Evans")) */
