Embertestanurag.CommentsRoute = Ember.Route.extend({
    model: function() {
        return Embertestanurag.Comment.find({post_id: 1});
    }
});