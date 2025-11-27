const core = require('@actions/core');

try {
  // 1. Get the input defined in action.yml
  const projectName = core.getInput('project-name');
  
  // 2. Perform the custom logic (formatting)
  const currentDate = new Date().toISOString().slice(0, 10);
  const formattedMessage = `Project: ${projectName.toUpperCase()} | Generated on: ${currentDate}`;

  // 3. Set the output defined in action.yml
  core.setOutput('formatted-message', formattedMessage);
  
} catch (error) {
  core.setFailed(error.message);
}
