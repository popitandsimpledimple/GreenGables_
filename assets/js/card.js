
const colorButton = document.getElementById("btn_color_1");

colorButton.addEventListener("click", function() {
  if (colorButton.classList.contains("active1")) {
    colorButton.classList.remove("active1");
  } else {
    colorButton.classList.add("active1");
  }
});

const colorButton1 = document.getElementById("btn_color_2");

colorButton1.addEventListener("click", function() {
  if (colorButton1.classList.contains("active2")) {
    colorButton1.classList.remove("active2");
  } else {
    colorButton1.classList.add("active2");
  }
});

const colorButton3 = document.getElementById("btn_color_3");

colorButton3.addEventListener("click", function() {
  if (colorButton3.classList.contains("active3")) {
    colorButton3.classList.remove("active3");
  } else {
    colorButton3.classList.add("active3");
  }
});

const colorButton4 = document.getElementById("btn_color_4");

colorButton4.addEventListener("click", function() {
  if (colorButton4.classList.contains("active4")) {
    colorButton4.classList.remove("active4");
  } else {
    colorButton4.classList.add("active4");
  }
});

//----------------------------size


const sizeButtonS = document.getElementById("size_btn_S");

sizeButtonS.addEventListener("click", function() {
  if (sizeButtonS.classList.contains("active")) {
    sizeButtonS.classList.remove("active");
  } else {
    sizeButtonS.classList.add("active");
  }
});

const sizeButtonM = document.getElementById("size_btn_M");

sizeButtonM.addEventListener("click", function() {
  if (sizeButtonM.classList.contains("active")) {
    sizeButtonM.classList.remove("active");
  } else {
    sizeButtonM.classList.add("active");
  }
});

const sizeButtonL = document.getElementById("size_btn_L");

sizeButtonL.addEventListener("click", function() {
  if (sizeButtonL.classList.contains("active")) {
    sizeButtonL.classList.remove("active");
  } else {
    sizeButtonL.classList.add("active");
  }
});
//----------------------- 


   // Get the modal
    var modal = document.getElementById('myModal');
    
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    //------------------------

    const toggleButton = document.getElementById("toggle-button");
const text = document.getElementById("text");

toggleButton.addEventListener("click", function() {
  if (text.style.display === "none") {
    text.style.display = "block";
    toggleButton.textContent = "Скрыть текст";
  } else {
    text.style.display = "none";
    toggleButton.textContent = "Характеристика";
  }
});



const deleteBtn = document.getElementById("deleteBtn");
const myDiv = document.getElementById("review_delete");

deleteBtn.addEventListener("click", function() {
  myDiv.remove();
});