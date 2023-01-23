// function to generate markdown for README
function generateMarkdown(data) {
  
    var license = "";
    var badge = "";
  
    switch (data.license) {
      case 1:
        license = "Apache Lincense 2.0";
        badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        break;
      case 2:
        license = "GNU GPL 3.0";
        badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
      case 3:
         license = "MIT License";
         badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        break;
    }
  
    return `# ${data.title}
    
    ${badge}
    
    ## Description
     ${data.description}
  
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    
  
    ## Installation
    ${data.installation}
  
    ## Usage
    ${data.usage}
  
    ## License
    Licensed under the ${license}
  
    ## Contributing
    ${data.contributing}
  
    ## Tests
    ${data.tests}
  
    ## Questions
    GitHub repository link: [${data.githubrepo}](${data.githubrepo}) 
    For any questions please email [${data.email}](mailto:${data.email})
    `;
  }
  
  module.exports = generateMarkdown;
  