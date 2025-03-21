const { defineConfig } = require('cypress'); // Keep this line
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  projectId: 'etoq7y',
  downloadsFolder: path.join(__dirname, 'files'),
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    experimentalMemoryManagement: false, // To manage memory usage more effectively, particularly in long test runs
    numTestsKeptInMemory: 0, // Keeps no test snapshots in memory if the value is 0
    setupNodeEvents(on, config) {
      // Implement node event listeners here
      on('task', {
        readFileMaybe(filename) {
          if (fs.existsSync(filename)) {
            return fs.readFileSync(filename, 'utf8');
          }
          return `File ${filename} does not exist.`;
        },
        deleteFile(filePath) {
          if (fs.existsSync(filePath)) {
            try {
              fs.unlinkSync(filePath);
              return `File ${filePath} deleted successfully.`;
            } catch (error) {
              return `Error deleting file: ${error.message}`;
            }
          }
          return `File ${filePath} does not exist.`;
        },
      });
    },
  },
});
