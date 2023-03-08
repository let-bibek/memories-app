import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRouter from './routes/posts.js';
const app = express();

app.use('/posts', postRouter);
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(cors());
const CONNECTION_URL = "mongodb+srv://let-bibek-database:let-bibek-database@cluster0.af7mzp6.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 8200;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, console.log(`Server running on port: ${PORT}`)))
    .catch((e) => console.log(e.message));

