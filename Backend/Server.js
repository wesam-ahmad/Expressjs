const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8000;

// Middleware
app.use(cors());
app.use(express.json()); 


app.get('/api/get-message', (req, res) => {
    res.json({ message: "Hello from Express backend!" });
});


app.post('/api/post-message', (req, res) => {
    const { userMessage } = req.body;

    if (!userMessage) {
        return res.status(400).json({ error: "Message is required" });
    }

    res.json({ response: `Server received: ${userMessage}` });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
