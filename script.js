const axios = require("axios");
const { apiToken, baseUrl } = require("./config");

const headers = {
  Authorization: `Bearer ${apiToken}`,
};

// Endpoint for retrieving issue data
const issueKey = "SUMS-222";
const url = `${baseUrl}/rest/api/latest/issue/${issueKey}`;

// Make GET request to retrieve issue data
axios
  .get(url, { headers })
  .then((response) => {
    // Check if request was successful
    if (response.status === 200) {
      const issueData = response.data;
      console.log(issueData.fields);
    } else {
      console.error(
        `Failed to retrieve issue data. Status code: ${response.status}`
      );
    }
  })
  .catch((error) => {
    console.error("Error occurred while fetching issue data:", error);
  });



