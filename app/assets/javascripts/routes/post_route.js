Embertestanurag.PostRoute = Ember.Route.extend({

    model: function(params) {
        return Embertestanurag.Post.find(params.post_id);
    }//,

//    setupController: function(params) {
//        return this.controllerFor('comments').set('content', Embertestanurag.Comment.find({post_id: params.post_id}));
//    }


});
