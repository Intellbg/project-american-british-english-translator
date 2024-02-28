const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let translator = new Translator()

suite('Unit Tests', () => {
    suite('TO BRITISH', function () {
        test('1', function (done) {
            assert.equal(translator.translate("Mangoes are my favorite fruit.", 'american-to-british'), `Mangoes are my <span class=\"highlight\">favourite</span> fruit.`)
            done()
        });
        test('2', function (done) {
            assert.equal(translator.translate("I ate yogurt for breakfast.", 'american-to-british'), `I ate <span class="highlight">yoghurt</span> for breakfast.`)
            done()
        });
        test('3', function (done) {
            assert.equal(
                translator.translate(
                    "We had a party at my friend's condo.",
                    'american-to-british'),
                `We had a party at my friend\'s <span class="highlight">flat</span>.`)
            done()
        });
        test('4', function (done) {
            assert.equal(
                translator.translate(
                    "Can you toss this in the trashcan for me?",
                    'american-to-british'),
                `Can you toss this in the <span class="highlight">rubbish</span>can for me?`)
            done()
        });
        test('5', function (done) {
            assert.equal(
                translator.translate(
                    "The parking lot was full.",
                    'american-to-british'),
                `The <span class="highlight">car park</span> was full.`)
            done()
        });
        test('6', function (done) {
            assert.equal(
                translator.translate(
                    "Like a high tech Rube Goldberg machine.",
                    'american-to-british'),
                `Like a high tech Rube Goldberg machine.`
            )
            done()
        });
        test('7', function (done) {
            assert.equal(
                translator.translate(
                    "To play hooky means to skip class or work.",
                    'american-to-british'),
                `To <span class="highlight">bunk off</span> means to skip class or work.`
            )
            done()
        });
        test('8', function (done) {
            assert.equal(
                translator.translate(
                    "No Mr. Bond, I expect you to die.",
                    'american-to-british'),
                'No <span class="highlight">Mr</span> Bond, I expect you to die.'
            )
            done()
        });
        test('9', function (done) {
            assert.equal(
                translator.translate(
                    "Dr. Grosh will see you now.",
                    'american-to-british'),
                '<span class="highlight">Dr</span> Grosh will see you now.'
            )
            done()
        });
        test('10', function (done) {
            assert.equal(
                translator.translate(
                    "Lunch is at 12:15 today.",
                    'american-to-british'),
                'Lunch is at <span class="highlight">12.15</span> today.'
            )
            done()
        });
    })
    suite('TO American', function () {
        test('1', function (done) {
            assert.equal(
                translator.translate(
                    "We watched the footie match for a while.",
                    'british-to-american'),
                `We watched the <span class="highlight">soccer</span> match for a while.`)
            done()
        });
        test('2', function (done) {
            assert.equal(translator.translate(
                "paracetamol takes up to an hour to work.",
                'british-to-american'),
                `<span class="highlight">Tylenol</span> <span class="highlight">thank you</span>kes up to an hour to work.`)
            done()
        });
        test('3', function (done) {
            assert.equal(
                translator.translate(
                    "First, caramelise the onions.",
                    'british-to-american'),
                `First, <span class="highlight">caramelize</span> the onions.`)
            done()
        });
        test('4', function (done) {
            assert.equal(
                translator.translate(
                    "I spent the bank holiday at the funfair.",
                    'british-to-american'),
                `I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.`)
            done()
        });
        test('5', function (done) {
            assert.equal(
                translator.translate(
                    "I had a bicky then went to the chippy.",
                    'british-to-american'),
                `I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.`)
            done()
        });
        test('6', function (done) {
            assert.equal(
                translator.translate(
                    "I've just got bits and bobs in my bum bag.",
                    'british-to-american'),
                `I've just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.`
            )
            done()
        });
        test('7', function (done) {
            assert.equal(
                translator.translate(
                    "The car boot sale at Boxted Airfield was called off.",
                    'british-to-american'),
                `The <span class="highlight">swap meet</span> at Boxted Airfield was called off.`
            )
            done()
        });
        test('8', function (done) {
            assert.equal(
                translator.translate(
                    "Have you met Mr Kalyani?",
                    'british-to-american'),
                "Have you met <span class=\"highlight\">Mr.</span> Kalyani?"
            )
            done()
        });
        test('9', function (done) {
            assert.equal(
                translator.translate(
                    "Prof Joyner of King's College, London.",
                    'british-to-american'),
                '<span class="highlight">Prof.</span> Joyner of King\'s College, London.'
            )
            done()
        });
        test('10', function (done) {
            assert.equal(
                translator.translate(
                    "Tea time is usually around 4 or 4.30.",
                    'british-to-american'),
                'Tea time is usually around 4 or <span class="highlight">4:30</span>.'
            )
            done()
        });
    })
    suite('Highlight ', function () {
        test('1', function (done) {
            assert.include(
                translator.translate(
                    "We watched the footie match for a while.",
                    'british-to-american'),
                `<span class="highlight">soccer</span>`)
            done()
        });
        test('2', function (done) {
            assert.include(translator.translate(
                "paracetamol takes up to an hour to work.",
                'british-to-american'),
                `<span class="highlight">Tylenol</span>`)
            done()
        });
        test('3', function (done) {
            assert.include(translator.translate("Mangoes are my favorite fruit.", 'american-to-british'), `<span class=\"highlight\">favourite</span>`)
            done()
        });
        test('4', function (done) {
            assert.include(translator.translate("I ate yogurt for breakfast.", 'american-to-british'), `<span class="highlight">yoghurt</span>`)
            done()
        });

    });
});
