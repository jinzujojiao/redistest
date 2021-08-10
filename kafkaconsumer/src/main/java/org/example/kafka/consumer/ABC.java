package org.example.kafka.consumer;

public class ABC {

    public static void main(String[] args) {
        String s = "a|b|123";
        String[] arr = s.split("\\"+"|");
        for (String str : arr) {
            System.out.println(str);
        }
    }
}
