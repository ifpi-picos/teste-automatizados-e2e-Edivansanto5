Feature: LOGIN NO SISTEMA
    Eu como aluno 
    preciso me autenticar no Sistema 
    para ter acesso Ao Sistema para fazer meu agendamento das Refeições diárias 

    Scenario: Login no sistema com matricula/email e senha já com cadastros;
        Given  que esteja na tela de login
        And ao adicionar E-mail/Matricula e senhas válidos e que tenha um cadastro no sistema e 
        When Eu Clicar no Botão login
        Then vou ser redirecionado para a tela Principal do sistema

    

