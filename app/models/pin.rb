class Pin < ApplicationRecord
    validates :title, :user_id, presence: true

    belongs_to :user, 
        primary_key: :id, 
        foreign_key: :user_id, 
        class_name: :User

    belongs_to :board, 
        primary_key: :id, 
        foreign_key: :board_id, 
        class_name: :Board
end
