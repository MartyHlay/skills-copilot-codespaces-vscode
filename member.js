function skillsMember() {
  var skills = document.getElementsByClassName("skills");
  var member = document.getElementsByClassName("member");
  var i;
  for (i = 0; i < skills.length; i++) {
    skills[i].style.display = "none";
  }
  for (i = 0; i < member.length; i++) {
    member[i].className = member[i].className.replace(" active", "");
  }
  document.getElementById(memberName).style.display = "block";
  evt.currentTarget.className += " active";
}