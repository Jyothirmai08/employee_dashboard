const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    ed_password: '',
    database: 'admin_project',
  });

  app.post('/signup', (req, res) => {
    const sql = "INSERT INTO ed_login (`ed_name`, `ed_mailid`, `ed_password`) VALUES (?)";
    const values = [
        req.body.ed_name,
        req.body.ed_mailid,
        req.body.ed_password
    ]
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })
  })

  app.post('/employee', (req, res) => {
    const sql = "SELECT * FROM ed_login WHERE `ed_mailid` = ? AND `ed_password` = ?";
    db.query(sql, [req.body.ed_mailid, req.body.ed_password], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        if(data.length > 0) {
          return res.json("Success");
        } else {
          return res.json("Fail");
        }
    })
  })

  app.get('/userDetails', async (req, res) => {
    try {
      const query = 'SELECT ed_name, ed_mailid FROM ed_login';
      const results = await executeQuery(query);
  
      res.json(results);
    } catch (error) {
      console.error('Error fetching user details:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  const executeQuery = (query) => {
    return new Promise((resolve, reject) => {
      db.query(query, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  };

  app.listen(8081, () => {
    console.log("listening");
  })



