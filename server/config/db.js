import mongoose from "mongoose";

const connectToMongo = async () => {
  try {
    const res = await mongoose.connect("mongodb+srv://saim:saim@cluster0.kacmsgj.mongodb.net/ExpensesTracker?retryWrites=true&w=majority");
    if (res) {
      console.log("connected successfully");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectToMongo;
