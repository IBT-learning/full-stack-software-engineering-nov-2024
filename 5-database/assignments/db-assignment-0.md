# Before we begin...

We'll need some data to work with! Let's all collaborate on building a recipe index. In this folder you will find a file called `recipes.json` with a few recipes in it. I want you to add your own!

> You can do this assignment now, even if you are not caught up on other assignments!

## First, stash your work

If you don't have any uncommitted changes right now, you can skip this step. You can confirm this by running `git status` and you will see the message `Your branch is up to date`.

If you do have uncommited changes, that's okay! You can stash them and retrieve them later. Learn more about [git stash](https://www.atlassian.com/git/tutorials/saving-changes/git-stash) here. Just run the command `git stash` and you should see your uncommitted changes disappear. Make note of which branch you're on.

## Check out the main branch

1. `git checkout main`
1. `git reset --hard main`
   - This will help if you've accidentally made commits to your `main` branch at any point
1. Make a new branch called `<your name>-recipe` (replace your-name with your name!)
1. Find the file at `5-database/assignments/recipes.json`.
1. Open the file and add a recipe to it. You will NOT be copying this file into your code folder, you will change it right here where it is!

> Remember your JSON syntax! Double quotes only, and no trailing commas.

When you are done, open a new pull request to add your recipe to our shared json file. **Important note:** For this one, you will be merging into `main`. Instead of changing the base branch to your personal branch, leave it as `main`.

## Get your stashed work back!

If you stashed work earlier, it's time to bring it back.

1. Navigate to the branch you were working on at the time that you stashed.
1. `git stash pop`
1. Confirm that this restores the changes from earlier.
   - If you stashed multiple times, you may have multiple stashes to apply, you can confirm this with `git stash list`. See the link above for more information.
