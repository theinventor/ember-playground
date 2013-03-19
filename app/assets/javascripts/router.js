Embertestanurag.Router.map(function() {
    this.resource('posts', function() {
        this.route('new');
        this.resource('post', { path: ':post_id' }, function() {
            this.resource('comments', { path: 'comments' }, function(){
                this.route('new');
            });
        });
    });
});
