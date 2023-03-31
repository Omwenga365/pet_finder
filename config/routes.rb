Rails.application.routes.draw do
  resources :posts
  resources :users
  resources :dogs

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "fallback#create"
  delete "/logout", to: "fallback#destroy"

  # Define your fallback route to map all requests to the "fallback#index" action
  match '*path', to: 'fallback#index', via: :all

end
