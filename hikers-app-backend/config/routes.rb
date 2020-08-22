Rails.application.routes.draw do
  resources :hikes
  resources :trailheads do
    resources :hikes, only: [:index]
  end  
end
