package OperadoresAritmeticos;

public class Main {
    public static void main(String[] args) {

        int k = 10;
        System.out.println(k);
        int i = ++k;
        System.out.println(i);
        System.out.println(k);
        int j = k--;
        System.out.println(j);
        System.out.println(k);

        int a = 10;
        int b = 20;
        int c = 30;
        int d = 40;
        int e = 50;

        int r1 = a+b;
        int r2 = c-a;
        int r3 = d*b;
        int r4 = e/a;
        int r5 = c%b;

        System.out.println(r1);
        System.out.println(r2);
        System.out.println(r3);
        System.out.println(r4);
        System.out.println(r5);

        int i1 = 1500;
        short j1 = 15;
        long l = 500L;
        int k1 = 35;
        float f = 3.5f;
        double d1= f;

        System.out.println(d1);

        i1 += 5;
        j1 -= 3;
        d1 /= 2.7d;
        l *= 3;
        k1 %= 2;

        System.out.println(i1);
        System.out.println(j1);
        System.out.println(d1);
        System.out.println(l);
        System.out.println(k1);

        i1 = k1 = j1;

        System.out.println(i1);
        System.out.println(k1);
        System.out.println(j1);

        int i2 = 10;
        int j2 = 20;
        int k2 = 30;

        int a1 = i2++ + --j2 * k2; //10 + 19 * 30 = 580

        System.out.println(a1);

        int b2 = k2 /--i2 % 3 + 1; //30 / 10 % 3 + 1 = 3 % 3 + 1 = 0 + 1 = 1

        System.out.println(b2);

        int c2 = 2;

        c2 *= i2 += 5;// c2 = 2 * (10 + 5) = 30

        System.out.println(c2);



    }
}
