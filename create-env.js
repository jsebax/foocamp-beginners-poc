const fs = require('fs');

fs.copyFile('.env.example', '.env', (err) => {
  if (err) throw err;
  console.log('.env was created successfully');
});
