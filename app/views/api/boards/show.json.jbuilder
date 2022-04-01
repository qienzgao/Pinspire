json.extract! @board, :id, :name, :details, :public, :user_id
json.name @board.name
json.details @board.details
json.public @board.public
json.user_id @board.user_id


json.pins @board.pins.each do |pin|
    json.set! pin.id do 
        json.extract! pin, :id, :title, :details, :user_id
    end
end