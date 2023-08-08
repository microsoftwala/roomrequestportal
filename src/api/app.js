const fs = require('fs');
const xlsx = require('xlsx');

const express = require('express');
const app = express();

app.get('/getPassword', function(req, res) {
    const email = req.query.email;
    if (!email) {
      res.status(400).json({ error: 'Email is required in the query parameters.' });
      return;
    }
    
    filePath = 'creds.xlsx';

    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const users = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
    const user = users.find((user) => user.Email === email);
  
    if (user) {
      res.json({ email: user.Email, password: user.Password });
    } else {
      res.status(404).json({ error: 'User not found.' });
    }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});