////////


// import { asciiShader } from "./ascii_shader.js";

// import { iso3D } from "./iso3D.js";
import { asciiHearts } from "./asciiHearts.js";
// import { terrain } from "./terrain.js";
import { wavetable } from "./wavetable.js";
import { isometricCube } from "./isometricCube.js";
import { sonicParameters } from "./parameters.js";

document.addEventListener('load', init());

function init(){

document.addEventListener("DOMContentLoaded", (event) => {
  setTimeout(() => {
  asciiHearts("asciiHeartsContainer1")
    // terrain("terrainContainer1");
    // wavetable("wavetableContainer1");
    // wavetable("wavetableContainer2");
    isometricCube("isoCubeContainer1");
    sonicParameters("sonicParametersContainer");
  }, 500);
});

// header text ticker

// class Ticker {
//   constructor(containerId, text, speed = 0.025) {
//     this.container = document.getElementById(containerId);
//     this.text = text;
//     this.speed = speed; // Pixels per millisecond
//     this.lastTime = 0;
//     this.totalWidth = 0;

//     this.init();
//   }

//   // Function to create a text div
//   createTextDiv() {
//     const div = document.createElement("div");
//     div.classList.add("ticker-text");
//     div.textContent = this.text;
//     return div;
//   }

//   // Initialize the ticker
//   init() {
//     const vwToPixels = window.innerWidth / 100;
//     const tempTextDiv = this.createTextDiv(); // Temporary div to calculate width
//     this.container.appendChild(tempTextDiv);
//     const textWidth = tempTextDiv.offsetWidth; // Width of the text block
//     this.container.removeChild(tempTextDiv); // Remove temporary div

//     const totalContainerWidth = window.innerWidth;
//     const numberOfBlocks = Math.ceil(totalContainerWidth / (textWidth + vwToPixels));

//     // Populate the container with the required number of text blocks
//     for (let i = 0; i < numberOfBlocks * 2; i++) { // Duplicate for seamless looping
//       const textDiv = this.createTextDiv();
//       this.container.appendChild(textDiv);
//     }

//     this.textElements = Array.from(this.container.querySelectorAll(".ticker-text"));
//     this.positionTextElements();
//     requestAnimationFrame(this.scrollText.bind(this));
//   }

//   // Position text elements
//   positionTextElements() {
//     const vwToPixels = window.innerWidth / 100;
//     let accumulatedWidth = 0;
//     this.textElements.forEach((text, index) => {
//       text.style.left = `${accumulatedWidth}px`;
//       accumulatedWidth += text.offsetWidth + vwToPixels;
//     });
//   }

//   // Scroll the text
//   scrollText(timestamp) {
//     if (!this.lastTime) this.lastTime = timestamp;
//     const deltaTime = timestamp - this.lastTime;

//     this.textElements.forEach((text) => {
//       let currentLeft = parseFloat(text.style.left);
//       currentLeft -= this.speed * deltaTime; // Move based on time

//       if (currentLeft <= -text.offsetWidth) {
//         currentLeft += this.textElements.length * (text.offsetWidth + (window.innerWidth / 100));
//       }
//       text.style.left = `${Math.round(currentLeft)}px`;
//     });

//     this.lastTime = timestamp;
//     requestAnimationFrame(this.scrollText.bind(this));
//   }
// }

// document.addEventListener("DOMContentLoaded", () => {

//     const textArray1 = ["capstone"];
//     const ticker1 = new Ticker("tickerContainer1", textArray1);
  
//     const textArray2 = ["towers"];
//     const ticker2 = new Ticker("tickerContainer2", textArray2);

//   });



// iso3D();
//   }, 1000);
// });


// window.onload = () => {

// // asciiShader("asciiContainer1");

// }


// document.getElementById('asciiContainer1').style.display = 'block';



// refresh box
// var element = document.getElementById("refresh-button");
// element.addEventListener("click", function() {
//   console.log("AAA");
//   if (element.textContent=="HELLO") element.textContent = "HI";
//   else element.textContent = "HELLO";
//   // Reload the page
//   // location.reload();
// });

// turn off splash page for now
// document.addEventListener("DOMContentLoaded", closeSplash())

document.addEventListener("DOMContentLoaded", function() {
  var element = document.getElementById("refresh-button");
  element.addEventListener("click", function() {
    console.log("Button clicked!");
    if (element.innerText === "HELLO") {
      element.innerText = "WHATS UP";
    } else if (element.innerText === "WHATS UP") {
      element.innerText = "NMU";
    } else if (element.innerText === "NMU") {
      element.innerText = "OK";
    } else if (element.innerText === "OK") {
      element.innerText = "\u2665 \u2665 \u2665";
    } else if (element.innerText === "\u2665 \u2665 \u2665")
      element.innerText = "HELLO";
  });
});


var element = document.getElementById("refresh-button-2");
element.addEventListener("click", function() {
  console.log("AAA");
  // Reload the page
  location.reload();
});



// jquery dragging / resizing functions
$(document).ready(function() {
  let maxZIndex = 1;

  $(".window").draggable({
    start: function(event, ui) {
      maxZIndex++;
      $(this).css('z-index', maxZIndex);
    },
    stop: function(event, ui) {
      // Keep the dragged window at the front after dragging is done
      $(this).css('z-index', maxZIndex);
    }
  });
  
  // Make window elements resizable
  // $(".window").resizable({
  //     handles: "n, e, s, w, ne, se, sw, nw",
  //     minWidth: 100, // Set minimum width
  //     minHeight: 100, // Set minimum height
  //     maxWidth: window.innerWidth, // Set maximum width
  //     maxHeight: window.innerHeight, // Set maximum height
  //     resize: function(event, ui) {
  //         // Update lines for SVG (if needed)
  //         updateLines(svg, windows);
  //     }
  // });
});




////// bouncer animation

// Array of image URLs
// var images = [
//     'bouncing/18468.png',
//     'bouncing/39412.png',
//     'bouncing/84319.png',
//     'bouncing/119687.png',
//     'bouncing/159877.png',
//     'bouncing/167237.png',
//     'bouncing/173078.png',
//     'bouncing/182174.png',
//   ];

var images = [
  'sprites/computer-4.png',
  'sprites/channels-2.png',
  'sprites/entire_network_globe-0.png',
  'sprites/msg_error-0.png',
  'sprites/world_phonereceiver.png',
  'sprites/magnifying_glass-0.png',
  'sprites/cd_drive-3.png',
  'sprites/modem-5.png',
  'sprites/msg_warning-0.png',
  'sprites/help_question_mark-0.png',
];

document.addEventListener('DOMContentLoaded', function() {

  const cpuUsageElement = document.getElementById('cpu');
  let cpuUsage = 0;

  function updateCpuUsage() {
    cpuUsage += Math.floor(Math.random() * 30) + 1;
  
    // Set a threshold beyond which scientific notation should be avoided
    const scientificNotationThreshold = 1e6;
  
    // Check if the CPU usage is below the threshold
    if (cpuUsage < scientificNotationThreshold) {
      cpuUsageElement.textContent = `CPU Usage: ${cpuUsage.toFixed(0)}%`;
    } else {
      cpuUsageElement.textContent = `CPU Usage: ${cpuUsage.toPrecision(6)}%`;
    }
  }
  
  setInterval(updateCpuUsage, 1);
  
  var sections = document.querySelectorAll('.window');
  var floatingContainer = document.querySelector('.floating-container');
  var bouncingContainers = document.getElementsByClassName('bouncing-container');
  var windows = document.querySelectorAll('.window');

  var height = 0;
  for (var i = 0; i < sections.length; i++) {
    if (sections[i] === floatingContainer) break;
    height += sections[i].offsetHeight + 2;
  }

  var currentImageIndex = 0;

  for (var i = 0; i < bouncingContainers.length; i++) {
    var bouncingContainer = bouncingContainers[i];
    var numDivs = 10;

    for (var j = 0; j < numDivs; j++) {
      var div = document.createElement('div');
      div.className = 'bouncing';

      var selectedImage = images[currentImageIndex];
      var scaleFactor = 0.95 + Math.random() * 0.1;
      var resizedImage = `url(${selectedImage})`;

      div.style.backgroundImage = resizedImage;
      div.style.backgroundSize = 'cover';
      div.style.transform = `scale(${scaleFactor})`;

      bouncingContainer.appendChild(div);

      currentImageIndex++;
      if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
      }

      var x = Math.random() * document.documentElement.innerWidth;
      var y = Math.random() * document.documentElement.scrollHeight;
      var vx = (Math.random() - 0.5) * 0.85;
      var vy = (Math.random() - 0.5) * 0.85;

      animateDiv(div, x, y, vx, vy, height);
    }
  }

  const audio = document.getElementById("myAudio");
  const playButton = document.getElementById("playButton");
  const pauseButton = document.getElementById("pauseButton");
  const volumeSlider = document.getElementById("range26");

  playButton.addEventListener("click", () => {
    audio.play();
    playButton.style.display = "none";
    pauseButton.style.display = "inline";
  });

  pauseButton.addEventListener("click", () => {
    audio.pause();
    pauseButton.style.display = "none";
    playButton.style.display = "inline";
  });

  volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
  });

  audio.volume = volumeSlider.value;

  windows.forEach(windowElement => {
    const windowBody = windowElement.querySelector('.window-body');
    const maximizeButton = windowElement.querySelector('.maximize-button');
    const restoreButton = windowElement.querySelector('.restore-button');
    const closeButton = windowElement.querySelector('[aria-label="Close"]');
    const minimizeButton = windowElement.querySelector('[aria-label="Minimize"]');

    restoreButton.style.display = 'none';

    maximizeButton.addEventListener('click', () => {
      if (windowElement.style.position !== 'fixed') {
        windowElement.dataset.originalPosition = windowElement.style.position;
        windowElement.dataset.originalWidth = windowElement.style.width;
        windowElement.dataset.originalHeight = windowElement.style.height;
        windowElement.dataset.originalZIndex = windowElement.style.zIndex;

        windowElement.style.position = 'fixed';
        windowElement.style.width = '100vw';
        windowElement.style.height = '100vh';
        windowElement.style.top = '0';
        windowElement.style.left = '0';
        windowElement.style.zIndex = '9999';
        maximizeButton.style.display = 'none';
        restoreButton.style.display = 'block';
      }
    });

    restoreButton.addEventListener('click', () => {
      if (windowElement.style.position === 'fixed') {
        windowElement.style.position = windowElement.dataset.originalPosition;
        windowElement.style.width = windowElement.dataset.originalWidth;
        windowElement.style.height = windowElement.dataset.originalHeight;
        windowElement.style.zIndex = windowElement.dataset.originalZIndex;
        maximizeButton.style.display = 'block';
        restoreButton.style.display = 'none';
      }
    });

    closeButton.addEventListener('click', () => {
      windowElement.remove();
    });

    minimizeButton.addEventListener('click', () => {
      windowBody.classList.toggle('hidden');
    });
  });


});



