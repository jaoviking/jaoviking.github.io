const fs = require('fs')
const prompt = require('prompt')

const template = fs.readFileSync('./youtube-link-template.html').toString()


function replaceAll(string, find, replace) {
    let result = string
    
    while(result.indexOf(find) >= 0) {
        result = result.replace(find, replace)
    }

    return result
}

prompt.start();

prompt.get(['youtubeUrl', 'shortLink', 'title'], function (err, result) {
    if (err) { return onErr(err); }
    let fileContent = template.replace('{{LINK_YOUTUBE}}', result.youtubeUrl)
    fileContent = replaceAll(fileContent, '{{TITLE}}', result.title)
    
    const filePath = `./yt/${result.shortLink}.html`

    fs.writeFileSync(filePath, fileContent)

    console.log(`File created in ${filePath}`)
});

function onErr(err) {
    console.log(err);
    return 1;
}