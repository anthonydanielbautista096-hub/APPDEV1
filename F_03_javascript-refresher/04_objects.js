const aboutMe = {
  name: "Anthony Daniel Bautista",
  age: 20,
  course: "APPDEV1",
  introduce: function () {
    console.log(`Hi, I'm ${this.name}, age ${this.age}.`);
  }
};

aboutMe.hobby = "Coding";
aboutMe.introduce();
console.log(aboutMe.hobby);
