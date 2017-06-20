class MyHelpers {
  static getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static hex2name(color) {
    return window.ntc.name(color)[1]
  }
}

export default MyHelpers;
