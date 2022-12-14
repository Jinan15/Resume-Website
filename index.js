// Select DOM Items
const TechnicalSkillsButton = document.getElementById("Technical-skills");
const softSkillsButton = document.getElementById("soft-skills");

const TechnicalSkillsBox = document.getElementById("Technical-skills-box");
const softSkillsBox = document.getElementById("soft-skills-box");

const containerDiv = document.getElementById("container");

// If Technical button is selected then var is true, else false
let currentStateTechnical = true;

// Transitions to Technical skills panel
function TechnicalSkills() {
    if (currentStateTechnical == false) {
        softSkillsButton.classList.remove("active");
        TechnicalSkillsButton.classList.add("active");
        softSkillsBox.classList.remove("panel-on");
        TechnicalSkillsBox.classList.remove("panel-off");
        softSkillsBox.classList.add("panel-off");
        TechnicalSkillsBox.classList.add("panel-on");

        containerDiv.style.minHeight = "1000px";

        currentStateTechnical = true;
    }
}

// Transitions to soft skills panel
function SoftSkills() {
    if (currentStateTechnical) {
        var clientCurHeight = document.getElementById("container").clientHeight;

        TechnicalSkillsButton.classList.remove("active");
        softSkillsButton.classList.add("active");
        TechnicalSkillsBox.classList.remove("panel-on");
        softSkillsBox.classList.remove("panel-off");
        TechnicalSkillsBox.classList.add("panel-off");
        softSkillsBox.classList.add("panel-on");

        containerDiv.style.minHeight = clientCurHeight + "px";

        currentStateTechnical = false;
    }
}