const helpers = {
  maps: function (array, key) {
    let res = {};
    for (let i = 0; i < array.length; i++) {
      res[array[i][key]] = array[i];
    }
    return res;
  },

  getValue: function (array, key) {
    const res = [];

    array.forEach((item) => {
      res.push(item[key]);
    });
    return res;
  },
  getArr: function (obj) {
    let arr = Object.values(obj);
    return arr;
  },
  getSumm(a, b) {
    return a + b;
  },
};

export const mapArr = helpers.maps;
export const getVal = helpers.getValue;
export const getArr = helpers.getArr;
export const getSumm = helpers.getSumm;
