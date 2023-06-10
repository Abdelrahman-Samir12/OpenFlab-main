# Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
# Get /about
Rails.application.routes.draw do
  get 'about', to: 'about#index'

  get 'sign_up', to: 'registrations#new'
  post 'sign_up', to: 'registrations#create'

  get 'password', to: 'passwords#edit', as: :edit_password
  patch 'password', to: 'passwords#update'

  get 'sign_in', to: 'sessions#new'
  post 'sign_in', to: 'sessions#create'

  get 'password/reset', to: 'password_resets#new'
  post 'password/reset', to: 'password_resets#create'

  get 'password/reset/edit', to: 'password_resets#edit'
  patch 'password/reset/edit', to: 'password_resets#update'

  delete 'logout', to: 'sessions#destroy'

  root to: 'main#index'

  get 'topics', to: 'topics#index'
  get 'PDAEditor', to: 'topics#pda'
  get 'FA', to: 'topics#fa'

  resources :groups do
    resources :members, only: %i[create destroy]
  end

  get '/groups/new', to: 'groups#new', as: 'new_group'
  get '/groups', to: 'groups#index', as: 'groups'
end
