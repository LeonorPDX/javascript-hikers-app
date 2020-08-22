class CreateHikes < ActiveRecord::Migration[6.0]
  def change
    create_table :hikes do |t|
      t.string :name
      t.string :difficulty
      t.string :distance
      t.string :elevation_gain
      t.string :hike_type
      t.string :image_url
      t.text :description
      t.references :trailhead, null: false, foreign_key: true

      t.timestamps
    end
  end
end
