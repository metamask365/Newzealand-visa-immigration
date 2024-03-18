// pages/api/getVisaData.js

export default async function handler(req, res) {
    const { passportNumber } = req.query;
  
    try {
      // Replace the following logic with your actual API call
      const data = { example: 'response' };
      res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  