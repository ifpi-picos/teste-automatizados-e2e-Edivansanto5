Feature: Cadastro de Usuario

    Eu como aluno
    preciso me cadastrar no Sistema
    para ter acesso ao Sistema

   Scenario:'Campos Obrigatórios' 
        Given que eu esteja na tela de Cadastro
        And adicionando Matricula válidos
        And adicionando Nome 
        And adicionando email válidos
        And adicionando foto 
        And adicionando nome do Curso
        And adicionando a senha 
        When eu clicar no Botão Salvar
        Then vai ser criado um cadastro, e vai mostrar uma menssagem de usuario cadastrado com sucesso
    
    
