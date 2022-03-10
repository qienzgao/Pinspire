json.extract! user, :id, :email, :age
if user.img.attached?
    json.imgUrl url_for(user.img)
end

if user.cover.attached?
    json.coverUrl url_for(user.cover)
end