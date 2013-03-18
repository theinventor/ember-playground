class PostSerializer < ActiveModel::Serializer
  has_many :comments

  attributes :id, :title, :body
  attribute :tibody

  def tibody
    "#{self.title} + #{self.body}"
  end
end
