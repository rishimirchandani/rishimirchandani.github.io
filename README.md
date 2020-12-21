# rishimirchandani.github.io

## Setup (run once)

- Install Node.js and npm (https://nodejs.org/en/)
- Confirm installation by running `npm -v` in Terminal
- Clone this repository. Open Terminal and run `cd ~/Desktop; git clone https://github.com/rishimirchandani/rishimirchandani.github.io.git; cd rishimirchandani.github.io; git checkout master; npm install`

## To edit

- To begin an editing session, open Terminal and run `cd ~/Desktop/rishimirchandani.github.io; npm start`. This should open up a local version of the webpage in Chrome.
- Many content edits can be made by just editing `src/data.json` in a text editor. For example, you can change the bio or add another video. You can see the changes in the webpage as you update the file.
- When you are done editing, type Ctrl-C in the Terminal window.
- To publish the changes, run the following:
```
git commit -am "description of updates"
git push origin master
npm run deploy
```
- The changes should then appear live on the site.
