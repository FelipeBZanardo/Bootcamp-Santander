package TiposDados;

public class Main {
    public static void main(String[] args) {

        byte b1 = 10;
        byte b2 = 20;

        short s1 = 20500;
        //short s2 = 40000;     maior que 32767

        //int i1 = -10000000000;    menor que -2147483648
        int i2 = 20500;

        long l1 = 1000000000000l;
        long l2 = 2604050505505L;

        //float f1 = 4.5;
        float f2 = 10.08f;

        double d1 = 85.69;
        double d2 = 99.84d;

        char c1 = 'a';
        //char c2 = 'Ta';
        char c3 = '\u0057';

        String st1 = "Fulano";
        String st2 = "Cicrano";
        String st3 = "av 2255 19/07/2022";
        String st4 = "09/02/1991";                  //não utilizar datas como strings

        boolean bo1 = true;
        boolean bo2 = false;

        System.out.println(b1);
        System.out.println(b2);

        System.out.println(s1);

        System.out.println(i2);

        System.out.println(l1);
        System.out.println(l2);

        System.out.println(f2);

        System.out.println(d1);
        System.out.println(d2);

        System.out.println(c1);
        System.out.println(c3);

        System.out.println(st1);
        System.out.println(st2);
        System.out.println(st3);
        System.out.println(st4);

        System.out.println(bo1);
        System.out.println(bo2);

    }
}
