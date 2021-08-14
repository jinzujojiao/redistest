package org.example.kafka.producer;

public class TestInt {
    public static void main(String[] args) {
        int a = -836031701;
        long b = Integer.toUnsignedLong(a);
        System.out.println(b);
        int c = (int)(b % 3);
        System.out.println(c);
    }

    public String hello() {
        return "hello";
    }
}
