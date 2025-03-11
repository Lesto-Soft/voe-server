import { createApp } from "./app.js";

const PORT = process.env.PORT || 4000;

createApp().then((app) => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
