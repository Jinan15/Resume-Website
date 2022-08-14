// Select DOM Items
const hardSkillsButton = document.getElementById("hard-skills");
const softSkillsButton = document.getElementById("soft-skills");

const hardSkillsBox = document.getElementById("hard-skills-box");
const softSkillsBox = document.getElementById("soft-skills-box");

// If hard button is selected then var is true, else false
let currentStateHard = true;

// Transitions to hard skills panel
function HardSkills() {
    if (currentStateHard == false) {
        softSkillsButton.classList.remove("active");
        hardSkillsButton.classList.add("active");
        softSkillsBox.classList.remove("panel-on");
        hardSkillsBox.classList.remove("panel-off");
        softSkillsBox.classList.add("panel-off");
        hardSkillsBox.classList.add("panel-on");

        currentStateHard = true;
    }
}

// Transitions to soft skills panel
function SoftSkills() {
    if (currentStateHard) {
        hardSkillsButton.classList.remove("active");
        softSkillsButton.classList.add("active");
        hardSkillsBox.classList.remove("panel-on");
        softSkillsBox.classList.remove("panel-off");
        hardSkillsBox.classList.add("panel-off");
        softSkillsBox.classList.add("panel-on");

        currentStateHard = false;
    }
}