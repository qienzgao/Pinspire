class User < ApplicationRecord
    #figvaper
    after_initialize :ensure_session_token
    attr_reader :password
    #    error['invalidEmail'] = `You missed a spot! Don't forget to add your email.`
    #    } else if (!this.state.email.includes("@" && ".")) {
    #         error['invalidEmail'] = `Hmm...that doesn't look like an email address.`
    #     } else if (this.state.password.length < 6) {
    #         error['invalidPass'] = `Your password is too short! You need 6 + characters.`
    #     } else if (!Number.isInteger(this.state.age)) {
    #         error['invalidAge'] = 'Please enter a valid number.'

    validates :email, :age, :session_token, :password_digest, presence: true
    validates :email, :session_token, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true } 
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, on: :create
            

    has_many :pins, 
        primary_key: :id, 
        foreign_key: :user_id, 
        class_name: :Pin

    has_many :boards, 
        primary_key: :id, 
        foreign_key: :user_id, 
        class_name: :Board

    has_many :followers, 
        primary_key: :id, 
        foreign_key: :follower_id, 
        class_name: :Follow

    has_many :followings, 
        primary_key: :id, 
        foreign_key: :following_id, 
        class_name: :Follow

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password) 
            return user 
        else  
            return nil
        end
    end
    
    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
    
    def ensure_session_token
        self.session_token ||= SecureRandom.base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.base64
        self.save!
        self.session_token
    end

end
