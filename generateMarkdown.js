// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  // Map license names to their corresponding badge URLs
  const licenseBadges = {
    MIT:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'GNU GPLv3': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    ISC:'[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    Unlicensed:'[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
    Other: '', 
  };

  return licenseBadges[license] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  // Map license names to their corresponding license URLs
  const licenseLinks = {
    MIT: 'https://opensource.org/licenses/MIT',
    'GNU GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
    ISC: 'https://opensource.org/licenses/ISC',
    Unlicensed: 'http://unlicense.org/',
    Other: '',
  };

  return licenseLinks[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);

  if (licenseBadge || licenseLink) {
    return `## License\n\n${licenseBadge}\n\nThis project is licensed under the terms of the [${license} License](${licenseLink}).`;
  }

  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);

  // Added GitHub profile link to the Questions section with the provided GitHub username
  const githubLink = data.githubUsername ? `- [GitHub Profile](https://github.com/${data.githubUsername})\n` : '';

  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${licenseSection ? '- [License](#license)\n' : ''}
- [Contributing](#contributing)
- [Tests](#tests)
${githubLink ? '- [Questions](#questions)\n' : ''}

## Installation
${data.installation}

## Usage
${data.usage}

${licenseSection}

## Contributing
${data.contributing}

## Tests
${data.tests}

${githubLink ? '## Questions\n For questions or support, please contact [GitHub Profile](https://github.com/' + data.githubUsername + ').\n' : ''}
`;
}

module.exports = generateMarkdown;
