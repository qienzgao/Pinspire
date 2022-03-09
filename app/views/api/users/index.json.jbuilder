if @users 
    @users.each do |user|
        json.set! user.id do 
            json.extract! user, :id, :email, :age
            json.imgUrl url_for(user.img) if user.img.attached?
        end
    end
end