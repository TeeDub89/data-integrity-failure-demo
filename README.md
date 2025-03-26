Use vscode's liveserver extension to run the app

# CHALLENGE

1. Fork my repo https://github.com/Crater-exe/data-integrity-failure-demo
2. Create a new file called format-note.js in the codebase
3. Add a function to this new file that can be used before saving a note to format it a certain way (creative freedom but if you have no ideas simply set the note to all uppercase letters)
4. Add a script tag to the header of the html file with a src of the new format-note.js
5. Research how you can generate a SRI for a local file (HINT: I used a git bash command)
6. Generate a hash for format-note.js and add the appropriate attributes to the script tag in index.html
7. Test to see if it works by changing your function in format-note.js (add an alert before you format) and the file will no longer load.
8. Commit your changes
9. Go to your forked repo and add branch protection rules so that you must do a pull request with one reviewer before you can merge to the default branch.

# Deliverable
I will be looking for a new script tag for your newly created js file with an SRI, and your forked repo with the stated branch protection rules.

I will be marking the challenge in person before Reese's lesson on April 8th. If you can not make it to the class send me a message on teams and we can work something out.