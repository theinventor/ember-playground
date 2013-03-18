Embertestanurag.Store = DS.Store.extend({
  revision: 11,
  adapter: DS.RESTAdapter.create({
    namespace: 'api/v1'
   })
});

DS.RESTAdapter.map('Embertestanurag.Post', {
    comments: { embedded: 'always'}
});