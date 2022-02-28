class Api::UsersControllerController < ApplicationController

    def index
        @users = User.all
        render :index
    end

    def show
        @user = User.find(params[:id])
        if @user
            render :show
        else
            render json: ['User not found'], status: 400
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            render json: ['Something went wrong...'], status: 404
        end
    end

    def update
        @user = User.find(params[:id])
        if @user.update(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :username, :age, :password)
    end
end
