const gameFlow = { 1: { 'left':   13, 'center': null, 'right':   11},
                   2: { 'left':   16, 'center': null, 'right':   12},
                   3: { 'left': null, 'center':   27, 'right': null},
                   4: { 'left': null, 'center':    5, 'right': null},
                   5: { 'left': null, 'center':   19, 'right': null},
                   6: { 'left':    7, 'center': null, 'right':   19},
                   7: { 'left':   14, 'center': null, 'right':    6},
                   8: { 'left':   28, 'center': null, 'right':    2},
                   9: { 'left': null, 'center':   30, 'right': null},
                  10: { 'left': null, 'center':    6, 'right': null},
                  11: { 'left':   31, 'center': null, 'right':    4},
                  12: { 'left':   18, 'center': null, 'right':   24},
                  13: { 'left': null, 'center':    1, 'right': null},
                  14: { 'left':    3, 'center': null, 'right':   10},
                  15: { 'left':   26, 'center': null, 'right':   16},
                  16: { 'left':    8, 'center': null, 'right':   28},
                  17: { 'left': null, 'center':    9, 'right': null},
                  18: { 'left':   20, 'center': null, 'right':   12},
                  19: { 'left':   28, 'center':   30, 'right':    6},
                  20: { 'left': null, 'center':   12, 'right': null},
                  21: { 'left': null, 'center':   19, 'right': null},
                  22: { 'left':   23, 'center': null, 'right':   21},
                  23: { 'left': null, 'center': null, 'right': null},
                  24: { 'left':    8, 'center': null, 'right':   15},
                  25: { 'left':   29, 'center': null, 'right':   32},
                  26: { 'left': null, 'center':   15, 'right': null},
                  27: { 'left': null, 'center': null, 'right': null},
                  28: { 'left':   32, 'center':   19, 'right':    2},
                  29: { 'left':   34, 'center': null, 'right':   25},
                  30: { 'left':   22, 'center':   19, 'right':   35},
                  31: { 'left': null, 'center':   11, 'right': null},
                  32: { 'left':   16, 'center': null, 'right':   25},
                  33: { 'left':   17, 'center': null, 'right':   35},
                  34: { 'left': null, 'center':   25, 'right': null},
                  35: { 'left':   33, 'center': null, 'right':   30},
           };

// 'dollar', 'shovel', 'key', '9v', 'hat'
let itens = [];

function clickFlow(button) {
  let currentScene = parseInt(document.getElementById("scene").src.split("/")[5].split(".")[0]);
  let dest = gameFlow[currentScene][button];

  if (dest == 17) {
    
    if (!(itens.includes("dollar"))) {
      alert("You don't have the dollar!");
      dest = 33;
    } else {
      itens.splice(itens.indexOf('dollar'), 1)
      document.getElementById("dollar").outerHTML = "";
    }
  }
  if (dest == 23) {
    if (!(itens.includes("key"))) {
      alert("You don't have the key!");
      dest = 22;
    }
  }
  if (dest == 34) {
    if (!(itens.includes("9v"))) {
      alert("You don't have the battery!");
      dest = 29;
    } else {
      itens.splice(itens.indexOf('9v'), 1)
      document.getElementById("9v").outerHTML = "";
    }
  }
  if (dest == 14) {
    if (!(itens.includes("shovel"))) {
      alert("You don't have the shovel!");
      dest = 7;
    } else {
      itens.splice(itens.indexOf('shovel'), 1)
      document.getElementById("shovel").outerHTML = "";
    }
  }
  if (dest == 20) {
    if (!(itens.includes("hat"))) {
      alert("You don't have the hat!");
      dest = 18;
    } else {
      itens.splice(itens.indexOf('hat'), 1)
      document.getElementById("hat").outerHTML = "";
    }
  }

  document.getElementById("scene").src = "./mancomb/" + dest + ".png";
  document.getElementById("left-button").textContent = gameFlow[dest]['left'];
  document.getElementById("right-button").textContent = gameFlow[dest]['right'];
  document.getElementById("center-button").textContent = gameFlow[dest]['center'];
  if (!gameFlow[dest]['left']) {
    document.getElementById("left-button").classList.add("disabled");
  } else {
    document.getElementById("left-button").classList.remove("disabled");
  }
  if (!gameFlow[dest]['center']) {
    document.getElementById("center-button").classList.add("disabled");
  } else {
    document.getElementById("center-button").classList.remove("disabled");
  }
  if (!gameFlow[dest]['right']) {
    document.getElementById("right-button").classList.add("disabled");
  } else {
    document.getElementById("right-button").classList.remove("disabled");
  }
  if (dest == 9) {
    if (!(itens.includes("9v"))) {
      itens.push("9v");
    }
  }
  if (dest == 20) {
    if (!(itens.includes("key"))) {
      itens.push("key");
    }
  }
  if (dest == 34) {
    if (!(itens.includes("shovel"))) {
      itens.push("shovel");
    }
  }
  if (dest == 10) {
    if (!(itens.includes("hat"))) {
      itens.push("hat");
    }
  }
  if (dest == 26) {
    if (!(itens.includes("dollar"))) {
      itens.push("dollar");
    }
  }
  if (dest == 27 || dest == 23) {
    document.getElementById("inventory").outerHTML = "";
    itens = [];
  }

  for (let i = 0; i < itens.length; i++) {
    if (!(document.getElementById(itens[i]))) {
      let item_img = document.createElement("img");
      item_img.src = "./mancomb/" + itens[i] + ".png";
      item_img.id = itens[i]
      item_img.style = "height: inherit; border: 3px solid black; border-radius: 15px;"
      document.getElementById("inventory").appendChild(item_img);
    }
  }

  if (itens.length == 0) {
    document.getElementById("noitems").classList.remove("disabled");
  } else {
    document.getElementById("noitems").classList.add("disabled");
  }
}  
