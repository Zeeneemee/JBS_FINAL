import { insert } from './psqlFunc/insert'; // Import your custom insert function
import express, { Request, Response } from 'express';
import { Mailer } from './email';
const cors = require('cors');


const app = express();
const port = 4000;


app.use(cors());
app.use(express.json());

app.post('/', async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const {email, fullname, position, companyName, internship, entryLevel} = req.body;
        const studentData = await insert(req.body);
        await Mailer(email,fullname, position, companyName, internship, entryLevel);
        res.status(201).json({ message: 'Student record created successfully',studentData});
    } catch (error) {
        // Handle any errors that occur during database operation
        console.error('Error creating student record:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
})


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
