const child_process = require('child_process');

[
    "ls/l1",
    "ls/l2",
    "ls/l3",
    "as/a1",
    "as/a2",
].forEach((e) => {
    console.log(`Running ${e}`)
    child_process.execSync("npm install", {
        cwd: e,
        stdio: 'inherit',
    })
    child_process.execSync("npm run build", {
        cwd: e,
        stdio: 'inherit',
    })
    console.log(`Done ${e}`)
})