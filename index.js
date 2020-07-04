console.log(`Before`);

// Callback
getUser(1, getRepositories);

function displayCommits(commits) {
  console.log(commits);
}

function gitCommits(repos) {
  getCommits(repos[1], displayCommits);
}

function getRepositories(user) {
  getRepos(user.githubUserName, gitCommits);
}

// Promises

// Async/await

console.log(`After`);

function getUser(id, callback) {
  // Example of a none-blocking-function
  setTimeout(() => {
    console.log(`Reading user from DB...`);
    callback({ id: id, githubUserName: 'MuhannedNoman' });
  }, 2000);
}

function getRepos(userName, callback) {
  setTimeout(() => {
    console.log(`Retreving repos...`);
    callback(['repo1', 'repo2', ' repo3']);
  }, 2000);
}

function getCommits(repo, callback) {
  setTimeout(() => {
    console.log(`Retreving commits of ${repo}...`);
    callback(['saha1', 'sha2', ' sha3']);
  }, 2000);
}
