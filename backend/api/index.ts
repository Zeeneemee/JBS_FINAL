import { insert } from './psqlFunc/insert'; // Import your custom insert function
import express, { Request, Response } from 'express';
const cors = require('cors');


const app = express();
const port = 4000;


app.use(cors());
app.use(express.json());

app.post('/', async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const studentData = await insert(req.body);
        res.status(201).json({ message: 'Student record created successfully', student: studentData });
    } catch (error) {
        // Handle any errors that occur during database operation
        console.error('Error creating student record:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});