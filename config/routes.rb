Rails.application.routes.draw do
  namespace :api do
    namespace :user do
      resources :games, only: [:index, :update]
    end

    resources :games, only: [:index]
    resources :scores, only: [:index, :show]
  end

  get "/auth/:provider/callback", to: "auth#create"
  root "client#show"
end
