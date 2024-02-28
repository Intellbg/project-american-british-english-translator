const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

    replaceWord(text, format) {
        if (format == 'american-to-british') {
            const onlyAmericanWords = new RegExp(Object.keys(americanOnly).join('|'), 'g');
            const americanToBritishWords = new RegExp(Object.keys(americanToBritishSpelling).join('|'), 'g');
            text = text.replace(onlyAmericanWords, match => `<span class="highlight">` + americanOnly[match] + `</span>`);
            text = text.replace(americanToBritishWords, match => `<span class="highlight">` + americanToBritishSpelling[match] + `</span>`);
            return text
        }
        const onlyBritishWords = new RegExp(Object.keys(britishOnly).join('|'), 'g');
        text = text.replace(onlyBritishWords, match => `<span class="highlight">` + britishOnly[match] + `</span>`);
        let britishToamericanSpelling = {}
        for (const key in americanToBritishSpelling) {
            britishToamericanSpelling[americanToBritishSpelling[key]] = key;
        }
        const britishToamericanWords = new RegExp(Object.keys(britishToamericanSpelling).join('|'), 'g');
        text = text.replace(britishToamericanWords, match => `<span class="highlight">` + britishToamericanSpelling[match] + `</span>`);
        return text
    }


    translateTime(text, format) {
        let replacedText
        if (format == 'american-to-british') {
            let pattern = /\b(\d{1,2})\:(\d{1,2})\b/g;
            replacedText = text.replace(pattern, `<span class="highlight">$1.$2</span>`);
        } else {
            let pattern = /\b(\d{1,2})\.(\d{1,2})\b/g;
            replacedText = text.replace(pattern, `<span class="highlight">$1:$2</span>`);
        }
        return replacedText
    }


    translateTitles(text, format) {
        if (format === 'american-to-british') {
            const regexPattern = new RegExp(Object.keys(americanToBritishTitles).join('|'), 'g');
            return text.replace(regexPattern, match => `<span class="highlight">` + americanToBritishTitles[match] + `</span>`);
        } else {
            let reverse = {}
            for (const key in americanToBritishTitles) {
                reverse[americanToBritishTitles[key]] = key;
            }
            const regexPattern = new RegExp(Object.keys(reverse).join('|'), 'g');
            return text.replace(regexPattern, match => `<span class="highlight">` + reverse[match] + `</span>`);
        }
    }


    translate(text, format) {
        text = this.translateTitles(text, format)
        text = this.translateTime(text, format)
        text = this.replaceWord(text, format)
        return text

    }
}

module.exports = Translator;