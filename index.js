// Select DOM Items
const hardSkillsButton = document.getElementById("hard-skills");
const softSkillsButton = document.getElementById("soft-skills");

const hardSkillsBox = document.getElementById("hard-skills-box");
const softSkillsBox = document.getElementById("soft-skills-box");

let currentStateHard = true;

var nodes = document.getElementById("soft-skills-box").getElementsByTagName('*');
for (var i = 0; i < nodes.length; i++) {
    nodes[i].disabled = true;
}

// hardSkillsButton.addEventListener("click", HardToSoftSkills);
// softSkillsButton.addEventListener("click", SoftToHardSkills);

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