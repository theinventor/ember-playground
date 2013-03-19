Embertestanurag.CommentsNewController = Ember.ObjectController.extend({
    save: function() {
        // commit and then clear the local transaction
        this.transaction.commit();
        this.transaction = null;
    },

    startEditing: function() {
        // create a new record on a local transaction
        this.transaction = this.get('store').transaction();
        this.set('content', this.transaction.createRecord(Embertestanurag.Comment));
//        These are attempts at getting the object to build as a child instead of a standalone
//        this.set('content', this.get('content.comments').transaction.createRecord());
//        this.get('content.comments').createRecord();
        this.content.set('postId',this.controllerFor('post').get('id'));
    },

    stopEditing: function() {
        // rollback the local transaction if it hasn't already been cleared
        if (this.transaction) {
            this.transaction.rollback();
            this.transaction = null;
        }
    },

    transitionAfterSave: function() {
        // when creating new records, it's necessary to wait for the record to be assigned
        // an id before we can transition to its route (which depends on its id)
        if (this.get('content.id')) {
            alert(this.get('content'))
            this.transitionToRoute('post');
        }
    }.observes('content.id'),

    cancel: function() {
        this.stopEditing();
        this.transitionToRoute('post');
    }
});