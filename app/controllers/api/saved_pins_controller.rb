class Api::SavedPinsController < ApplicationController
    def index
        @saved_pins = SavedPin.all
        render :index
    end

    def create
        @saved_pin = SavedPin.new(saved_pin_params)
        if @saved_pin.save
            render :show
        else
            render json: @saved_pin.errors.full_messages, status: 401
        end
    end

    def destroy
        @saved_pin = SavedPin.find_by(id: params[:id])
        if @saved_pin && @saved_pin.destroy
            render json: ["This pin has been removed from the board."]
        else
            render json: ["Opps! There's nothing to delete"], status: 422
        end
    end

    private

    def saved_pin_params
        params.require(:saved_pin).permit(:pin_id, :board_id)
    end
end
