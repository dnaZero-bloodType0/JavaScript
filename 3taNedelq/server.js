const express = require('express');
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Статичен HTML файл за frontend
app.get('/', (req, res) => {
    res.send(`
        <html>
        <body>
            <h1>Convert YouTube Video to MP3</h1>
            <form action="/download" method="GET">
                <label for="url">YouTube Video URL:</label>
                <input type="text" id="url" name="url" required>
                <button type="submit">Convert to MP3</button>
            </form>
        </body>
        </html>
    `);
});

app.get('/download', async (req, res) => {
    const videoURL = req.query.url;

    if (!ytdl.validateURL(videoURL)) {
        return res.status(400).send('Invalid YouTube URL');
    }

    try {
        const videoInfo = await ytdl.getInfo(videoURL);
        const title = videoInfo.videoDetails.title.replace(/[^a-zA-Z0-9]/g, '_'); // Форматиране на името на файла
        const filePath = path.resolve(__dirname, `${title}.mp3`);

        res.setHeader('Content-Disposition', `attachment; filename="${title}.mp3"`);

        const stream = ytdl(videoURL, { quality: 'highestaudio' });
        ffmpeg(stream)
            .audioBitrate(128)
            .toFormat('mp3')
            .pipe(res)
            .on('finish', () => {
                console.log('Download completed');
            });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error processing your request');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
