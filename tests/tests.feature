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
        Given que esteja na tela de login
        And ao adicionar email/matricula sem estar cadastrado no sistema
        And ao adicionar senha sem estar cadastrado
        When eu clicar no Botão login
        Then deve apresentar uma mensagem de erro, e não posso entra no sistema

    Scenario:'Login com matricula/e-mail inválidos'
        Given que eu esteja na tela de login
        And ao adicionar matricula/email invalidos
        And ao adicionar senha inválidos e 
        When eu Clicar no Botão login
        Then vou receber uma mensagem de erro e não vou entrar no sistema

    Scenario: Login com senha inválida
        Given que esteja na tela de login
        And quando eu adicionar minha matricula/email
        And quando eu adicionar minha Senha inválida
        When eu Clicar no botão login
        Then vou receber uma mensagem de erro, e nao vou entar no sistema

    Scenario:' Login com  campos da senha vazios'
        Given que eu esteja na tela de login
        And quando eu não coloco a matricula/email
        And  colocar a senha 
        When eu Clicar no Botão login
        Then vou receber uma menssagem de campo obrigatorio e nao vou entrar no sistema

    Scenario: 'Login com  campos Matricula/email vazios'
        Given que eu esteja na tela de login
        And quando eu adicionar minha matricula/email
        And quando eu não adicionar a senha
        When eu Clicar no Botão login
        Then vou receber uma menssagem de campo obrigatorio e nao vou entrar no sistema
