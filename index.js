class Timer {
    constructor(durationInput, startButton, pauseButton) {
      this.durationInput = durationInput;
      this.startButton = startButton;
      this.pauseButton = pauseButton;
  
      this.startButton.addEventListener('click', this.start);
      this.pauseButton.addEventListener('click', this.pause);
    }
  
    start = () => {
      this.tick();
      this.interval = setInterval(this.tick, 1000)
    };
  
    pause = () => {
      clearInterval(this.interval);
    }

  tick = () => {
    const timeRemaining = this.timeRemaining;
    this.timeRemaining = timeRemaining - 1; 
  }
  get timeRemaining() { //is getting the this.timeRemaining 
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {//starts with the updated time
    this.durationInput.value = time; 
  }
  
}
  
  const durationInput = document.querySelector('#duration');
  const startButton = document.querySelector('#start');
  const pauseButton = document.querySelector('#pause');
  
  const timer = new Timer(durationInput, startButton, pauseButton);