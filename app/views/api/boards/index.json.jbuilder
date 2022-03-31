@boards.each do |board|
    json.set! board.id do 
        json.extract! board, :id, :name, :details, :public, :user_id
        json.pins board.pins.each do |pin|
            json.set! pin.id do 
                json.extract! pin, :id, :title, :details, :user_id
            end
        end
    end
end