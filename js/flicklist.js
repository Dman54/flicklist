var api = {
  root: "https://api.themoviedb.org/3",
  token: "77bb08a67d2561ac1435ae788dba30d7" // https://api.themoviedb.org/3/movie/550?api_key=77bb08a67d2561ac1435ae788dba30d7
};

/**https://api.themoviedb.org/3/discover/movie?api_key=77bb08a67d2561ac1435ae788dba30d7
 * Makes an AJAX request to themoviedb.org, asking for some movies
 * if successful, prints the results to the console
 */
function testTheAPI() {
  $.ajax({
    url: api.root + "/discover/movie",
    data: {
      api_key: api.token
    },
    success: function(response) {
      console.log("We got a response from The Movie DB!");
      console.log(response);
    }
  });
}

console.log("The script loaded!");
testTheAPI();
