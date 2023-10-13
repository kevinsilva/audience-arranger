# Tasks

## Part 1

~~Create a grid~~

~~Fill with names~~

- Drag so that the names occupy other blocks
- If the other block is also filles, switch places

## Part 2

- list of names from a file
- specific format
- app imports file - either by dragging file or import button

## Part 3

- export updated list to file

### TODO

Change to dataset
https://w3schools.com/html/html5_draganddrop.asp

Change to TXT

##### Introdução

Neste projeto de teste, criamos uma ferramenta interativa para ajudar gestores de eventos a arranjar/ordenar lugares VIP.

Há as seguintes secções na página.

- Área de carregamento de ficheiros
- Área de ordenação VIP
- Botão de ecrã inteiro
- Exportar

##### Grid VIP

A grelha tem 8x4 caixas de nomes, 8 colunas, 4 linhas. Como ferramenta para o staff utilizar, as cores e os fundos não são os nossos requisitos. Mas, por favor, desenhe as lacunas e margens legíveis, e com um equilíbrio correto.

A área das caixas de nomes VIP não deve conter quaisquer barras de scroll verticais ou horizontais.

##### VIP Swapping

Os nomes dos VIPs são exibidos numa visualização em grelha na área VIP. O utilizador pode organizar a sua posição trocando quaisquer dois deles por arrastar e largar.

Por exemplo, se a ordem atual for A, B, C. Quando o utilizador arrasta A e cai em C, a ordem atualiza e passa a ser C, B, A.

Há 3 maneiras de carregar uma lista de VIPs:

- Carregamento da cache armazenada desde a última sessão.
- Carregamento de um sample da grelha VIP.
- Carregamento de ficheiros externos a partir da dropzone.

1. Carregamento da cache armazenada desde a última sessão

A ferramenta deve guardar uma cópia como cache localmente no browser que é persistente mesmo quando o separador do browser é fechado. A gravação acontece sempre que é feita uma alteração na grelha.

Quando a página web é carregada, a ferramenta deve verificar se existe uma cache armazenada localmente, e carregar a lista em cache no arranque.

2. Carregar um sample da grelha VIP

Ao clicar num botão "carregar sample", o utilizador pode carregar um sample da grelha VIP.

Os nomes VIP são pré-definidos e não são necessárias alterações dinâmicas.

Os nomes pré-definidos são:

- Andrew
- Robert
- Steve

Ao construir a grelha, os nomes da lista são colocados de cima para a esquerda na grelha, da esquerda para a direita, da esquerda para a direita, depois de cima para baixo.

Por exemplo:

3- Carregamento de ficheiros externos da dropzone

O utilizador é capaz de arrastar um ficheiro externo contendo uma lista de nomes de VIPs para dentro da ferramenta, deixando cair na área de queda do ficheiro.

Quando o ficheiro é arrastado por cima da área de largada, é exibido um indicador e uma linha de dica de texto para que o utilizador saiba que esta é a área para largar o ficheiro de texto simples.

A ferramenta deve construir a grelha VIP assim que o ficheiro for largado.

##### Importar formato de texto

O ficheiro externo a carregar segue o mesmo formato que é exportado a partir desta ferramenta. O formato é:

A primeira linha é o título, com `# Lista VIP`.
A segunda linha está vazia.
A partir da terceira linha e do resto, cada linha é o nome de VIP, com um hífen e espaço à sua frente.

Todos os nomes VIP carregados devem ser arrastáveis ​​e trocáveis ​​pela mesma regra acima.

##### Exportação da lista VIP

A fim de permitir um melhor foco na lista VIP, e para que o utilizador apresente a lista VIP em reuniões, precisamos de uma funcionalidade

A lista final pode ser visualizada em texto simples, em formato markdown.

A primeira linha é o título, com `# Lista VIP`.
A segunda linha está vazia.
A partir da terceira linha e do resto,
cada linha é o nome de VIP, com um hífen e espaço à sua frente.

Se houver caixas vazias entre VIPs, elas são exportadas como hífen sem nome.

Exemplo:

# Lista VIP

- Nome 1
- Nome 2
-
- Nome 3
- Nome 4

A lista VIP em texto simples é exibida numa área de texto.

Há duas maneiras de exportar estes dados: copiar paro clipboard ou guardar em disco.

##### Cópia para o Clipboard

Quando o utilizador clica no botão copy-to-clipboard, os nomes VIP da grelha são copiados para a área de transferência. O texto copiado tem o mesmo formato da lista VIP exportada.

##### Descarregar como um ficheiro de texto simples

Quando o utilizador clica no botão de descarga, o navegador da web ativa a descarga de um ficheiro de texto simples com a lista de nomes como o conteúdo. O nome do ficheiro deve ser "vip-list.txt".
