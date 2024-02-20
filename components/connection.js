import { connectToDatabase } from "./db";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const db = await connectToDatabase();
    const collection = db.collection('formData');

    try {
      const result = await collection.insertOne({ name, email, message });
      console.log('Form data inserted:', result.ops[0]);
      res.status(201).json({ message: 'Form data submitted successfully' });
    } catch (error) {
      console.error('Error submitting form data:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
