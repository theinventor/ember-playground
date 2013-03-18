Embertestanurag.CommentsRoute = Ember.Route.extend({
    model: function(params) {
//       alert(params.post_id);
        return Embertestanurag.Comment.find({ post_id: 1 });
    }
});