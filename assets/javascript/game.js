  // var targetNumber = 53;
  // computer generate random number from 19 to 120 for the player to guess. 
  // https://www.w3schools.com/js/js_random.asp
  var targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;

  // create an array which contains the names of the images of the sgems to be later used for the buttons to select
  var crystalImages = ["assets/images/bxb0.66.jpg", "assets/images/6628-brbp16.jpg" , "assets/images/emerald-300.jpg" ,  "assets/images/p6020165.jpg"]


  // put the computer generated number to the webpage
  $("#number-to-guess").text(targetNumber);

  var counter = 0;
  var wins = 0;
  var losses = 0;

  var imageCrystal;

  // Now for the hard part. Creating multiple crystals each with their own unique number value.

  // We begin by expanding our array to include four options.
  // var numberOptions = [10, 5, 3, 7];

  // create an empty array to place the random gem values in
  var numberOptions = [];   
  // loop to generate four random numbers to associate later with the gems
  for(var i=0;i < 4;i++){
    numberOptions[i] = Math.floor(Math.random() * (12 - 1)) + 1;    // gen rand  nums from 1 to 12
  }

  // test to see if array was populated with 4 random numbers
   console.log(numberOptions)


  // Next we create a for loop to create crystals for every numberOption.
  // There are 4 gems at this time, we will use the array length to find this number of gems
  for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal - image tag
    imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", crystalImages[i]);
    //   imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
  }


// start here wednesday



  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {  

      console.log("on click ---------------------------------");

      // Determining the crystal's value requires us to extract the value from the data attribute.
      // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
      // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
      // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

      var crystalValue = ($(this).attr("data-crystalvalue"));

      // console.log("crystalValue=" + crystalValue + " " + typeof(crystalValue));
      crystalValue = parseInt(crystalValue);
       console.log("crystalValue=" + crystalValue + " " + typeof(crystalValue));

      // We then add the crystalValue to the user's "counter" which is a global variable.
      // Every click, from every crystal adds to the global counter.
       counter += crystalValue;        //counter  = counter + crystalValue; 
       console.log("counter=" +  counter) ;      

      // All of the same game win-lose logic applies. So the rest remains unchanged.
      // alert("New score: " + counter);
      $("#total-score-id").text(counter);

      if (counter === targetNumber) {
        alert("You win!");
        wins++;
        // $("#wins").text("Wins: " + wins);
        // counter = 0;
        // $("#total-score-id").text(counter);
        reset();

      }

      else if (counter >= targetNumber) {
        alert("You lose!!");
        losses = losses + 1;
        // $("#loss").text("Losses: " + losses);
        // counter = 0;
        // $("#total-score-id").text(counter);
        reset();
      }

      

  });

  function reset () {
        console.log("reset**********************")
        $("#wins").text("Wins: " + wins);
        $("#loss").text("Losses: " + losses);
        
        counter = 0;
        $("#total-score-id").text(counter);

        targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;
        $("#number-to-guess").text(targetNumber);


        numberOptions = [];   
        // loop to generate four random numbers to associate later with the gems
         for(var i=0;i < 4;i++){
           numberOptions[i] = Math.floor(Math.random() * (12 - 1)) + 1;    // gen rand  nums from 1 to 12
        }


        $("#crystals").empty();
        for (var i = 0; i < numberOptions.length; i++) {

            // For each iteration, we will create an imageCrystal - image tag
              imageCrystal = $("<img>");

            // First each crystal will be given the class ".crystal-image".
            // This will allow the CSS to take effect.
            imageCrystal.addClass("crystal-image");

            // Each imageCrystal will be given a src link to the crystal image
            imageCrystal.attr("src", crystalImages[i]);
            //   imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

            // Each imageCrystal will be given a data attribute called data-crystalValue.
            // This data attribute will be set equal to the array value.

            console.log(numberOptions[i]);


            imageCrystal.attr("data-crystalvalue", numberOptions[i]);

            // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
            $("#crystals").append(imageCrystal);
        }
         // This time, our click event applies to every single crystal on the page. Not just one.

         
    $(".crystal-image").on("click", function() {  

        console.log("on click ---------------------------------");

        // Determining the crystal's value requires us to extract the value from the data attribute.
        // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
        // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
        // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

        var crystalValue = ($(this).attr("data-crystalvalue"));

        // console.log("crystalValue=" + crystalValue + " " + typeof(crystalValue));
        crystalValue = parseInt(crystalValue);
         console.log("crystalValue=" + crystalValue + " " + typeof(crystalValue));

        // We then add the crystalValue to the user's "counter" which is a global variable.
        // Every click, from every crystal adds to the global counter.
         counter += crystalValue;        //counter  = counter + crystalValue; 
         console.log("counter=" +  counter) ;      

        // All of the same game win-lose logic applies. So the rest remains unchanged.
        // alert("New score: " + counter);
        $("#total-score-id").text(counter);

        if (counter === targetNumber) {
          alert("You win!");
          wins++;
          // $("#wins").text("Wins: " + wins);
          // counter = 0;
          // $("#total-score-id").text(counter);
          reset();

        }

        else if (counter >= targetNumber) {
          alert("You lose!!");
          losses = losses + 1;
          // $("#loss").text("Losses: " + losses);
          // counter = 0;
          // $("#total-score-id").text(counter);
          reset();
      }

      

  });




      }