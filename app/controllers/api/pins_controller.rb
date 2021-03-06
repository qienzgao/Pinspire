class Api::PinsController < ApplicationController
    def index
        # debugger
        @pins = Pin.all
        render :index
    end

    def show
        @pin = Pin.find(params[:id])
        render :show
    end

    def create
        @pin = Pin.new(pin_params)
        if @pin.save
            render :show
        else
            render json: @pin.errors.full_messages, status: 401
        end
    end

    def update
        @pin = Pin.find(params[:id])
        if @pin.update(pin_params)
            render :show
        else
            render json: @pin.errors.full_messages, status: 401
        end
    end

    def destroy
        @pin = Pin.find_by(id: params[:id])
        if @pin && @pin.destroy
            render :index
        else
            render json: ["Opps! There's nothing to delete"], status: 422
        end
    end

    private

    def pin_params
        params.require(:pin).permit(:title, :details, :user_id, :img)
    end
end
