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
    
    Scenario:''  
