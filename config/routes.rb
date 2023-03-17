  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Get /about
Rails.application.routes.draw do

  get "about", to: "about#index"

  get "sign_up", to: "registrations#new"
  post "sign_up", to: "registrations#create"
  
  get "password", to: "passwords#edit", as: :edit_password
  patch "password", to: "passwords#update"

  get "sign_in", to: "sessions#new"
  post "sign_in", to: "sessions#create"
  
  get "password/reset", to: "password_resets#new"
  post "password/reset", to: "password_resets#create"
  
  get "password/reset/edit", to: "password_resets#edit"
  patch "password/reset/edit", to: "password_resets#update"

  delete "logout", to: "sessions#destroy"
  
  root to: "main#index"
  get "FA", to: "fa#index"
  get "FAFixer" ,to: "fafixer#index"
  get "FAtoRE", to: "fatore#index"
  get "NFAtoDFA", to: "nfatodfa#index"
  get "GrammarEditor" ,to:"grammareditor#index"
  get "minDFA",to: "mindfa#index"
  get "REtoFA",to:"retofa#index"
  get "PDAEditor",to:"pdaeditor#index"
  get "TMEditor",to:"tmeditor#index"
  get "rmenu",to:"rmenu#index"
  get "multiRun",to:"multirun#index"
  get "topics", to: "topics#index"
  get "exercises",to:"exercise#index"
  get"FAExTemplate",to:"fa_ex_template#index"
  
end
