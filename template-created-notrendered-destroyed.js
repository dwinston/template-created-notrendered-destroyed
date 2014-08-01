if (Meteor.isClient) {

  UI.body.show = function () {
    return Session.get("show");
  };

  Template.hello.helpers({
    created: function () {
      console.log("created");
      Session.set("show", false);
    },
    rendered: function () {
      console.log("rendered");
    },
    destroyed: function () {
      console.log("destroyed");
    }
  });


  UI.body.events({
    'click input': function () {
      console.log("You pressed the button");
      Session.set("show", true);
    }
  });
}
