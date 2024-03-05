import { insert } from './psqlFunc/insert'; // Import your custom insert function
import express, { Request, Response } from 'express';
// const jwt = require('jsonwebtoken');
const cors = require('cors');
// const env = require('dotenv')




const app = express();
const port = 3000;
// const secretKey = env.process.SECRET


app.use(cors());
app.use(express.json());

app.post('/student', async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const studentData = await insert(req.body);
        // const token = jwt.sign({ id: studentData }, secretKey, { expiresIn: '1h' });
        res.status(201).json({ message: 'Student record created successfully', student: studentData });
    } catch (error) {
        // Handle any errors that occur during database operation
        console.error('Error creating student record:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
}
)
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
