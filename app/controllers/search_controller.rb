class SearchController < ApplicationController
  def index
  end

  def search
    @user = GithubUser.new(params[:username])
    if @user.exist?
      render "profile/index"
    else
      session[:not_found_user] = true
      redirect_to root_path
    end
  end
end
