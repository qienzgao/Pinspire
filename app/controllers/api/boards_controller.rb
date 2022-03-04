class Api::BoardsController < ApplicationController
    def index
        @boards = Board.all
    end

    def show
        @board = Board.find(params[:id])
        render :show
    end

    def create
        @board = Board.new(board_params)
        if @board.save
            render :show
        else
            render json: @board.errors.full_messages, status: 401
        end
    end

    def update
        @board = Board.find(params[:id])
        if @board.update(board_params)
            render:show
        else
            render json: @board.errors.full_messages, status: 401
        end
    end

    def destroy
        @board = Board.find_by(id: params[:id])
        if @board && @board.destroy
            render :index
        else
            render json: ["Opps! There's nothing to delete"], status: 401
        end
    end

    private
    def board_params
        params.require(:board).permit(:name, :details, :public, :user_id)
    end
end
