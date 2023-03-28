Feature: Cadastro de Usuario

    Eu como aluno
    preciso me cadastrar no Sistema
    para ter acesso ao Sistema

    Scenario:'Campos Obrigatórios' 
        Given que eu esteja na tela de Cadastro
        And não adicionando Matricula 
        And não adicionando Nome 
        And não adicionando email 
        And não adicionando foto 
        And não adicionando nome do Curso
        And não adicionando a senha 
        When eu clicar no Botão Salvar
        Then vou receber uns avisos de campos Obrigatórios, e nao vai ser criado o Usuario
    
    Scenario:'Matrícula já existe'
        Given que eu esteja na tela de Cadastro
        And ao adicionar uma  Matricula que ja esteja cadastrado no sistema
        And adicionando Nome 
        And adicionando email válidos 
        And adicionando foto 
        And adicionando nome do Curso
        And adicionando a senha 
        When eu clicar no Botão Salvar
        Then vou receber uma menssagem que esse Matricula ja existe, e não vai ser criado o Usuario
    
    Scenario:' E-mail já existente'
        Given que eu esteja na tela de Cadastro
        And ao adicionando Matricula
        And adicionando Nome 
        And adicionando email que ja estar cadastrado no sistema
        And adicionando foto 
        And adicionando nome do Curso
        And adicionando a senha 
        When eu clicar no Botão Salvar
        Then vou receber uma menssagem que esse email ja existe, e não vai ser criado o Usuario

        
