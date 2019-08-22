//Counting Sheep

function countSheep(n) {
    if(n===0) {
        console.log(`All sheep have jumped over the fence`)
    } else {
        console.log(`${n}: Another sheep jumped over the fence`)
        countSheep(n-1)
    }
}

//Power Calc

function powerCalculator(n1,n2) {
    if(n1 <= 0 || n2 <= 0) {
        console.log(`exponent should be >= 0`)
        return 0
    } else {
        return n1^n2
    }
}

//Reverse Sting

function reverseString(str) {
    if (str === '') {
        return ''
    } else {
        return reverseString(str.substr(1)) + str.charAt(0);
    }
}

//nth Triangular Number

const triangle = function triangleNum(n) {
    if (n < 2) 
        return n;
    return n + triangle(n - 1);
}

//String Splitter

const stringSplit= function split(str, sep) {
    var idx = str.indexOf(sep);
    if (idx == -1) {
        return [str];
    }
    return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep))
}

//Fibonacci

const fibonacci = function(num) {  
    if (num <= 1) {
        return num  
    }else {
        return fibonacci(num - 1) + fibonacci(num - 2)  
    }
}

//Factorial

const factorial = function(num) {
    debugger;  
    if (num === 0 || num === 1) {
        return 1
    } else {
        return num * factorial(num - 1)  
    }
}

//Maze

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
  ];
  
  let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
  ];
  
  const findWayOut = function (maze, position = 0, row = 0, column = 0, path = [], direction = 'S') {
    if (row >= maze.length || column >= maze[0].length) {
      return;
    }
    if (row < 0 || column < 0) {
      return;
    }
    path[position] = direction;
    position++;
    if (maze[row][column] === 'e') {
      // console.log('We found the path.', path);
      return;
    }
    if (maze[row][column] === ' ') {
      maze[row][column] = 'V';
      findWayOut(maze, position, row, column - 1, path, 'L');
      findWayOut(maze, position, row, column + 1, path, 'R');
      findWayOut(maze, position, row - 1, column, path, 'U');
      findWayOut(maze, position, row + 1, column, path, 'D');
      maze[row][column] = ' ';
    }
    position--;
  };

//Anagram

function anagrams(prefix, str){
    if(str.length <= 1){
        console.log(`The anagram is ${prefix}${str}`);
    } else {
        for(let i=0; i<str.length; i++){
            let currentLetter = str.substring(i, i+1); 
            let previousLetters = str.substring(0,i);
            let afterLetters = str.substring(i+1);
            anagrams(prefix+currentLetter, previousLetters+afterLetters);
        }
    }
}
function printAnagram(word){
    anagrams(' ', word);

}

//Organization Chart

  const facebook = {
    Zuckerberg: {
      Schroepfer: {
        Bosworth: {
          Steve: {},
          Kyle: {},
          Andra: {}
        },
        Zhao: {
          Richie: {},
          Sofia: {}
        }
      },
      Schrage: {
        VanDyck: {
          Sabrina: {},
          Michelle: {},
          Josh: {}
        },
        Swain: {
          Blanch: {},
          Tom: {},
          Joe: {}
        }
      },
      Sandberg: {
        Goler: {
          Eddie: {},
          Julie: {},
          Annie: {}
        },
        Hernandez: {
          Rowi: {},
          Inga: {},
          Morgan: {}
        },
        Moissinac: {
          Amy: {},
          Chuck: {},
          Vinni: {}
        },
        Kelley: {
          Eric: {},
          Ana: {},
          Wes: {}
        }
      }
    }
  };
  
  const orgChart = function (obj, indent = '') {
    let output = '';
    for (let key in obj) {
      // let indent = '  ';
      output = output + indent + key + '\n';
      output = output + orgChart(obj[key], indent+'     ');
    }
    return output;
  };

//Binary

function convertToBinary(num){
    if(num>0){
        let binary = Math.floor(num % 2); 
        return (convertToBinary(Math.floor(num/2))+ binary);
    }else{
        return ''; 
    }
}