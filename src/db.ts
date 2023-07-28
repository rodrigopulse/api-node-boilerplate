import mongoose from "mongoose";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_CONNECT || "");
    console.log("[MongoDB] connected");
  } catch (error) {
    console.error("[MongoDB] Error connecting: ", error);
    process.exit(1);
  }
}
