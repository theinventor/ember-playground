class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body
  attribute :tibody

  def tibody
    "#{self.title} + #{self.body}"
  end
end
