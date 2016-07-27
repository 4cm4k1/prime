# API Lecture Notes
This app requires you have installed and can run a local Node server.

## Installing Homebrew and Node.js
1. [Install Homebrew](http://brew.sh/). This will be done on the command line (Terminal)
2. Once Homebrew is installed, run the command: brew install node
3. Navigate to your project directory.
4. Run the command: npm install.
    4. This will install all of the required packages our application requires.
    4. You should see a new directory called 'node_modules' in your project now.

## Running the Server
In order for our app to run and serve the files we need, you'll need to run the server.

1. From the project directory, use the command: npm start
    1. You should see a message on the command line: 'Listening on port: 5000'
2. Go to http://localhost:5000 in your browser to see the index.html file in action

**NOTE Do not close this Terminal window as it is actively running the Node server**
If you need to issue any more commands, open another Terminal window (or tab)

## Making Changes
Make changes in the /public/scripts, /pubic/styles, and public/views folders. In order to see the changes, you need to restart the server.

1. In the Terminal window that is running the server, hit the keys Control + C (to Cancel). You will see: '^C'
2. Once changes are made, start the server again with: npm start