function animateDiv(div, x, y, vx, vy, containerHeight) {
    // Update position
    x += vx;
    y += vy;
  
    // Get the width and height of the div
    var divWidth = div.offsetWidth;
    var divHeight = div.offsetHeight;
  
    // Check for collisions with the edges of the container
    if (x < 0 || x > window.innerWidth - divWidth) {
      vx = -vx;
    }
    if (y < 0 || y > containerHeight - divHeight) {
      vy = -vy;
    }
  
    // Apply the new position
    div.style.left = x + 'px';
    div.style.top = y + 'px';
  
    // Call this function again on the next frame
    requestAnimationFrame(function () {
      animateDiv(div, x, y, vx, vy, containerHeight);
    });
  }
  
  // URLs of the GIFs
const gifUrls = [
    '../gif/processed_imagery_area.gif',
    '../gif/processed_imagery_point.gif',
    '../gif/processed_imagery_polyline.gif',
    '../gif/combined.gif',
  ];
  
  // Preload the GIFs and attach load event listeners
  let loadedCount = 0;
  gifUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      loadedCount++;
      if (loadedCount === gifUrls.length) {
        // All GIFs have loaded, so display them
        displayGifs();
      }
    };
  });
  
  // Function to display the GIFs
  function displayGifs() {
    const gifs = document.querySelectorAll('.monochrome');
    gifs.forEach(gif => {
      gif.style.visibility = 'visible'; // or gif.style.display = 'block';
    });
  }
  

