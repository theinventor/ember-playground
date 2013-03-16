Embertestanurag.PostsNewController = Ember.ObjectController.extend({
    save: function() {
        // commit and then clear the local transaction
        this.transaction.commit();
        this.transaction = null;
    },
    startEditing: function() {
        // create a new record on a local transaction
        this.transaction = this.get('store').transaction();
        this.set('content', this.transaction.createRecord(Embertestanurag.Post, {}));
    }
});