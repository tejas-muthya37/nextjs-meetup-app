import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://tejas-muthya37:Alphav*456@cluster0.fvmwd.mongodb.net/?retryWrites=true&w=majority"
    );

    const db = client.db("meetups");

    const meetupsCollection = db.collection("meetups");

    await meetupsCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: "Meetup inserted!", data });
  }
}

export default handler;