///////////////////////
// css98 custom behavior

const windowElement = document.querySelector('.window');
const windowBody = windowElement.querySelector('.window-body');

const maximizeButton = document.querySelector('[aria-label="Maximize"]');
const closeButton = document.querySelector('[aria-label="Close"]');
const minimizeButton = document.querySelector('[aria-label="Minimize"]');

// Maximize Button
maximizeButton.addEventListener('click', () => {
  windowElement.style.width = '100vw';
  windowElement.style.height = '100vh';
});

// Close Button
closeButton.addEventListener('click', () => {
  windowElement.remove();
});

// Minimize Button
minimizeButton.addEventListener('click', () => {
  windowBody.classList.toggle('hidden');
  // console.log("MINN")
});

// Add the 'hide-scrollbar' class to the body on page load
document.body.classList.add('hide-scrollbar');

// splash window config
var splashInProgress = false; // Flag to track if the splash behavior is already in progress
var currentMessage = ''; // Variable to store the current message

document.getElementById('command-prompt').addEventListener('keydown', function(event) {
  // Check if the pressed key is the "Escape" key
  if (event.key === 'Escape') {
    // console.log("CLOSED")
    closeSplash();
    return; // Exit the function if the "Escape" key was pressed
  }

  // If the splash behavior is in progress, append the current message on every keypress
  if (splashInProgress) {
    this.value += '\n' + currentMessage;
    return;
  }

  splashInProgress = true; // Set the flag to true to prevent further triggering

  // Append the countdown message to the text area
  this.value += '\nC:\\> Closing in 3 seconds...';
  
  // Make the text area read-only to prevent further typing
  this.readOnly = true;

  // Define the unique messages
  var messages = [
    'just kidding they all do the same thing',
    'Im a computer',
    'Stop all the downloading',
    'beepbeepbeepbeepbeepbeepbeepbeepbeepbeep',
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
  ];

  // Define the time intervals for displaying the messages (in milliseconds)
  var messageIntervals = [3000, 1800, 1000, 500, 250];

  // Start a separate timer for the countdown display
  var displayCountdown = 3 * 10; // 3 seconds, with 10 updates per second
  var messageIndex = 0;
  var displayTimer = setInterval(function() {
    displayCountdown--;
    var wholeNumberCountdown = Math.ceil(displayCountdown / 10); // Round up to the nearest whole number
    currentMessage = 'C:\\> Closing in ' + wholeNumberCountdown + ' seconds...'; // Assign the current message
    document.getElementById('command-prompt').value = document.getElementById('command-prompt').value.replace(/\d+ seconds...$/, wholeNumberCountdown + ' seconds...');
    
    // Check if it's time to display the next message
    if (displayCountdown * 100 <= messageIntervals[messageIndex]) {
      currentMessage = messages[messageIndex]; // Update the current message
      document.getElementById('command-prompt').value += '\n' + currentMessage;
      messageIndex++;
    }

    if (displayCountdown <= 0) {
      clearInterval(displayTimer);
      closeSplash();
    }
  }, 100); // Update 10 times per second
});

