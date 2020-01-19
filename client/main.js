import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";
import 'bootstrap-sass';

var alltext = new ReactiveVar("Koreanfish: 發大財");

Template.koreanfish.helpers({
    "contents": function() {
        return alltext.get();
    }
});

Template.koreanfish.events({
    "click #song": function(sender) {
        sender.preventDefault();
        var content = document.getElementById("input").value;
        var original = alltext.get();
        original += "\n你: " + content;
        original += "\nKoreanfish: " + koreanfishreaction();
        document.getElementById("input").value = "";
        alltext.set(original);
        setTimeout(() => {
            var textarea = document.getElementById("chatarea");
            textarea.scrollTop = textarea.scrollHeight;
        }, 100);
    },"click #ching": function(sender) {
        sender.preventDefault();
        document.getElementById("input").value = "";
        alltext.set("Koreanfish: 發大財");
    }
})

var koreanfishreaction = function() {
    var fadachai = [
        "發大財",
        "我就是要發大財啊",
        "我滿腦子想的都是要怎麼發大財",
        "發大財啊",
        "當然是發大財需要什麼嘛",
    ]
    return fadachai[getRandomInt(fadachai.length)];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }