json.extract! user, :id, :email, :age
if user.img.attached?
    json.imgUrl url_for(user.img)
end