function closeSplash() {
  document.getElementById('splash-window').style.display = 'none';

  // Remove the 'hide-scrollbar' class from the body to restore the scrollbar
  document.body.classList.remove('hide-scrollbar');
}


////////////////
// desktop image carousel
// Array of image URLs for background images
const backgroundImages = [
    'wallpapers/wind.jpg',
    'wallpapers/clouds.jpg',
    'wallpapers/diet_bliss.jpg',
  ];
  
  // Function to select a random image URL from the array
  function getRandomBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    return backgroundImages[randomIndex];
  }
  
  // Function to set the background image
  function setBackgroundImage(imageUrl) {
    document.body.style.backgroundImage = `url('${imageUrl}')`;
  }
  
  // Function to be called on page load
  function onPageLoad() {
    const randomImageUrl = getRandomBackgroundImage();
    setBackgroundImage(randomImageUrl);
  }
  
  // Call the onPageLoad function when the page has finished loading
  window.addEventListener('load', onPageLoad);
  

//////////
function updateBouncingContainerSize() {
  const bouncingContainer = document.querySelector('.bouncing-container');
  bouncingContainer.style.width = window.innerWidth + 'px';
  bouncingContainer.style.height = document.documentElement.scrollHeight + 'px'; // Set height to total document height
}

// Call the function initially and whenever the window is resized
updateBouncingContainerSize();
window.addEventListener('resize', updateBouncingContainerSize);

// change cursor when dragging windows
$(document).ready(function() {
  let maxZIndex = 1;

  $(".window").draggable({
      start: function(event, ui) {
          maxZIndex++;
          $(this).css('z-index', maxZIndex);
          $(this).css('cursor', 'grabbing'); // Change cursor when dragging starts
      },
      stop: function(event, ui) {
          $(this).css('z-index', maxZIndex);
          $(this).css('cursor', 'grab'); // Change cursor back to "grab" when dragging stops
      }
  });
});


//////
// audio player
const audio = document.getElementById("myAudio");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");

playButton.addEventListener("click", () => {
  console.log("Play button clicked."); // Add this line
  audio.play();
  playButton.style.display = "none";
  pauseButton.style.display = "inline";
});

pauseButton.addEventListener("click", () => {
  console.log("Pause button clicked."); // Add this line
  audio.pause();
  pauseButton.style.display = "none";
  playButton.style.display = "inline";
});

// Function to update the zoom value based on window width
function updateZoom() {
  const windowWidth = window.innerWidth;
  let zoomValue = 1;

  // Adjust the zoom value based on the window width
  if (windowWidth < 600) {
    zoomValue = 0.8;
  } else if (windowWidth < 1000) {
    zoomValue = 0.9;
  }

  // Apply the new zoom value to the body
  document.body.style.zoom = zoomValue;
}

// Initial update on page load
updateZoom();

// Listen for the window resize event
window.addEventListener('resize', updateZoom);
}