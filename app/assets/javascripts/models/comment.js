Embertestanurag.Comment = DS.Model.extend({
  post: DS.belongsTo('Embertestanurag.Post'),
  postId: DS.attr('number'),
  body: DS.attr('string')
});