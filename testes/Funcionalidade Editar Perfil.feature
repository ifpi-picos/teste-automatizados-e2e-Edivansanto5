Feature: Editar Perfil

    Eu como usuario já cadastrado
    preciso ter acesso ao Perfil
    Para poder editar minhas informações Pessoais

    Scenario:'Editar Matrícula'
        Given que eu esteja na Tela de Editar Perfil
        And queira alterar Minha Matricula
        When eu alterar a matricula
        And Clicar no Botão Salvar 
        Then vai ser modificado a matricula, e vou receber uma menssagem de sucesso
    
    Scenario:'Editar Nome de Curso'
        Given que eu esteja na Tela de Editar Perfil
        And queira alterar O Nome do Curso
        When eu alterar o nome do curso
        And Clicar no Botão Salvar 
        Then vai ser modificado o Nome do Curso, e vou receber uma menssagem de sucesso
    
    Scenario:'Editar foto de Perfil'
        Given que eu esteja na Tela de Editar Perfil
        And queira alterar a Imagem de perfil
        When eu selecionar a imagem desejada
        And Clicar no Botão Salvar 
        Then a Imagem de perfil vai ser atualizada, e vou receber uma menssagem de sucesso
    