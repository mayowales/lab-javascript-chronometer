const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  printSeconds()
  printMinutes()
  clearSplits()


}

function printMinutes() {
  // ... your code goes here
  const minute = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  minDecElement.innerHTML = minute[0]
  minUniElement.innerHTML = minute[1]
  console.log(minute)
}

function printSeconds() {
  // ... your code goes here
  const second = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  secDecElement.innerHTML = second[0];
  secUniElement.innerHTML = second[1];
  console.log(second)
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  setSplitBtn()
  
}

function clearSplits() {
  // ... your code goes here
 /* while (splitsElement.firstChild) {
    splitsElement.removeChild(splitsElement.firstChild)
  }*/
 // splitsElement.innerHTML = '';
 setResetBtn()
}

function setStopBtn() {
  // ... your code goes here
  if(btnLeftElement.className === 'btn stop'){
    chronometer.stop()
    
    btnLeftElement.className = 'btn start';
    btnLeftElement.innerHTML = 'START';
    btnRightElement.className = 'btn reset';
    btnRightElement.innerHTML = 'RESET'

  }
 }

function setSplitBtn() {
  // ... your code goes here
  const  splitButton = document.createElement('li')
  splitButton.innerHTML = chronometer.split()
  splitsElement.appendChild(splitButton)
  
}

function setStartBtn() {
  // ... your code goes here
  if(btnLeftElement.className === 'btn start'){
    chronometer.start(printTime)

    btnLeftElement.className = 'btn stop';
    btnLeftElement.innerHTML = 'STOP';
    btnRightElement.className = 'btn split';
    btnRightElement.innerHTML = 'SPLIT';
  } else {
      setStopBtn()
  }
  
}

function setResetBtn() {
  // ... your code goes here
if(btnRightElement.className === 'btn reset'){
 chronometer.reset()
}



}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  setStartBtn()
 
  
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if(btnRightElement.className === 'btn split'){
    setSplitBtn()
  }else if(btnRightElement.className === 'btn reset'){
    setResetBtn()
    clearSplits()
  }
 
});
