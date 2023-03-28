Feature: LOGIN NO SISTEMA
    Eu como aluno 
    preciso me autenticar no Sistema 
    para ter acesso Ao Sistema para fazer meu agendamento das Refeições diárias 

    Scenario: Login no sistema com matricula/email e senha já com cadastros;
        Given que esteja na tela de login
        And ao adicionar E-mail/Matricula e senhas válidos e que tenha um cadastro no sistema e 
        When Eu Clicar no Botão login
        Then vou ser redirecionado para a tela Principal do sistema

    Scenario: 'Login no sistema com email/matrícula senha sem cadastro'
        Given dado que esteja na tela de login
        And ao adicionar email/matricula sem estar cadastrado no sistema
        And ao adicionar senha sem estar cadastrado
        When eu clicar no Botão login
        Then deve apresentar uma mensagem de erro, e não posso entra no sistema

