const utils = require('./utils');

const statusList = ['normal', 'warning', 'error'];

function getAllStatus(length = 10) {
  const res = [];

  for (let i = 0; i < length; i++) {
    res.push({
      id: i + 1,
      status: utils.getRandomObjectOfArray(statusList),
    });
  }

  return {statusTable: res};
}

module.exports = getAllStatus;
