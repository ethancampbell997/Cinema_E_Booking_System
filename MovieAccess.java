public class MovieAccess {
    private String title;
    private boolean status; /* true = currently running, false = coming soon */
    private String link;

    public boolean exists(String title) {
        /* if in database, return true
         * else, return false
         */
    }
    /*  public type getStatus(String title) */

    public String getLink(String title) {
        /* if exists(title)
         *      return link
         * else
         *      return "movie doesn't exist"
         */
    }
}
