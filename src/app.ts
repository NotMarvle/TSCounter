function submit() {
    var timeInput = document.getElementById("number") as HTMLInputElement;
    var timeInSeconds: number = parseInt(timeInput.value);
    var timeInMilliseconds: number = timeInSeconds * 1000;
    document.getElementById("container").innerHTML = "<h1>Counting To " + timeInSeconds + " seconds...</h1>";
  
    setTimeout(() => {
      document.getElementById("container").innerHTML = "<h1>Done! To Go Back Just Refresh The Page</h1>"
    }, timeInMilliseconds);
  }
  