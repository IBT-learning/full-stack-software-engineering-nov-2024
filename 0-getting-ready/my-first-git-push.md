These are the written instructions for the recorded lesson titled "Pushing to the class repository"

1. Copy the url address from the big green button on the home page of the repository. Make sure "SSH" is selected. **NOTE**: This is _not_ the same as the browser URL.
1. In your terminal, navigate to the `ibt` folder you created during the command line lesson
1. `git clone` followed by the URL you copied
1. `cd` into the repository
1. `git status` to make sure you have successfully cloned and moved into the repository
1. `git checkout -b ` followed by your name IN ALL LOWERCASE, to create your personal branch
1. `mkdir code` to create a new folder called `code` in the root of the repository
1. `touch code/.gitkeep` to create the empty .gitkeep file inside the code folder
1. `git add .` to stage all changes for commit
1. `git commit -m "first commit"` to commit the change
1. `git push -u origin ` followed by your branch name
1. Go back to the repo home page and look for your branch!
