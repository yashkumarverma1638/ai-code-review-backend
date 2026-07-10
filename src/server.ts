import { app } from "./app";

const start = async () => {
  try {
    await app.listen({
      port: 3000,
    });

    console.log("Server Started");
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start();
