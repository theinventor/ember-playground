Embertestanurag.Comment = DS.Model.extend({
  postId: DS.attr('number'),
  body: DS.attr('string'),
  post: DS.belongsTo('Embertestanurag.Post')
});