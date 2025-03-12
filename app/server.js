import { createApp } from "./app.js";

const PORT = process.env.PORT || 4000;

/**
 * Starts the Express server on the specified port.
 *
 * @async
 * @function startServer
 * @returns {Promise<void>} Resolves when the server starts listening.
 */
async function startServer() {
  try {
    const app = await createApp();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
}

// Start the server
startServer();
