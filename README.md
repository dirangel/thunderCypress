# Thunder - Agilizei

Scripr de testes automatizado em cypress contemplando os fluxos de Login e Cadastro de um e-commerce.

## Instalando as dependências e execução

Instalar o pacote Node js (https://nodejs.org/en/)

Na raiz do projeto, execute o comando abaixo para instalar o pacote e suas dependencias

```javascript
npm install
```

Apos instalado siga o reteiro abaixo:

Execute o comando abaixo em modo headless ou em modo gráfico (Caso queira ver a execução em tempo real):

```javascript
npm run cy:run
ou
npm run cy:open
```

Execute o comando para mesclar as saídas das spec em um único arquivo:

```javascript
npm run report:merge
```

Execute o comando para gerar o relátorio em html dos resultados mergeados:

```javascript
npm run report:mocha
```

Abra a pasta mochawesome-report e identifique o arquivo indes.html, clique com o botão direiro e escolha a opção
"reveal in file explorer" e posteriormente abra o navegador pra visualizar o relatório.

Por fim limpe o histório de execuções.

```javascript
npm run report:clean
```

Para mais dicas me sigam no linkedin [https://www.linkedin.com/in/diego-olair-rangel-035aa2110/]
