package br.com.dio;

import model.Gato;

public class PrimeiroPrograma {
    public static void main(String[] args) {
        /*int a=2;
        int b=3;
        System.out.println("Hello, world" + (a+b));*/

        Gato gato = new Gato();

        System.out.println(gato);

        Livro livro = new Livro("O problema dos 3 corpor", 300);
        System.out.println(livro);
    }
}

class Livro {
    private String nome;
    private Integer numPaginas;

    public Livro(String nome, Integer numPaginas) {
        this.nome = nome;
        this.numPaginas = numPaginas;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    @Override
    public String toString() {
        return "Livro{" +
                "nome='" + nome + '\'' +
                ", numPaginas=" + numPaginas +
                '}';
    }

    public Integer getNumPaginas() {
        return numPaginas;
    }

    public void setNumPaginas(Integer numPaginas) {
        this.numPaginas = numPaginas;
    }
}
