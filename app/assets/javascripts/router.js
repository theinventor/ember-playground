Embertestanurag.Router.map(function() {
    this.resource('posts', function() {
        this.resource('post', { path: ':post_id' });
    });
});
