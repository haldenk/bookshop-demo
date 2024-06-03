document.addEventListener("DOMContentLoaded", function () {

  // function to display search results
  function displayResults(results, store) {
    const searchResults = document.getElementById("results");
    if (searchResults) {
      if (results.length) {
        let resultList = "";
        // Iterate and build result list elements
        for (const n in results) {
          const item = store[results[n].ref];
          resultList +=
            '<li><p><a href="' + item.url + '">' + item.title + "</a></p>";
          resultList += "<p>" + item.content.substring(0, 150) + "...</p></li>";
        }
        searchResults.innerHTML = resultList;
      } else {
        searchResults.innerHTML = "No results found.";
      }
    }
  }

  // Get the query parameter(s)
  const params = new URLSearchParams(window.location.search);
  const query = params.get("query");

  
  // console.log("Query:", query);

  // Perform a search if there is a query
  if (query) {
    // Retain the search input in the form when displaying results
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
      searchInput.setAttribute("value", query);
    }

    // Initialize the lunr index
    const idx = lunr(function () {
      this.ref("id");
      this.field("title", { boost: 15 });
      this.field("tags");
      this.field("content", { boost: 10 });

      //add each document to the index
      for (const key in window.store) {
        const doc = {
          id: key,
          title: window.store[key].title,
          tags: window.store[key].tags,
          content: window.store[key].content,
        };
        // console.log("Adding document to index:", doc);
        this.add(doc);
      }
    });

    
    // console.log("Search Index:", idx);

    // Perform the search
    const results = idx.search(query);

    
    // console.log("Search Results:", results);

    // display the results
    displayResults(results, window.store);
  }
});
