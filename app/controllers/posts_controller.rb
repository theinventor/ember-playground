class PostsController < ApplicationController


  def index
    @posts = Post.all
    render layout: "no_ember"
  end

  def main
    #main ember app
  end
end
