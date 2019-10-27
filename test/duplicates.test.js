const should = require('should');
const uniq = require('lodash.uniq');
const uniqBy = require('lodash.uniqby');

const {translations = [], quotes = []} = require('../geeksay');


describe('Translations List', function () {

    it('should include each key only once (unique keys)', function () {

        const isUniq = uniqBy(translations, 'in').length === translations.length;
        should.equal(isUniq, true, 'A duplicate key was found in the translations list');
    });
});

describe('Quotes List', function () {

    it('should include each key only once (unique keys)', function () {

        const isUniq = uniq(quotes).length === quotes.length;
        should.equal(isUniq, true, 'A duplicate key was found in the quotes list');
    });
});
