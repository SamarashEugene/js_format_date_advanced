'use strict';

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */

function formatDate(date, fromFormat, toFormat) {
  const dateSeparated = date.split(fromFormat[3]);
  const oldForm = {
    [fromFormat[0]]: dateSeparated[0],
    [fromFormat[1]]: dateSeparated[1],
    [fromFormat[2]]: dateSeparated[2],
  };

  const newForm = {};
  let century = '';

  for (let i = 0; i < toFormat.length - 1; i++) {
    if (fromFormat[i] === 'YY' && toFormat.includes('YYYY')) {
      century = dateSeparated[i] < 30 ? 20 : 19;
      newForm[toFormat[i]] = century + dateSeparated[i];
    } else if (fromFormat[i] === 'YYYY' && toFormat.includes('YY')) {
      newForm[toFormat[i]] = dateSeparated[i].slice(-2);
    } else {
      newForm[toFormat[i]] = oldForm[toFormat[i]];
    }
  }

  const newDateArr = [];

  for (const i in newForm) {
    newDateArr.push(newForm[i]);
  }

  return newDateArr.join(toFormat[3]);
}

module.exports = formatDate;
