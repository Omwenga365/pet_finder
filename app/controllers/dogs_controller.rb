class DogsController < ApplicationController
    def index
        render json: Dog.all
    end

    def show
        dog = find_dog
        render json: dog
    end

    def create
        dog = Dog.create!(dog_params) 
        render json: dog, status: :created
    end

    def update 
        dog = find_dog
        dog.update(dog_params)
        render json: dog    
    end

    def destroy
        dog = find_dog
        if dog 
            dog.destroy
            head :no_content
        else
            render json:{ error:"Dog not found" }, status: :not_found
        end
    end

    private

    def find_dog
        Dog.find(params[:id])
    end

    def dog_params
        params.permit(:name, :breed, :image_url, :last_seen, :user_id)
    end
end
