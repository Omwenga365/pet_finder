class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :breed, :image_url, :last_seen, :user_id
end
