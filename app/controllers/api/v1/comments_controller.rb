class Api::V1::CommentsController < ApplicationController
  respond_to :json

  def index
    comments = Comment.where(post_id: params[:post_id]) if params[:post_id]
    comments = Comment.find(params[:ids]) if params[:ids]
    respond_with comments
  end

  def show
    puts params
    binding.pry
  end

  def create
    puts params
    binding.pry
  end
end
