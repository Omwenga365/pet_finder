class UsersController < ApplicationController
    before_action :authorize, only: [:show]

    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
            render json: user, status: :created
        
    end
 
    def show
        user = User.find_by(id: session[:user_id])
        render json: user
    end

    def index
        render json: User.all
    end

    private

    def user_params
        params.permit(:user_name, :email, :password, :id)
    end

    def authorize 
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end