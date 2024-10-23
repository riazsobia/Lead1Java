'use strict';

class People {

  constructor() {
    this.data = {};
    /*
      {
        1: {name:'john'},
        2: {name:'lena'},
        3: {name:'caity'}
      }
     */
  }

  get(id) {
    return Promise.resolve(
      id
        ? this.data[id]
        : Object.keys(this.data).reduce( (arr,element) => {arr.push(this.data[element]); return arr;}, [])
    );

    /*
    [
      {name:'john'}, {name:'lena'}, {name:'caity'}
    ]
    */
  }

  post(record) {
    record.id = Object.keys(this.data).length + 1;
    this.data[record.id] = record;
    return Promise.resolve(this.data[record.id]);
  }

}

module.exports = People;
