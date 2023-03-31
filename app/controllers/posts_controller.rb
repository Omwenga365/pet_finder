class PostsController < ApplicationController
    def index
        posts = Post.all
        render json: posts
    end

    def create 
        post = Post.create(post_params)
        render json: post, status: :created
    end 

    def destroy
        post = find_post
        if post 
            post.destroy
            head :no_content
        else
            render json:{ error:"Post not found" }, status: :not_found
        end
    end

    def update
        dog = find_dog
        dog.update(dog_params)
        render json: dog
    end

    private

    def find_post
        Post.find(params[:id])
    end

    def post_params
        params.permit(:user_id, :description)
    end
end
