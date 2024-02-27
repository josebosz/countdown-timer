function updateCountdown() {
    const endDate = new Date('2024-03-10T00:00:00');
    const now = new Date().getTime();
    const timeLeft = endDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `
      <div>${days} days</div>
      <div>${hours} hours</div>
      <div>${minutes} minutes</div>
      <div>${seconds} seconds</div>
    `;

    if (timeLeft < 0) {
      clearInterval(timerInterval);
      document.getElementById('countdown').innerHTML = "Giveaway Ended!";
    }
  }

  updateCountdown(); // Call it once to avoid delay
  const timerInterval = setInterval(updateCountdown, 1000);