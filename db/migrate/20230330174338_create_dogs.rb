class CreateDogs < ActiveRecord::Migration[6.1]
  def change
    create_table :dogs do |t|
      t.string :name
      t.string :breed
      t.text :image_url
      t.string :last_seen
      t.string :user_id

      t.timestamps
    end
  end
end
