package Casting;

public class Main {
    public static void main(String[] args) {

        byte b1;
        short s1 = 1000;
        b1 = (byte) s1;

        long l1;
        int i1 = 10;
        l1 = i1;
        //i1 = (int) l1;

        int i2;
        long l2 = 10000000000000000L;
        i2 = (int) l2;
       // l2 = i2;

        int i3;
        long l3 = 10000L;
        i3 = (int) l3;
        //l3 = i3;

        double d1;
        float f1 = 10.5f;
        d1 = f1;
        f1 = (float) d1;

        float f2;
        float f3;
        double d2 = 10000.30d;
        f2 = (float) d2;
        double d3 = 10000.0000000000000000000000000000d;
        f3 = (float) d3;

        int i4;
        float f4 = 11.500f;
        i4 = (int) f4;
    }
}
