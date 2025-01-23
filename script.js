  // Countdown Timer Logic
  const launchDate = new Date("2025-04-01T00:00:00").getTime();

  const countdown = document.getElementById("countdown");

  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = launchDate - now;

    if (timeLeft > 0) {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      countdown.innerHTML = `Launching in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
      countdown.innerHTML = "We are live now!";
    }
  }

  setInterval(updateCountdown, 1000);