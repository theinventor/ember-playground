Embertestanurag.PostsRoute = Ember.Route.extend({
    model: function() {
        return Embertestanurag.Post.find();
    }
});