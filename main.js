    // Variable Declarations
    var button = document.querySelector('#start');
    var characterNameInput = document.querySelector('#character-name')

    // To be implemented
    var characterHairInput = document.querySelector('#character-hair')
    var starterWeaponSelect = document.querySelector('#starter-weapon')

    var content = document.querySelector('#scene')

    const displayName = document.getElementById("display-name");

    characterNameInput.addEventListener("input", function () {
        // Get input
        const name = characterNameInput.value;
    
        // Display input
        displayName.textContent = name;
        localStorage.setItem("name", name); 
    });

    function renderScene() {
        var text = "Next" 
        if (story[story.currentScene].buttonText) {
            text = story[story.currentScene].buttonText
        }
        content.innerHTML = `
        <h1>${story[story.currentScene].title}</h1>
        <div class="storyInfo">
        <p>${story[story.currentScene].story}</p>
        </div>
        ${getInputs()}
        <button id = "submit-button">${text}</button>
        `  
       var button = document.querySelector("#submit-button")
       button.addEventListener('click', function() {
        getInputValue()
       })
       characterInfo()
    }

    function getInputValue() {
        var inputs = document.querySelectorAll('input[type="radio"]')
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].checked) {
               story.currentScene = inputs[i].getAttribute('data-destination')
               localStorage.setItem("currentScene", story.currentScene)
               renderScene();
               return;
            }
        }
        story.currentScene = story[story.currentScene].defaultDestination
        renderScene()
    }

    // Checks storage
    function characterInfo(){
        if(localStorage.getItem("name") !== null){
            displayName.textContent = localStorage.getItem("name")
        }
    }

    function storage() {
        if(localStorage.getItem("currentScene") !== null){
            story.currentScene = localStorage.getItem("currentScene")
            renderScene();
            return;
        }
    }

    // Calls storage
    window.onload = function() {
        storage();
    }  

    //Clear storage
    var button = document.querySelector("#clear-button")
        button.addEventListener('click', function() {
            localStorage.clear()
            location.reload()
        })
    

    getInputs()
    function getInputs() {
        var input = ""
        if (!("choices" in story[story.currentScene])) {
            return "";
        }
        for(var i = 0; i < story[story.currentScene].choices.length; i++) {
            input += `
            <div>
            <input data-destination = ${story[story.currentScene].choices[i].destination} id="radio${i}" name="choices" type = "radio" />
            <label class="choices" for="radio${i}">${story[story.currentScene].choices[i].choice}</label>
            </div>
            `
         }
         return input;
    }