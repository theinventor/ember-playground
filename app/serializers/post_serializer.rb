class PostSerializer < ActiveModel::Serializer
  embed :ids

  attributes :id, :title, :body
  attribute :tibody
  has_many :comments#, embed: :objects


  def tibody
    "#{self.title} + #{self.body}"
  end
end
