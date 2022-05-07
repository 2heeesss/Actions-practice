const core = require('@actions/core');
const github = require('@actions/github');

try {
  const repo = core.getInput('repo');

  core.setOutput('wiki', '#helloword');
  console.log(repo);
  console.log(JSON.stringify(github, null, '\t'));
} catch (error) {
  core.setFailed('error.message');
}
