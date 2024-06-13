// criei uma variavel que PEGA tudo que eu quero interagir clicando (perguntas)
var questions = document.querySelectorAll('.question a');

// Para cada pergunta (questions.forEach) e criada essa função chamada "question" que roda tudo o que está dentro dela.
questions.forEach(function(question) {

    // ativa a funcão pra cada pergunta (question.) e coloca nelas uma escuta (addEventListener()) que é ativada por clique ('click',), e quando é ativada roda uma funcão chamada "event" (function(event)) que executa tudo o que está dentro dela. 
    question.addEventListener('click', function(event) {

        //ativa a função event (event.) e previne que o link da ancoragem (<a>) seja seguido com a propriedade "preventDefault()".
        event.preventDefault();

        // cria uma variável (answer) que PEGA o elemento irmão próximo/seguinte (nextElementSibling;) nesta família/identação (this.parentNode.)
        // ATENÇÃO: COMO ESSA PROPRIEDADE USA A IDENTAÇÃO(elementos irmãos(siblings) pais e etc..) COMO BASE PRA SELECIONAR QUEM QUE VAI SER PEGO, FAVOR FAZER UM HTML DECENTE.
        var answer = this.parentNode.nextElementSibling;

        // Verifica se o próximo elemento HTML(nesse caso a div answer) irmão da resposta clicada (answer.) contém uma classe (classList.) que indica que ela JÁ está visível (contains('visible))
        if (answer.classList.contains('visible')) {

            // SE (if) conter esta classe 'visible'(ou seja, estiver visível), vai fazer tudo o que está aqui embaixo (VAI FAZER ELA FICAR INVISÍVEL USANDO CSS).

            //Vai alterar o estilo css da resposta(answer.style.), fazendo com que ela não tenha mais altura máxima nenhuma(maxHeight = null;).
            answer.style.maxHeight = null;
            //Vai REMOVER A CLASSE 'VISIBLE' (classList.remove('visible')) desta resposta(answer.)
            answer.classList.remove('visible');
            //Vai PEGAR, nesta resposta (this.querySelector()) o símbolo de "+", e vai alterar o estilo css dele ((".plus").style.), fazendo ele APARECER com (display = "inline";)
            this.querySelector(".plus").style.display = "inline";
            // Vai PEGAR, nesta resposta (this.querySelector()) o símbolo de "-" e vai alterar o estilo css dele ((".minus").style.), fazendo ele DESAPARECER com (display = "none";)
            this.querySelector(".minus").style.display = "none";
            

            // SE não conter, ele desconsidera tudo isso ai em cima kkkk e executa else (significa literalmente "caso contrário") aqui em baixo.

        } else {

            // SE (if) não conter a classe 'visible'(ou seja, não estiver visível), vai fazer tudo o que está aqui embaixo (VAI FAZER ELA FICAR VISÍVEL USANDO CSS).

            // Vai alterar o estilo css da resposta(answer.style.), fazendo a altura máxima ser igual a altura total dessa resposta em pixels(maxHeight = ansver.scrollHeight + "px";). ISSO FAZ COM QUE FIQUE BONITINHO COM A ALTURA CERTINHA <3.
            answer.style.maxHeight = answer.scrollHeight + "px";

            //Vai ADICIONAR A CLASSE 'VISIBLE' (classList.add('visible')) a esta resposta(answer.)
            answer.classList.add('visible');

            //Vai PEGAR, nesta resposta (this.querySelector()) o símbolo de "+", e vai alterar o estilo css dele ((".plus").style.), fazendo ele DESAPARECER com (display = "none";)
            this.querySelector(".plus").style.display = "none";
            // Vai PEGAR, nesta resposta (this.querySelector()) o símbolo de "-" e vai alterar o estilo css dele ((".minus").style.), fazendo ele APARECER com (display = "inline";)
            this.querySelector(".minus").style.display = "inline";
        }
    });
});

// PARECE DIFÍCIL, E É, MAS NÃO É NEM UM POUCO IMPOSSÍVEL.