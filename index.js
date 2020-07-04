console.log(`Before`);

// Callback
// getUser(1, getRepositories);

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
// three states {Pendeing, Resolved , Rejected}
// getUser(1)
//   .then((user) => getRepos(user.githubUserName))
//   .then((repos) => getCommits(repos[0]))
//   .then((commits) => console.log(commits))
//   .catch((err) => console.log('Error', err.message));

// Async/await
async function showCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepos(user.githubUserName);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } catch (err) {
    console.log('Error', err.message);
  }
}
showCommits();

console.log(`After`);

function getUser(id) {
  // Example of a none-blocking-function
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Reading user from DB...`);
      resolve({ id: id, githubUserName: 'MuhannedNoman' });
    }, 2000);
  });
}

function getRepos(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Retreving repos for user ${userName}...`);
      //   resolve(['repo1', 'repo2', ' repo3']);
      reject(new Error('User does not have any repos'));
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Retreving commits of ${repo}...`);
      resolve(['saha1', 'sha2', ' sha3']);
    }, 2000);
  });
}
