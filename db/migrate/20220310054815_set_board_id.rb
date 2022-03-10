class SetBoardId < ActiveRecord::Migration[5.2]
  def change
    remove_column :saved_pins, :board_id
    add_column :saved_pins, :board_id, :integer
  end
end
