# jogoDamas

Jogo de damas utilizando HTML 5 canvas e Javascript.

# Tabuleiro

O tabuleiro é criado utilizando um array multidimensional onde cada casa é um objeto. Esse objeto guarda informações sobre si próprio como: posição dentro do array se utilizando de linhas e coluna, posição dentro do canvas (eixo x e y, além do tamanho), cor, e também se contém uma peça sobre ele.

Segue exemplo de como é o tabuleiro mostrando as posições do array:

[0,0] [1,0] [2,0] [3,0] [4,0] [5,0] [6,0] [7,0]

[0,1] [1,1] [2,1] [3,1] [4,1] [5,1] [6,1] [7,1]

[0,2] [1,2] [2,2] [3,2] [4,2] [5,2] [6,2] [7,2]

[0,3] [1,3] [2,3] [3,3] [4,3] [5,3] [6,3] [7,3]

[0,4] [1,4] [2,4] [3,4] [4,4] [5,4] [6,4] [7,4]

[0,5] [1,5] [2,5] [3,5] [4,5] [5,5] [6,5] [7,5]

[0,6] [1,6] [2,6] [3,6] [4,6] [5,6] [6,6] [7,6]

[0,7] [1,7] [2,7] [3,7] [4,7] [5,7] [6,7] [7,7]


# Peças

Cada peça também é um objeto que ficam armazenadas dentro de um array, onde cada objeto guarda as informações sobre si como: posição dentro do canvas (eixo x, y e o raio do circulo), qual casa a peça se encontra, cor da peça, se a peça está selecionada e se ela é uma dama.

# Jogada

Existe um objeto que é chamado de "jogada" que é preenchido de acordo com as informações das jogada que está sendo feita e quando a jogada está com todos os passos completos, valida se aquela jogada pode ser feita ou não.

Caso a jogada não possa ser feita, é mostrada uma mensagem na tela e aguarda selecionar uma outra opção de jogada para validar novamente.
