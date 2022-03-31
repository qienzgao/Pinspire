Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :pins, only: [:index, :create, :destroy, :show, :update]
    resources :boards, only: [:index, :show, :create, :update, :destroy]
    resources :saved_pins, only: [:index, :create, :destroy]
  end

  root "static_pages#root"
end
