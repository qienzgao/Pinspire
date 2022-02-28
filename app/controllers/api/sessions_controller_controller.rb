class Api::SessionsControllerController < ApplicationController
    after_initialize :ensure_logged_out, only: [:new, :create]
    after_initialize :ensure_logged_in, only: [:destroy]

    def new 
        @user = User.new 
        render :new
    end 

    def create 
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user 
            login!(@user)
            render 'api/users/show'
        else 
            render json: [`Opps! Password you enter doesn't seem to match the email`], status: 401
        end 
    end 

    def destroy 
        logout! 
    end 

end
