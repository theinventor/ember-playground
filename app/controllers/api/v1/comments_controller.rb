class Api::V1::CommentsController < ApplicationController
  respond_to :json

  def index
    comments = Comment.where(post_id: params[:post_id])
    respond_with comments
  end

  def create
    puts params
    binding.pry
  end
end
