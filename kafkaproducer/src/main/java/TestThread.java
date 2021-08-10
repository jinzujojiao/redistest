public class TestThread {
    public static void main(String[] args) {
        long i = 0;
        try {
            for (;;) {
                Thread t = new Thread(new Runnable() {
                    @Override
                    public void run() {
                        try {
                            Thread.sleep(30000);
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                    }
                });
                t.start();
                i++;
            }
        } catch (Throwable t) {
            t.printStackTrace();
            System.out.println("count: "+i);
        }
    }
}
