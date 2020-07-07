const fs = require('fs')
const prompt = require('prompt')

const template = fs.readFileSync('./youtube-link-template.html').toString()

prompt.start();

prompt.get(['youtubeUrl', 'shortLink'], function (err, result) {
    if (err) { return onErr(err); }
    const fileContent = template.replace('{{LINK_YOUTUBE}}', result.youtubeUrl)
    const filePath = `./yt/${result.shortLink}.html`

    fs.writeFileSync(filePath, fileContent)

    console.log(`File created in ${filePath}`)
});

function onErr(err) {
    console.log(err);
    return 1;
}