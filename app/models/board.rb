class Board < ApplicationRecord
    validates :name, :user_id, presence: true
    validates :public, presence: true, inclusion: { in: [true, false] }

    belongs_to :user, 
        primary_key: :id, 
        foreign_key: :user_id,
        class_name: :User

    has_many :pins_on_board, 
        primary_key: :id, 
        foreign_key: :board_id, 
        class_name: :SavedPin

    has_many :pins, 
        through: :pins_on_board, 
        source: :pin
end
