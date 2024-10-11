const cronometro = {
  hours: "0",
  minutes: "0",
  seconds: "0",

  // função de acrecentar 2 'zeros'
  updateDisplay() {
    //this.hours.toString.padStart (2,'0) = faz que comece com 00

    document.getElementById("hours").innerHTML = this.hours
      .toString()
      .padStart(2, "0");

    document.getElementById("minute").innerHTML = this.minutes
      .toString()
      .padStart(2, "0");

    document.getElementById("second").innerHTML = this.seconds
      .toString()
      .padStart(2, "0");
  },

  start() {
    this.intervalId = setInterval(() => {
      this.seconds++;

      // condiçao para verificar os seconds
      if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes++;
      }

      // condiçao para verificar os minues
      if (this.minutes === 60) {
        this.minutes = 0;
        this.hours++;
      }

      document.querySelector("p").style.color = "black";
      // atualizar o display
      this.updateDisplay();
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    document.querySelector("p").style.color = "red";
  },

  reset() {
    // função de zera o timer do cronometro
    (this.hours = 0),
      (this.minutes = 0),
      (this.seconds = 0),
      this.updateDisplay();
    this.stop();
    document.querySelector("p").style.color = "black";
  },
};
