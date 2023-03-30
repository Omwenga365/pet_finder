class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_name, :email, :passward_digest
end
