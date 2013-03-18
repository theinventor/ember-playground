Embertestanurag.Post = DS.Model.extend({
  comments: DS.hasMany('Embertestanurag.Comment'),
  title: DS.attr('string'),
  body: DS.attr('string')
});