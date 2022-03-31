if @saved_pins
    @saved_pins.each do |saved_pin|
        json.set! saved_pin.id do 
            json.extract! saved_pin, :id, :pin_id, :board_id
        end
    end
end