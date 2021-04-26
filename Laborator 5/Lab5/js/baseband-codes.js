function getManchesterLevelEncoding(bits) {
  var result = [];
  for (var i = 0; i < bits.length; i++) {
    let symbol = "|--|--|";
    if (parseInt(bits[i].value) == 1) symbol = "|__|--|";
    if (
      parseInt(bits[i].value) == 1 &&
      i > 0 &&
      parseInt(bits[i - 1].value) == 1
    )
      symbol = "|__|--|";
    if (parseInt(bits[i].value) == 0) symbol = "|--|__|";
    if (
      parseInt(bits[i].value) == 0 &&
      i > 0 &&
      parseInt(bits[i - 1].value) == 0
    )
      symbol = "|--|__|";
    result.push(symbol);
  }
  return result;
}

function getNRZLevel(bits) {
  var result = [];
  for (let i = 0; i < bits.length; i++) {
    let symbol = "|____|";
    if (parseInt(bits[i].value) === 1) symbol = "|----|";
    result.push(symbol);
  }
  return result;
}

function getNRZMark(bits) {
  var result = [];
  let symbol = "|---|";
  for (let i = 0; i < bits.length; i++) {
    if (parseInt(bits[i].value) === 1) {
      if (symbol === "|___|") {
        symbol = "|---|";
      } else {
        symbol = "|___|";
      }
    }
    result.push(symbol);
  }
  return result;
}

function getNRZSpace(bits) {
  var result = [];
  let symbol = "|---|";
  for (let i = 0; i < bits.length; i++) {
    if (parseInt(bits[i].value) === 0) {
      if (symbol === "|___|") {
        symbol = "|---|";
      } else {
        symbol = "|___|";
      }
    }
    result.push(symbol);
  }
  return result;
}

function getRZUnipolar(bits) {
  var result = [];
  for (let i = 0; i < bits.length; i++) {
    let symbol = "|----|";
    if (parseInt(bits[i].value) === 1) {
      symbol = "|--__|";
    } else {
      symbol = "|____|";
    }
    result.push(symbol);
  }
  return result;
}

function getBiphaseLevel(bits) {
  var result = [];
  let symbol = "|----|";
  for (let i = 0; i < bits.length; i++) {
    if (parseInt(bits[i].value) === 1) {
      symbol = "|__--|";
    } else {
      symbol = "|--__|";
    }
    result.push(symbol);
  }
  return result;
}

function getBiphaseMark(bits) {
  let zeroUp = "|----|";
  let zeroDown = "|____|";
  let oneUp = "|--__|";
  let oneDown = "|__--|";
  var result = [];
  let symbol = "";
  for (let i = 0; i < bits.length; i++) {
    if (i == 0) {
      if (parseInt(bits[i].value) === 0) {
        symbol = zeroUp;
      }
      if (parseInt(bits[i].value) === 1) {
        symbol = oneUp;
      }
    } else {
      if (parseInt(bits[i].value) === 1) {
        if (parseInt(bits[i - 1].value) === 1 && symbol === oneUp) {
          symbol = oneUp;
        }

        if (parseInt(bits[i - 1].value) === 1 && symbol === oneDown) {
          symbol = oneDown;
        }

        if (parseInt(bits[i - 1].value) === 0 && symbol === zeroUp) {
          symbol = oneDown;
        }

        if (parseInt(bits[i - 1].value) === 0 && symbol === zeroDown) {
          symbol = oneUp;
        }
      }

      if (parseInt(bits[i].value) === 0) {
        if (parseInt(bits[i - 1].value) === 1 && symbol === oneDown) {
          symbol = zeroDown;
        }

        if (parseInt(bits[i - 1].value) === 1 && symbol === oneUp) {
          symbol = zeroUp;
        }

        // Nu stiu de ce nu a mers asa
        // if (parseInt(bits[i - 1].value) === 0 && symbol === zeroUp) {
        //   symbol = zeroDown;
        // }

        // if (parseInt(bits[i - 1].value) === 0 && symbol === zeroDown) {
        //   symbol = zeroUp;
        // }

        if (parseInt(bits[i - 1].value) === 0) {
          if (symbol === zeroUp) {
            symbol = zeroDown;
          } else {
            symbol = zeroUp;
          }
        }
      }
    }
    result.push(symbol);
  }
  return result;
}

function getBiphaseSpace(bits) {
  let oneUp = "|----|";
  let oneDown = "|____|";
  let zeroUp = "|--__|";
  let zeroDown = "|__--|";
  var result = [];
  let symbol = "";
  for (let i = 0; i < bits.length; i++) {
    if (i == 0) {
      if (parseInt(bits[i].value) === 0) {
        symbol = zeroUp;
      }
      if (parseInt(bits[i].value) === 1) {
        symbol = oneUp;
      }
    } else {
      if (parseInt(bits[i].value) === 1) {
        //Nu stiu de ce nu merge asa
        // if (parseInt(bits[i - 1].value) === 1 && symbol === oneUp) {
        //   symbol = oneDown;//ch
        // }

        // if (parseInt(bits[i - 1].value) === 1 && symbol === oneDown) {
        //   symbol = oneUp;
        // }

        if (parseInt(bits[i - 1].value) === 1) {
          if (symbol === oneUp) {
            symbol = oneDown;
          } else {
            symbol = oneUp;
          }
        }

        if (parseInt(bits[i - 1].value) === 0 && symbol === zeroUp) {
          symbol = oneUp;
        }

        if (parseInt(bits[i - 1].value) === 0 && symbol === zeroDown) {
          symbol = oneDown;
        }
      }

      if (parseInt(bits[i].value) === 0) {
        if (parseInt(bits[i - 1].value) === 1 && symbol === oneDown) {
          symbol = zeroUp;
        }

        if (parseInt(bits[i - 1].value) === 1 && symbol === oneUp) {
          symbol = zeroDown;
        }

        // Nu stiu de ce nu a mers asa
        // if (parseInt(bits[i - 1].value) === 0 && symbol === zeroUp) {
        //   symbol = zeroDown;
        // }

        // if (parseInt(bits[i - 1].value) === 0 && symbol === zeroDown) {
        //   symbol = zeroUp;
        // }

        if (parseInt(bits[i - 1].value) === 0) {
          if (symbol === zeroUp) {
            symbol = zeroUp;
          } else {
            symbol = zeroDown;
          }
        }
      }
    }
    result.push(symbol);
  }
  return result;
}

function getAlternateMarkInversion(bits) {
  var result = [];
  let oneUp = "|----|";
  let oneDown = "|____|";
  let zero = "| 0 |";
  let symbol = "";
  for (let i = 0; i < bits.length; i++) {
    if (i == 0) {
      if (parseInt(bits[i].value) === 0) {
        symbol = zero;
      }
      if (parseInt(bits[i].value) === 1) {
        symbol = oneUp;
      }
    } else {
      if (parseInt(bits[i].value) === 1) {
        if (parseInt(bits[i - 1].value) === 1) {
          if (symbol === oneUp) {
            symbol = oneDown;
          } else {
            symbol = oneUp;
          }
        } else {
          symbol = oneUp;
        }
      }

      if (parseInt(bits[i].value) === 0) {
        symbol = zero;
      }
    }
    result.push(symbol);
  }
  return result;
}
