Storefront::Application.routes.draw do
  devise_for :users
  root 'products#index'
  resources :products, only: [:index, :show]
  post '/products/:product_id/add_to_cart', to: 'line_items#create', as: 'add_product_to_cart'
end
