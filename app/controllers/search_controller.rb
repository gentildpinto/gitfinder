class SearchController < ApplicationController
  def index
  end

  def search
    if params[:username] == "gentil"
      @user = User.new("gentilp")
      render "profile/index"
    else
      session[:not_found_user] = true
      redirect_to root_path
    end
  end
end
