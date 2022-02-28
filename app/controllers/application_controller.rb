class ApplicationController < ActionController::Base
    #celll
    helper_method :current_user, :logged_in?
    
    def current_user 
        @current_user ||= User.find_by(session_token: session[:session_token])
    end 

    def ensure_logged_in
        render json: { base: [ 'invalid credentials'] }, status: 401 unless logged_in?
    end 
    
    def ensure_logged_out 
        redirect_to users_url if logged_in?
    end 
    
    def login!(user)
        session[:session_token] = user.reset_session_token!
    end 

    def logout!
        current_user.reset_session_token! if logged_in?
        session[:session_token] = nil
        @current_user = nil
        redirect_to new_session_url
    end 

    def logged_in?
        !!current_user
    end 
    
end
