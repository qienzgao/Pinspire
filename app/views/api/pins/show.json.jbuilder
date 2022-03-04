json.extract! @pin, :id, :title, :details, :user_id
if @pin.img.attached?
    json.imgUrl url_for(@pin.img) 
end