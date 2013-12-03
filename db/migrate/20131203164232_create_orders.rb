class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.decimal :total
      t.text :confirmation

      t.timestamps
    end
  end
end
