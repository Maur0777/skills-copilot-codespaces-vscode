function skillsMember() {
  this.skill = "Web Developer";
  this.experience = 3;
  this.level = "Junior";
  this.interest = "Frontend";
  this.showSkills = function () {
    console.log(`My skill is ${this.skill} and I'm interested in ${this.interest}`);
  }
}