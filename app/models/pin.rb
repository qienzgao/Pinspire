class Pin < ApplicationRecord
    validates :title, :user_id, presence: true

    belongs_to :user, 
        primary_key: :id, 
        foreign_key: :user_id, 
        class_name: :User

    has_many :pins_on_board, 
        primary_key: :id, 
        foreign_key: :pin_id, 
        class_name: :SavedPin

    has_many :boards, 
        through: :pins_on_board, 
        source: :board

    has_one_attached :img
    
end
